import { whatsappLink, COLORS } from "../constants";
import { WhatsAppIcon } from "./whatsapp-icon";

const WHATSAPP_LINK = whatsappLink(
  "Hola! Necesito información sobre los programas de Nexoeducativo.",
);

export const FloatingWhatsapp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 ${COLORS.button.whatsapp} w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group`}
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
      <span
        className={`absolute right-full mr-3 ${COLORS.nav.tooltip} px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
      >
        ¿Necesitás ayuda?
      </span>
    </a>
  );
}
