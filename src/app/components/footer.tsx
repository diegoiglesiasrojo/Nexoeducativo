import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";
import logoImg from "../../imports/logo.png";
import {
  whatsappLink,
  SOCIAL_LINKS,
  ENCIENDE_NEGOCIO_URL,
  COLORS,
} from "../constants";

const footerLinks = {
  navigation: [
    { label: "Inicio", href: "/#inicio" },
    { label: "Cursos", href: "/#cursos" },
    { label: "Beneficios", href: "/#beneficios" },
    { label: "Testimonios", href: "/#testimonios" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contacto", href: "/#contacto" },
  ],
  courses: [
    { label: "Diplomaturas", href: "/diplomaturas" },
    { label: "Actualizaciones Académicas", href: "/actualizaciones" },
    { label: "Tramo Pedagógico", href: "/tramos" },
    { label: "Especialización Docente", href: "/especializaciones" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
];

const emailLink = {
  icon: Mail,
  href: `mailto:${SOCIAL_LINKS.email}`,
  label: "Email",
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${COLORS.section.footer} ${COLORS.footer.text}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="Nexoeducativo" className="h-12 w-auto" />
              <span className="font-bold text-lg tracking-wide text-white">
                NEXOEDUCATIVO
              </span>
            </div>
            <p className={`${COLORS.footer.mutedText} mb-6`}>
              Formación académica de excelencia para potenciar tu desarrollo
              profesional.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${COLORS.footer.socialIcon} w-10 h-10 rounded-full flex items-center justify-center transition-colors`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
              <a
                href={emailLink.href}
                onClick={() =>
                  navigator.clipboard.writeText(SOCIAL_LINKS.email)
                }
                className={`${COLORS.footer.socialIcon} w-10 h-10 rounded-full flex items-center justify-center transition-colors`}
                aria-label={emailLink.label}
              >
                <emailLink.icon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className={`${COLORS.footer.heading} font-semibold mb-4`}>
              Navegación
            </h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`${COLORS.footer.link} transition-colors`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className={`${COLORS.footer.heading} font-semibold mb-4`}>
              Programas
            </h3>
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`${COLORS.footer.link} transition-colors`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`${COLORS.footer.heading} font-semibold mb-4`}>
              Contacto
            </h3>
            <ul className={`space-y-3 ${COLORS.footer.mutedText}`}>
              <li>
                <a
                  href={whatsappLink(
                    "Hola! Quiero contactarme con Nexoeducativo.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${COLORS.footer.link} transition-colors`}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className={`${COLORS.footer.link} transition-colors`}
                >
                  {SOCIAL_LINKS.email}
                </a>
              </li>
              <li className="text-sm">Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${COLORS.border.footer}`}>
          <div
            className={`flex flex-col sm:flex-row justify-between items-center gap-4 text-sm ${COLORS.footer.mutedText}`}
          >
            <p>© {currentYear} Nexoeducativo. Todos los derechos reservados.</p>
            <a
              href={ENCIENDE_NEGOCIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${COLORS.footer.link} transition-colors`}
            >
              Desarrollado por Enciende Negocio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
