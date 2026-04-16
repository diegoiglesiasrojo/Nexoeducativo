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

// ─── Color tokens ────────────────────────────────────────────────────────────

export const COLORS = {
  /** Section / page-level backgrounds */
  section: {
    primary: "bg-white dark:bg-gray-900",
    secondary: "bg-gray-50 dark:bg-gray-800",
    gradient:
      "bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900",
    heroGradient:
      "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800",
    footer: "bg-gray-900 dark:bg-black",
    header: "bg-white/95 dark:bg-gray-900/95",
  },
  /** Text colors */
  text: {
    heading: "text-gray-900 dark:text-white",
    body: "text-gray-600 dark:text-gray-300",
    bodyAlt: "text-gray-700 dark:text-gray-300",
    muted: "text-gray-600 dark:text-gray-400",
    brand: "text-blue-600 dark:text-blue-400",
    white: "text-white",
    onBrandMuted: "text-blue-100",
    footer: "text-gray-300",
    footerMuted: "text-gray-400",
    carouselCaption: "text-gray-200",
    icon: "text-gray-600 dark:text-gray-400",
  },
  /** Button color + text classes */
  button: {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary:
      "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700",
    ctaWhite: "bg-white hover:bg-gray-100 text-blue-600",
    whatsapp: "bg-green-500 hover:bg-green-600 text-white",
  },
  /** Card / container backgrounds + borders */
  card: {
    default:
      "bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700",
    benefit:
      "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border border-blue-100 dark:border-gray-600",
    testimonial: "bg-white dark:bg-gray-800",
    faqContainer: "bg-white dark:bg-gray-900",
  },
  /** Icon container / icon color classes */
  icon: {
    brandBg: "bg-blue-600 dark:bg-blue-500 text-white",
    brandBgLight:
      "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    brandColor: "text-blue-600 dark:text-blue-400",
    onBrandBg: "bg-white/10 text-white",
  },
  /** Border colors (pair with `border` or `border-b` utility) */
  border: {
    header: "border-gray-200 dark:border-gray-800",
    faqItem: "border-gray-200 dark:border-gray-700",
    footer: "border-gray-800",
    ctaLine: "border-blue-400/30",
  },
  /** Navigation interactive states */
  nav: {
    link: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400",
    hoverBg: "hover:bg-gray-100 dark:hover:bg-gray-800",
    faqHover: "hover:bg-gray-100 dark:hover:bg-gray-700",
    mobileLink:
      "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
    backdrop: "bg-black/50",
    tooltip: "bg-gray-900 text-white",
  },
  /** Footer-specific colors */
  footer: {
    text: "text-gray-300",
    mutedText: "text-gray-400",
    heading: "text-white",
    link: "text-gray-400 hover:text-white",
    socialIcon: "bg-gray-800 hover:bg-blue-600",
  },
} as const;
