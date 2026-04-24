import {
  Clock,
  Heart,
  TrendingUp,
  CheckCircle,
  Headphones,
  Calendar,
} from "lucide-react";
import { COLORS } from "../constants";

const benefits = [
  {
    icon: Clock,
    title: "Aprendizaje Flexible",
    description:
      "Estudiá a tu ritmo, en el horario que mejor se adapte a tu vida personal y profesional.",
  },
  {
    icon: Heart,
    title: "Acompañamiento Académico",
    description:
      "Equipo de tutores disponibles para guiarte en cada etapa de tu formación.",
  },
  {
    icon: TrendingUp,
    title: "Contenido Práctico y Actualizado",
    description:
      "Material diseñado por expertos, actualizado según las últimas tendencias educativas.",
  },
  {
    icon: CheckCircle,
    title: "Crecimiento Profesional",
    description:
      "Certificaciones reconocidas que potencian tu perfil laboral y abren nuevas oportunidades.",
  },
  {
    icon: Headphones,
    title: "Soporte Continuo",
    description:
      "Asistencia técnica y académica permanente para resolver tus consultas de forma rápida.",
  },
  {
    icon: Calendar,
    title: "Inscripción Sencilla",
    description:
      "Proceso de registro ágil y simple. Comenzá tu formación en pocos pasos.",
  },
];

export const Benefits = () => {
  return (
    <section
      id="beneficios"
      className={`py-16 sm:py-20 ${COLORS.section.primary}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${COLORS.text.heading} mb-4`}
          >
            ¿Por qué Elegir Nexoeducativo?
          </h2>
          <p
            className={`text-lg sm:text-xl ${COLORS.text.body} max-w-3xl mx-auto`}
          >
            Nos comprometemos con tu éxito académico y profesional
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`${COLORS.card.benefit} rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all hover:-translate-y-1`}
              >
                <div
                  className={`${COLORS.icon.brandBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className={`text-xl font-bold ${COLORS.text.heading} mb-3`}>
                  {benefit.title}
                </h3>

                <p className={COLORS.text.body}>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
