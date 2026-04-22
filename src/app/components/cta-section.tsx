import { Mail, Phone } from "lucide-react";
import { whatsappLink, COLORS, SOCIAL_LINKS } from "../constants";
import { WhatsAppIcon } from "./whatsapp-icon";

const WHATSAPP_LINK = whatsappLink(
  "Hola! Quiero consultar sobre los programas de formación de Nexoeducativo.",
);

export function CtaSection() {
  return (
    <section
      id="contacto"
      className={`py-16 sm:py-20 ${COLORS.section.gradient}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${COLORS.text.white} mb-6`}
        >
          ¿Listo para Transformar tu Carrera?
        </h2>
        <p
          className={`text-lg sm:text-xl ${COLORS.text.onBrandMuted} mb-10 max-w-2xl mx-auto`}
        >
          Comenzá hoy tu camino hacia el crecimiento profesional. Nuestro equipo
          está listo para asesorarte sin compromiso.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-3 px-10 py-5 ${COLORS.button.ctaWhite} rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl mb-12`}
        >
          <WhatsAppIcon className="w-6 h-6" />
          Consultar por WhatsApp
        </a>

        {/* Contact Info */}
        <div
          className={`grid sm:grid-cols-3 gap-6 mt-12 pt-12 border-t ${COLORS.border.ctaLine}`}
        >
          <div
            className={`flex flex-col items-center gap-2 ${COLORS.text.white}`}
          >
            <div
              className={`${COLORS.icon.onBrandBg} w-12 h-12 rounded-full flex items-center justify-center`}
            >
              <WhatsAppIcon className="w-6 h-6" />
            </div>
            <div className="font-semibold">WhatsApp</div>
            <div className={`text-sm ${COLORS.text.onBrandMuted}`}>
              Respuesta inmediata
            </div>
          </div>

          <div
            className={`flex flex-col items-center gap-2 ${COLORS.text.white}`}
          >
            <div
              className={`${COLORS.icon.onBrandBg} w-12 h-12 rounded-full flex items-center justify-center`}
            >
              <Mail className="w-6 h-6" />
            </div>
            <div className="font-semibold">Email</div>
            <div className={`text-sm ${COLORS.text.onBrandMuted}`}>
              {SOCIAL_LINKS.email}
            </div>
          </div>

          <div
            className={`flex flex-col items-center gap-2 ${COLORS.text.white}`}
          >
            <div
              className={`${COLORS.icon.onBrandBg} w-12 h-12 rounded-full flex items-center justify-center`}
            >
              <Phone className="w-6 h-6" />
            </div>
            <div className="font-semibold">Teléfono</div>
            <div className={`text-sm ${COLORS.text.onBrandMuted}`}>
              Lun a Sab 9-18hs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
