import { useState } from "react";
import {
  Clock,
  Monitor,
  GraduationCap,
  CheckCircle,
  Users,
  ChevronDown,
  BookOpen,
  Award,
} from "lucide-react";
import { whatsappLink, COLORS } from "../constants";
import { WhatsAppIcon } from "../components/whatsapp-icon";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const modulos = [
  {
    numero: "1",
    titulo: "Introducción a la Educación en Línea",
    descripcion:
      "Uso del campus, identidad digital, netiquette, foros y primeras producciones.",
  },
  {
    numero: "2",
    titulo: "Discurso Pedagógico Moderno y Posiciones Críticas",
    descripcion:
      "De la Escuela Nueva a las pedagogías críticas, decoloniales y de los Derechos Humanos.",
  },
  {
    numero: "3",
    titulo:
      "Pensamiento Político y Legislación del Sistema Educativo Argentino",
    descripcion:
      "Historia y marco legal del sistema educativo nacional y provincial.",
  },
  {
    numero: "4",
    titulo: "Diseño de Enseñanza con Tecnología",
    descripcion:
      "Trabajo colaborativo, TIC en el aula, ciudadanía digital y producción de contenidos educativos.",
  },
  {
    numero: "5",
    titulo: "Didáctica de la Educación Media y Superior",
    descripcion:
      "Enseñanza, currículum, evaluación y reflexión de las prácticas docentes.",
  },
  {
    numero: "6",
    titulo: "Dimensiones del Sujeto de la Educación",
    descripcion:
      "Psicología, neurociencias, educabilidad, adolescencia, adultez y perspectiva de Derechos.",
  },
  {
    numero: "7",
    titulo: "Sociologías y Filosofías de la Educación",
    descripcion:
      "Educación y sociedad, enfoques críticos, pedagogía filosófica.",
  },
  {
    numero: "8",
    titulo: "Escuela y Diversidad y Enseñanza en Contextos Heterogéneos",
    descripcion:
      "Inclusión y exclusión, diversidad, aula heterogénea, espacios de práctica, dinámica de aprendizajes.",
  },
  {
    numero: "9",
    titulo: "Planeamiento y Evaluación de los Aprendizajes",
    descripcion:
      "Programación, metodologías, evaluación formativa, justicia curricular y TIC.",
  },
  {
    numero: "10",
    titulo: "Observación y Práctica Docente en Nivel Medio y Superior",
    descripcion:
      "Práctica reflexiva, microclases, evaluación y planificación de proyectos docentes.",
  },
];

const tramos = [
  {
    id: 1,
    title: "Tramo de Formación Pedagógica",
    subtitle:
      "Para profesionales universitarios, Técnicos Superiores y de Nivel Medio",
    duration: "15 meses (58 semanas)",
    modalidad: "100% a distancia",
    certificacion:
      "Título oficial: Tramo de Formación Pedagógica para Profesionales Universitarios, Técnicos Superiores y de Nivel Medio",
    image:
      "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRhZ29neSUyMHRlYWNoZXIlMjB0cmFpbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzcwNzU0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    descripcion:
      "Este programa propone un recorrido de formación pedagógica que asume la complejidad del trabajo docente frente a las transformaciones sociales contemporáneas. Ofrece espacios de reflexión, problematización y sistematización de las prácticas educativas, fomentando la construcción de una identidad docente basada en la autonomía, el compromiso con la igualdad, la ciudadanía digital y la confianza en las posibilidades de aprendizaje de cada estudiante.",
    requisitos: [
      "Título de Técnico Superior",
      "Título Profesional de Nivel Superior (Universitario o No Universitario)",
    ],
    modalidadDetalle: [
      "100% a distancia a través del Campus Virtual de la Facultad Regional Avellaneda",
      "Propuesta asincrónica: cada estudiante organiza sus tiempos de estudio",
      'Primera materia: "Introducción a la Educación en Línea"',
      "Cada módulo con docente especializado y materiales multimediales",
    ],
    evaluacion:
      "Cada módulo se acredita mediante actividades integradoras o exámenes en línea, con acompañamiento docente continuo.",
    modulos,
    whatsappMsg:
      "Hola! Quiero más información sobre el Tramo de Formación Pedagógica de Nexoeducativo.",
  },
];

