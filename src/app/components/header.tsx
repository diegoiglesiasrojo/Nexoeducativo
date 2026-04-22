import { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useTheme } from "next-themes";
import logoImg from "../../imports/logo.png";
import { whatsappLink, COLORS } from "../constants";

const WHATSAPP_LINK = whatsappLink(
  "Hola! Quiero más información sobre Nexoeducativo.",
);

const courseSubLinks = [
  { href: "/diplomaturas", label: "Diplomaturas" },
  { href: "/actualizaciones", label: "Actualizaciones Académicas" },
  { href: "/tramos", label: "Tramo Pedagógico" },
  { href: "/especializaciones", label: "Especialización Docente" },
];

const navLinks = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#cursos", label: "Cursos" },
  { href: "/#beneficios", label: "Beneficios" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        coursesRef.current &&
        !coursesRef.current.contains(e.target as Node)
      ) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/#inicio" className="flex items-center gap-2 z-50">
              <img
                src={logoImg}
                alt="Nexoeducativo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <span className="font-bold text-lg tracking-wide text-gray-900 dark:text-white">
                NEXOEDUCATIVO
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.label === "Cursos" ? (
                  <div key="cursos" className="relative" ref={coursesRef}>
                    <button
                      onClick={() => setCoursesOpen((o) => !o)}
                      className={`flex items-center gap-1 text-sm font-medium ${COLORS.nav.link} transition-colors`}
                    >
                      Cursos
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {coursesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-2 z-50">
                        {courseSubLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={() => setCoursesOpen(false)}
                            className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-sm font-medium ${COLORS.nav.link} transition-colors`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
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
              {navLinks.map((link) =>
                link.label === "Cursos" ? (
                  <div key="cursos">
                    <button
                      onClick={() => setMobileCoursesOpen((o) => !o)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg ${COLORS.nav.mobileLink} transition-colors`}
                    >
                      Cursos
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileCoursesOpen && (
                      <div className="ml-4 flex flex-col gap-1 mt-1">
                        {courseSubLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileCoursesOpen(false);
                            }}
                            className={`px-4 py-2.5 rounded-lg text-sm ${COLORS.nav.mobileLink} transition-colors`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg ${COLORS.nav.mobileLink} transition-colors`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
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
