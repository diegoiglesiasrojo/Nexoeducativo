import { ArrowRight } from "lucide-react";
import { whatsappLink, COLORS } from "../constants";
import { WhatsAppIcon } from "./whatsapp-icon";

const WHATSAPP_LINK = whatsappLink(
  "Hola! Me gustaría recibir información sobre los programas de Nexoeducativo.",
);

export function Hero() {
  const scrollToCourses = () => {
    document.getElementById("cursos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className={`relative py-16 sm:py-20 lg:py-28 ${COLORS.section.heroGradient}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${COLORS.text.heading} mb-6`}
            >
              Transformá tu Carrera con{" "}
              <span className={COLORS.text.brand}>Formación Académica</span>
            </h1>
            <p
              className={`text-lg sm:text-xl ${COLORS.text.body} mb-8 max-w-2xl mx-auto lg:mx-0`}
            >
              Diplomaturas, actualizaciones académicas y formación docente de
              calidad. Potenciá tu desarrollo profesional con Nexoeducativo.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 ${COLORS.button.primary} rounded-lg font-semibold transition-all hover:scale-105 shadow-lg`}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Consultar por WhatsApp
              </a>
              <button
                onClick={scrollToCourses}
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 ${COLORS.button.secondary} rounded-lg font-semibold transition-all`}
              >
                Ver Cursos
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div
                  className={`text-3xl sm:text-4xl font-bold ${COLORS.text.brand}`}
                >
                  500+
                </div>
                <div className={`text-sm ${COLORS.text.muted} mt-1`}>
                  Estudiantes
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-3xl sm:text-4xl font-bold ${COLORS.text.brand}`}
                >
                  15+
                </div>
                <div className={`text-sm ${COLORS.text.muted} mt-1`}>
                  Cursos
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-3xl sm:text-4xl font-bold ${COLORS.text.brand}`}
                >
                  100%
                </div>
                <div className={`text-sm ${COLORS.text.muted} mt-1`}>
                  Online
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBsYXB0b3AlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzYzMjI3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Estudiante aprendiendo online"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
            {/* Floating decoration */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-indigo-600/10 dark:bg-indigo-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
