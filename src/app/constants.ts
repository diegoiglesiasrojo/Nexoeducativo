export const WHATSAPP_NUMBER = "5492235391098";

export const whatsappLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const SOCIAL_LINKS = {
  facebook: "https://enciendenegocio.com/",
  instagram: "https://enciendenegocio.com/",
  linkedin: "https://enciendenegocio.com/",
  email: "mailto:info@nexoeducativo.com.ar",
};

export const ENCIENDE_NEGOCIO_URL = "https://enciendenegocio.com/";
