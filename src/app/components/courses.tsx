import { GraduationCap, BookOpen, Users, Award } from "lucide-react";
import { WHATSAPP_NUMBER, COLORS } from "../constants";

const courses = [
  {
    icon: GraduationCap,
    title: "Diplomaturas",
    description:
      "Programas de formación especializada con titulación oficial. Alcanzá una especialización profesional reconocida.",
    benefits: [
      "Duración: 6 a 12 meses",
      "Certificación oficial",
      "Modalidad 100% online",
    ],
    whatsappMessage:
      "Hola! Me interesa obtener información sobre las Diplomaturas de Nexoeducativo.",
  },
  {
    icon: BookOpen,
    title: "Actualizaciones Académicas",
    description:
      "Cursos breves de actualización profesional en las últimas tendencias educativas y metodologías innovadoras.",
    benefits: [
      "Contenido actualizado",
      "Flexibilidad horaria",
      "Certificado de finalización",
    ],
    whatsappMessage:
      "Hola! Me interesa obtener información sobre las Actualizaciones Académicas de Nexoeducativo.",
  },
  {
    icon: Users,
    title: "Tramo Pedagógico",
    description:
      "Formación pedagógica para profesionales que desean ejercer la docencia sin título docente previo.",
    benefits: [
      "Habilitación docente",
      "Teoría y práctica",
      "Acompañamiento personalizado",
    ],
    whatsappMessage:
      "Hola! Me interesa obtener información sobre el Tramo Pedagógico de Nexoeducativo.",
  },
  {
    icon: Award,
    title: "Formación Docente",
    description:
      "Capacitación integral para educadores en ejercicio que buscan perfeccionar sus competencias pedagógicas.",
    benefits: [
      "Metodologías innovadoras",
      "Práctica en aula",
      "Tutoría académica",
    ],
    whatsappMessage:
      "Hola! Me interesa obtener información sobre la Formación Docente de Nexoeducativo.",
  },
];

export function Courses() {
  return (
    <section
      id="cursos"
      className={`py-16 sm:py-20 ${COLORS.section.secondary}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${COLORS.text.heading} mb-4`}
          >
            Nuestros Programas
          </h2>
          <p
            className={`text-lg sm:text-xl ${COLORS.text.body} max-w-3xl mx-auto`}
          >
            Descubrí la propuesta académica que impulsará tu crecimiento
            profesional
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(course.whatsappMessage)}`;
            return (
              <div
                key={index}
                className={`flex flex-col ${COLORS.card.default} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
              >
                <div
                  className={`${COLORS.icon.brandBgLight} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className={`text-xl font-bold ${COLORS.text.heading} mb-3`}>
                  {course.title}
                </h3>

                <p className={`${COLORS.text.muted} mb-6`}>
                  {course.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {course.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start gap-2 text-sm ${COLORS.text.muted}`}
                    >
                      <span className={`${COLORS.icon.brandColor} mt-0.5`}>
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto block w-full text-center px-6 py-3 ${COLORS.button.primary} rounded-lg font-medium transition-colors`}
                >
                  Consultar
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
