"""
Convierte declaraciones `function` a funciones flecha (arrow functions) en todos
los archivos .ts/.tsx del proyecto.

Transformaciones:
  function Foo(params) {          →  const Foo = (params) => {
  export function Foo(params) {   →  export const Foo = (params) => {
  export default function Foo() { →  const Foo = () => {  +  export default Foo; al final
"""

import re
import os
import sys


def find_matching_paren(text: str, start: int) -> int:
    """Devuelve la posición del ) correspondiente al ( en `start`."""
    depth = 0
    i = start
    n = len(text)
    in_string = False
    string_char = ""

    while i < n:
        c = text[i]
        if in_string:
            if c == "\\" and string_char != "`":
                i += 2
                continue
            if c == string_char:
                in_string = False
        else:
            if c in ('"', "'", "`"):
                in_string = True
                string_char = c
            elif c == "(":
                depth += 1
            elif c == ")":
                depth -= 1
                if depth == 0:
                    return i
        i += 1
    return -1


def transform_functions(content: str) -> str:
    """Transforma declaraciones function → const arrow en un string de código."""

    # Detecta: [indent][export [default] ]function Name[<generics>](
    func_re = re.compile(
        r"^([ \t]*)((?:export[ \t]+(?:default[ \t]+)?)?)function[ \t]+(\w+)"
        r"((?:[ \t]*<[^(]*)?)[ \t]*\(",
        re.MULTILINE,
    )

    matches = list(func_re.finditer(content))
    if not matches:
        return content

    export_defaults: list[str] = []

    # Procesar en orden inverso para no invalidad posiciones anteriores
    for m in reversed(matches):
        indent = m.group(1)
        export_part = m.group(2) or ""
        func_name = m.group(3)
        generic = (m.group(4) or "").strip()

        is_export_default = bool(re.search(r"\bdefault\b", export_part))
        is_export = bool(re.search(r"\bexport\b", export_part)) and not is_export_default

        # El regex termina con \( por lo que m.end()-1 es la posición de '('
        paren_open = m.end() - 1
        paren_close = find_matching_paren(content, paren_open)
        if paren_close == -1:
            continue

        # Buscar '{' después del paréntesis de cierre
        after_paren = content[paren_close + 1 :]
        brace_match = re.search(r"^([^{]*?)\{", after_paren, re.DOTALL)
        if not brace_match:
            continue

        between = brace_match.group(1)          # texto entre ')' y '{'
        brace_pos = paren_close + 1 + len(between)  # posición de '{' en content

        # Construir el nuevo prefijo
        if is_export:
            new_prefix = f"{indent}export const {func_name} = {generic}("
        elif is_export_default:
            new_prefix = f"{indent}const {func_name} = {generic}("
            export_defaults.append(func_name)
        else:
            new_prefix = f"{indent}const {func_name} = {generic}("

        content = (
            content[: m.start()]
            + new_prefix
            + content[m.end() : paren_close + 1]
            + between
            + "=> {"
            + content[brace_pos + 1 :]
        )

    # Agregar `export default Name;` al final del archivo para los que lo necesitan
    for name in reversed(export_defaults):
        content = content.rstrip("\n") + f"\n\nexport default {name};\n"

    return content


def process_directory(directory: str) -> None:
    total = 0
    for root, dirs, files in os.walk(directory):
        dirs[:] = [d for d in dirs if d not in ("node_modules", ".git", "dist")]
        for fname in files:
            if fname.endswith((".ts", ".tsx")):
                fpath = os.path.join(root, fname)
                with open(fpath, "r", encoding="utf-8") as f:
                    original = f.read()
                transformed = transform_functions(original)
                if transformed != original:
                    with open(fpath, "w", encoding="utf-8") as f:
                        f.write(transformed)
                    print(f"  ✓ {os.path.relpath(fpath, directory)}")
                    total += 1
    print(f"\nArchivos transformados: {total}")


if __name__ == "__main__":
    src = sys.argv[1] if len(sys.argv) > 1 else "."
    print(f"Procesando: {os.path.abspath(src)}\n")
    process_directory(src)