const CurriculumAccordion = ({
  modulos,
}: {
  modulos: (typeof tramos)[0]["modulos"];
}) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {modulos.map((mod, i) => (
        <div
          key={i}
          className={`rounded-xl border ${open === i ? "border-teal-300 dark:border-teal-700" : "border-gray-200 dark:border-gray-700"} overflow-hidden transition-all`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-colors ${
              open === i
                ? "bg-teal-50 dark:bg-teal-900/30"
                : "bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white text-sm font-bold flex items-center justify-center">
              {mod.numero}
            </span>
            <span
              className={`flex-1 font-medium text-sm sm:text-base ${COLORS.text.heading}`}
            >
              {mod.titulo}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-teal-600 dark:text-teal-400 transition-transform shrink-0 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-4 pt-2 bg-teal-50/50 dark:bg-teal-900/10 border-t border-teal-100 dark:border-teal-800">
              <p className={`text-sm ${COLORS.text.body} leading-relaxed`}>
                {mod.descripcion}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const Tramos = () => {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-teal-600 to-emerald-700 dark:from-teal-900 dark:to-emerald-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-300 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-200 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <GraduationCap className="w-4 h-4" />
            Habilitación docente oficial
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tramo Pedagógico
          </h1>
          <p className="text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto mb-10">
            Formación pedagógica para profesionales universitarios y técnicos
            superiores que desean ejercer la docencia y obtener su habilitación
            oficial.
          </p>
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15 meses</div>
              <div className="text-teal-200 text-sm mt-1">Duración</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">9</div>
              <div className="text-teal-200 text-sm mt-1">Módulos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-teal-200 text-sm mt-1">A distancia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className={`py-16 sm:py-20 ${COLORS.section.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {tramos.map((tramo) => (
            <div key={tramo.id} className="space-y-10">
              {/* Main card */}
              <div
                className={`${COLORS.card.default} rounded-2xl shadow-lg overflow-hidden`}
              >
                <div className="grid lg:grid-cols-5">
                  {/* Image */}
                  <div className="lg:col-span-2 relative h-60 lg:h-auto">
                    <ImageWithFallback
                      src={tramo.image}
                      alt={tramo.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r" />
                    {/* Certification badge */}
                    <div className="absolute bottom-4 left-4 right-4 lg:right-auto">
                      <div className="flex items-start gap-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-3">
                        <Award className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-gray-900 dark:text-white">
                            Título oficial
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">
                            Tramo de Formación Pedagógica
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400">
                        <Clock className="w-3.5 h-3.5" />
                        {tramo.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        <Monitor className="w-3.5 h-3.5" />
                        {tramo.modalidad}
                      </span>
                    </div>

                    <h2
                      className={`text-xl sm:text-2xl font-bold ${COLORS.text.heading} mb-1`}
                    >
                      {tramo.title}
                    </h2>
                    <p className="text-teal-600 dark:text-teal-400 font-medium text-sm mb-4">
                      {tramo.subtitle}
                    </p>
                    <p className={`${COLORS.text.body} mb-6 leading-relaxed`}>
                      {tramo.descripcion}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3
                          className={`flex items-center gap-2 font-semibold ${COLORS.text.heading} mb-3`}
                        >
                          <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                          Requisitos de admisión
                        </h3>
                        <ul className="space-y-2">
                          {tramo.requisitos.map((r, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 text-sm ${COLORS.text.body}`}
                            >
                              <span className="text-teal-600 dark:text-teal-400 mt-0.5">
                                ✓
                              </span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3
                          className={`flex items-center gap-2 font-semibold ${COLORS.text.heading} mb-3`}
                        >
                          <Users className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                          Modalidad de cursada
                        </h3>
                        <ul className="space-y-2">
                          {tramo.modalidadDetalle.slice(0, 3).map((m, i) => (
                            <li
                              key={i}
                              className={`text-sm ${COLORS.text.body} leading-snug`}
                            >
                              · {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href={whatsappLink(tramo.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all hover:scale-[1.02] shadow-md"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${COLORS.text.heading}`}>
                      Estructura Curricular
                    </h3>
                    <p className={`text-sm ${COLORS.text.body}`}>
                      9 módulos que integran teoría, práctica y reflexión
                    </p>
                  </div>
                </div>
                <CurriculumAccordion modulos={tramo.modulos} />

                <div className={`mt-6 p-4 rounded-xl ${COLORS.card.benefit}`}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p
                        className={`font-semibold ${COLORS.text.heading} text-sm`}
                      >
                        Metodología de Evaluación
                      </p>
                      <p className={`text-sm ${COLORS.text.body} mt-1`}>
                        {tramo.evaluacion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-emerald-700 dark:from-teal-900 dark:to-emerald-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Transformá tu formación profesional en docencia
          </h2>
          <p className="text-teal-100 mb-8 text-lg">
            15 meses · 100% a distancia · Título oficial · Inscripción
            permanente
          </p>
          <a
            href={whatsappLink(
              "Hola! Quiero información sobre el Tramo de Formación Pedagógica de Nexoeducativo.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-teal-700 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5 text-green-500" />
            Consultar ahora
          </a>
        </div>
      </section>
    </main>
  );
};
