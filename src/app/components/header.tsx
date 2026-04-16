import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import logoImg from "../../imports/logo.jpeg";
import { whatsappLink, COLORS } from "../constants";

const WHATSAPP_LINK = whatsappLink(
  "Hola! Quiero más información sobre Nexoeducativo.",
);

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#cursos", label: "Cursos" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Bloquear scroll cuando el menú está abierto
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#inicio" className="flex items-center z-50">
              <img
                src={logoImg}
                alt="Nexoeducativo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium ${COLORS.nav.link} transition-colors`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg ${COLORS.nav.hoverBg} transition-colors`}
                  aria-label="Cambiar tema"
                >
                  {theme === "dark" ? (
                    <Sun className={`w-5 h-5 ${COLORS.text.icon}`} />
                  ) : (
                    <Moon className={`w-5 h-5 ${COLORS.text.icon}`} />
                  )}
                </button>
              )}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2.5 ${COLORS.button.primary} rounded-lg font-medium transition-colors`}
              >
                Consultar por WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex lg:hidden items-center gap-2 z-50">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg ${COLORS.nav.hoverBg} transition-colors`}
                  aria-label="Cambiar tema"
                >
                  {theme === "dark" ? (
                    <Sun className={`w-5 h-5 ${COLORS.text.icon}`} />
                  ) : (
                    <Moon className={`w-5 h-5 ${COLORS.text.icon}`} />
                  )}
                </button>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg ${COLORS.nav.hoverBg} transition-colors`}
                aria-label="Menú"
              >
                {isOpen ? (
                  <X className={`w-6 h-6 ${COLORS.text.icon}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${COLORS.text.icon}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 ${COLORS.nav.backdrop} z-40 lg:hidden`}
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={`fixed top-16 sm:top-20 left-0 right-0 bottom-0 ${COLORS.section.primary} z-40 lg:hidden overflow-y-auto`}
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg ${COLORS.nav.mobileLink} transition-colors`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={`mt-4 px-6 py-3 ${COLORS.button.primary} text-center rounded-lg font-medium transition-colors`}
              >
                Consultar por WhatsApp
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
