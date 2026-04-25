import {
  Clock,
  Monitor,
  BookOpen,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { whatsappLink, COLORS } from "../constants";
import { WhatsAppIcon } from "../components/whatsapp-icon";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const diplomaturas = [
  {
    id: 1,
    title: "Diplomatura en Lectura, Escritura y Alfabetización Académica",
    tagline:
      "Fortalecé las competencias docentes en enseñanza de la lectura y escritura",
    duration: "630 horas reloj",
    modalidad: "100% virtual y a distancia",
    inscripcion: "Permanente",
    image:
      "https://images.unsplash.com/photo-1761208662734-fb46f1398551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcmVhZGluZyUyMHdyaXRpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzc3MDc1NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Propuesta de formación integral orientada a fortalecer las competencias docentes en la enseñanza de la lectura y la escritura en todos los niveles educativos, con especial énfasis en la alfabetización académica y los desafíos de la cultura digital.",
    aprendizajes: [
      "Mejorar la comprensión lectora",
      "Potenciar la producción escrita",
      "Desarrollar pensamiento crítico",
      "Fortalecer la alfabetización académica en las aulas",
      "Reconocer modelos de alfabetización y aplicarlos",
      "Diseñar propuestas didácticas para enseñar lectura y escritura",
      "Incorporar análisis crítico de la cultura digital",
      "Desarrollar estrategias de evaluación auténtica",
    ],
    destinatarios: [
      "Docentes de nivel Primario",
      "Docentes de nivel Secundario",
      "Docentes de nivel Superior",
    ],
    requisito: "Título docente",
    modalidadDetalle: [
      "Cursada completamente virtual",
      "Plataforma Moodle",
      "Acceso asincrónico",
      "Materiales teóricos y actividades prácticas",
      "Foros de intercambio y acompañamiento tutorial",
    ],
    whatsappMsg:
      "Hola! Quiero más información sobre la Diplomatura en Lectura, Escritura y Alfabetización Académica.",
    badge: "Puntaje Docente",
  },
  {
    id: 2,
    title: "Diplomatura en Innovación Educativa con Inteligencia Artificial",
    tagline: "Integrá IA y pedagogía para transformar tus prácticas educativas",
    duration: "630 horas reloj",
    modalidad: "100% virtual y asincrónica",
    inscripcion: "Permanente",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzcwNzU0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Propuesta formativa innovadora que integra pedagogía e inteligencia artificial para transformar las prácticas educativas. Brinda herramientas para comprender el impacto de la IA, desarrollar proyectos pedagógicos innovadores y aplicar tecnologías emergentes de manera ética, crítica y contextualizada.",
    aprendizajes: [
      "Fundamentos de la innovación educativa",
      "Uso pedagógico de la inteligencia artificial",
      "Evaluación formativa y personalización del aprendizaje",
      "Diseño de proyectos interdisciplinarios",
      "Aplicaciones de IA en distintas áreas curriculares",
      "Análisis ético del impacto de la IA en la educación",
      "Rediseño institucional con tecnologías emergentes",
      "Creación de propuestas educativas con IA",
    ],
    destinatarios: [
      "Docentes de todos los niveles",
      "Profesionales de la educación",
      "Interesados en innovar con IA",
    ],
    requisito:
      "Título secundario completo. No se requiere experiencia previa en IA.",
    modalidadDetalle: [
      "Cursada totalmente asincrónica",
      "Acceso a plataforma virtual las 24 hs",
      "Videos explicativos y materiales interactivos",
      "Actividades prácticas por módulo",
      "Foros de intercambio y acompañamiento",
    ],
    whatsappMsg:
      "Hola! Quiero más información sobre la Diplomatura en Innovación Educativa con Inteligencia Artificial.",
    badge: "Puntaje Docente",
  },
];

export const Diplomaturas = () => {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4" />
            Programas de Formación Especializada
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Diplomaturas
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Programas de formación integral con titulación oficial. Potenciá tu
            carrera docente con una especialización reconocida y de alto
            impacto.
          </p>
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">630 hs</div>
              <div className="text-blue-200 text-sm mt-1">Carga horaria</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-blue-200 text-sm mt-1">Online</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2</div>
              <div className="text-blue-200 text-sm mt-1">
                Diplomaturas disponibles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className={`py-16 sm:py-20 ${COLORS.section.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:gap-16">
            {diplomaturas.map((curso, index) => (
              <div
                key={curso.id}
                className={`${COLORS.card.default} rounded-2xl shadow-lg overflow-hidden`}
              >
                <div
                  className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  {/* Image */}
                  <div
                    className={`relative h-64 lg:h-auto min-h-[300px] ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <ImageWithFallback
                      src={curso.image}
                      alt={curso.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 sm:p-8 lg:p-10 flex flex-col ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  >
                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 mb-5">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${COLORS.icon.brandBgLight}`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        {curso.duration}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400`}
                      >
                        <Monitor className="w-3.5 h-3.5" />
                        {curso.modalidad}
                      </span>
                    </div>

                    <h2
                      className={`text-xl sm:text-2xl font-bold ${COLORS.text.heading} mb-3`}
                    >
                      {curso.title}
                    </h2>
                    <p className={`${COLORS.text.body} mb-6 leading-relaxed`}>
                      {curso.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      {/* Aprendizajes */}
                      <div>
                        <h3
                          className={`flex items-center gap-2 font-semibold ${COLORS.text.heading} mb-3`}
                        >
                          <Target
                            className={`w-4 h-4 ${COLORS.icon.brandColor}`}
                          />
                          ¿Qué vas a aprender?
                        </h3>
                        <ul className="space-y-2">
                          {curso.aprendizajes.slice(0, 5).map((item, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 text-sm ${COLORS.text.body}`}
                            >
                              <CheckCircle
                                className={`w-4 h-4 ${COLORS.icon.brandColor} shrink-0 mt-0.5`}
                              />
                              {item}
                            </li>
                          ))}
                          {curso.aprendizajes.length > 5 && (
                            <li
                              className={`text-sm ${COLORS.text.brand} font-medium`}
                            >
                              +{curso.aprendizajes.length - 5} contenidos más
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Destinatarios + Modalidad */}
                      <div className="space-y-5">
                        <div>
                          <h3
                            className={`flex items-center gap-2 font-semibold ${COLORS.text.heading} mb-3`}
                          >
                            <Users
                              className={`w-4 h-4 ${COLORS.icon.brandColor}`}
                            />
                            Destinatarios
                          </h3>
                          <ul className="space-y-1.5">
                            {curso.destinatarios.map((d, i) => (
                              <li
                                key={i}
                                className={`text-sm ${COLORS.text.body}`}
                              >
                                · {d}
                              </li>
                            ))}
                          </ul>
                          <p
                            className={`text-xs ${COLORS.text.muted} mt-2 italic`}
                          >
                            Requisito: {curso.requisito}
                          </p>
                        </div>
                        <div>
                          <h3
                            className={`flex items-center gap-2 font-semibold ${COLORS.text.heading} mb-2`}
                          >
                            <Monitor
                              className={`w-4 h-4 ${COLORS.icon.brandColor}`}
                            />
                            Modalidad
                          </h3>
                          <ul className="space-y-1">
                            {curso.modalidadDetalle.slice(0, 3).map((m, i) => (
                              <li
                                key={i}
                                className={`text-sm ${COLORS.text.body}`}
                              >
                                · {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col sm:flex-row gap-3">
                      <a
                        href={whatsappLink(
                          `Hola! Quiero más información y el costo de la ${curso.title}`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3 ${COLORS.button.secondary} rounded-lg font-semibold transition-all`}
                      >
                        Ver más info
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={`py-16 ${COLORS.section.gradient}`}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar tu Diplomatura?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Inscripción permanente · Modalidad 100% virtual · Consultá sin
            compromiso
          </p>
          <a
            href={whatsappLink(
              "Hola! Quiero información sobre las Diplomaturas de Nexoeducativo.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5 text-green-500" />
            Consultar ahora
          </a>
        </div>
      </section>
    </main>
  );
};
