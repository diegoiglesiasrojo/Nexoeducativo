import { Clock, Monitor, BookOpen, CheckCircle, Users, Tag } from "lucide-react";
import { whatsappLink, COLORS } from "../constants";
import { WhatsAppIcon } from "../components/whatsapp-icon";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const actualizaciones = [
  {
    id: 1,
    title: "Actualización en Salud Mental en Contextos Escolares",
    tagline: "Herramientas para el abordaje de la salud mental en la escuela",
    duration: "6 meses – 220 horas reloj",
    modalidad: "100% virtual",
    inscripcion: "Permanente",
    color: "indigo",
    image: "https://images.unsplash.com/photo-1719667947229-594a8fdddade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjB3ZWxsYmVpbmclMjBzY2hvb2wlMjBjaGlsZHJlbnxlbnwxfHx8fDE3NzcwNzU0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Formación orientada a docentes y profesionales de la educación que buscan fortalecer herramientas para el abordaje de la salud mental en la escuela, desde un enfoque de derechos, comunitario e intersectorial.",
    aprendizajes: [
      "Fundamentos actuales sobre salud mental y educación",
      "Marcos normativos vigentes (Ley 26.657 y Ley 26.061)",
      "Estrategias para la detección temprana de problemáticas",
      "Protocolos de intervención desde el rol docente",
      "Articulación con equipos interdisciplinarios y redes comunitarias",
      "Herramientas para mejorar la convivencia escolar",
      "Prevención del bullying y ciberbullying",
      "Estrategias de autocuidado y bienestar docente",
    ],
    destinatarios: "Docentes de todos los niveles, equipos de orientación, directivos, tutores y profesionales vinculados al acompañamiento de trayectorias escolares.",
    whatsappMsg: "Hola! Quiero más información sobre la Actualización en Salud Mental en Contextos Escolares.",
    badge: "Puntaje Docente",
  },
  {
    id: 2,
    title: "Actualización en Neurología Aplicada a la Educación",
    tagline: "Conocimientos de neurociencia aplicados al aprendizaje y la enseñanza",
    duration: "6 meses – 220 horas reloj",
    modalidad: "100% virtual",
    inscripcion: "Permanente",
    color: "violet",
    image: "https://images.unsplash.com/photo-1770236711002-e01fbf6f9964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb3NjaWVuY2UlMjBicmFpbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NzA3NTQ0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Formación para docentes y profesionales de la educación que deseen incorporar conocimientos actualizados de neurología y neurociencia aplicados al aprendizaje. Brinda herramientas prácticas para comprender cómo aprende el cerebro.",
    aprendizajes: [
      "Bases neurológicas del aprendizaje y la memoria",
      "Atención, funciones ejecutivas y autorregulación",
      "Influencia de la emoción y el estrés en el aula",
      "Lenguaje, lectura y escritura desde la neurociencia",
      "Detección y acompañamiento de TDAH, dislexia, epilepsia",
      "Estrategias para evitar neuromitos en educación",
      "Diseño de prácticas pedagógicas basadas en evidencia",
    ],
    destinatarios: "Docentes de todos los niveles y modalidades, directivos, equipos de orientación, tutores y profesionales vinculados al acompañamiento de trayectorias escolares.",
    whatsappMsg: "Hola! Quiero más información sobre la Actualización en Neurología Aplicada a la Educación.",
    badge: "Puntaje Docente",
  },
  {
    id: 3,
    title: "Actualización en Educación Emocional y Habilidades Socioafectivas",
    tagline: "Fortalecé competencias emocionales para una educación más humana",
    duration: "6 meses – 220 horas reloj",
    modalidad: "100% virtual",
    inscripcion: "Permanente",
    color: "pink",
    image: "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRhZ29neSUyMHRlYWNoZXIlMjB0cmFpbmluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzcwNzU0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Propuesta formativa orientada a fortalecer las competencias emocionales y relacionales de los docentes, brindando herramientas teóricas y prácticas para promover una educación más humana, inclusiva y basada en el bienestar.",
    aprendizajes: [
      "Fundamentos de la educación emocional y el desarrollo socioafectivo",
      "Estrategias para el reconocimiento, expresión y regulación emocional",
      "Herramientas para trabajar la empatía, la cooperación y la resiliencia",
      "Técnicas para mejorar la convivencia escolar",
      "Enfoques pedagógicos basados en el cuidado y el respeto",
      "Diseño de propuestas didácticas con educación emocional",
      "Construcción de comunidades educativas emocionalmente inteligentes",
    ],
    destinatarios: "Docentes de todos los niveles educativos interesados en fortalecer sus competencias emocionales, relacionales y éticas para una educación integral.",
    whatsappMsg: "Hola! Quiero más información sobre la Actualización en Educación Emocional y Habilidades Socioafectivas.",
    badge: "Puntaje Docente",
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string; border: string }> = {
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    text: "text-indigo-700 dark:text-indigo-400",
    badge: "bg-indigo-600 text-white",
    border: "border-indigo-200 dark:border-indigo-700",
  },
  violet: {
    bg: "bg-violet-100 dark:bg-violet-900/30",
    text: "text-violet-700 dark:text-violet-400",
    badge: "bg-violet-600 text-white",
    border: "border-violet-200 dark:border-violet-700",
  },
  pink: {
    bg: "bg-pink-100 dark:bg-pink-900/30",
    text: "text-pink-700 dark:text-pink-400",
    badge: "bg-pink-600 text-white",
    border: "border-pink-200 dark:border-pink-700",
  },
};

export const Actualizaciones = () => {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-purple-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-300 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Tag className="w-4 h-4" />
            Formación continua y profesional
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Actualizaciones Académicas
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-3xl mx-auto mb-10">
            Cursos de actualización profesional para docentes que quieren mantenerse al día con las últimas tendencias, herramientas y metodologías educativas.
          </p>
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">220 hs</div>
              <div className="text-indigo-200 text-sm mt-1">Carga horaria</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">6 meses</div>
              <div className="text-indigo-200 text-sm mt-1">Duración</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3</div>
              <div className="text-indigo-200 text-sm mt-1">Cursos disponibles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className={`py-16 sm:py-20 ${COLORS.section.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold ${COLORS.text.heading} mb-4`}>
              Cursos Disponibles
            </h2>
            <p className={`${COLORS.text.body} max-w-2xl mx-auto`}>
              Elegí la temática que más se adapte a tus necesidades e intereses profesionales. Todos los cursos cuentan con inscripción permanente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actualizaciones.map((curso) => {
              const colors = colorMap[curso.color];
              return (
                <div
                  key={curso.id}
                  className={`flex flex-col ${COLORS.card.default} rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={curso.image}
                      alt={curso.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                        {curso.badge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Meta badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                        <Clock className="w-3 h-3" />
                        {curso.duration}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400`}>
                        <Monitor className="w-3 h-3" />
                        Virtual
                      </span>
                    </div>

                    <h3 className={`font-bold ${COLORS.text.heading} mb-2 leading-snug`}>
                      {curso.title}
                    </h3>
                    <p className={`text-sm ${COLORS.text.body} mb-5 flex-1`}>
                      {curso.tagline}
                    </p>

                    {/* Aprendizajes */}
                    <div className="mb-5">
                      <h4 className={`text-xs font-semibold uppercase tracking-wide ${colors.text} mb-3 flex items-center gap-1.5`}>
                        <BookOpen className="w-3.5 h-3.5" />
                        Contenidos clave
                      </h4>
                      <ul className="space-y-1.5">
                        {curso.aprendizajes.slice(0, 4).map((item, i) => (
                          <li key={i} className={`flex items-start gap-2 text-xs ${COLORS.text.body}`}>
                            <CheckCircle className={`w-3.5 h-3.5 ${colors.text} shrink-0 mt-0.5`} />
                            {item}
                          </li>
                        ))}
                        {curso.aprendizajes.length > 4 && (
                          <li className={`text-xs ${colors.text} font-medium`}>
                            +{curso.aprendizajes.length - 4} contenidos más
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Destinatarios */}
                    <div className={`p-3 rounded-lg ${colors.bg} mb-5`}>
                      <div className={`flex items-start gap-2 text-xs ${colors.text}`}>
                        <Users className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{curso.destinatarios}</span>
                      </div>
                    </div>

                    <a
                      href={whatsappLink(curso.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto inline-flex items-center justify-center gap-2 w-full px-5 py-3 ${COLORS.button.primary} rounded-lg font-semibold transition-all hover:scale-[1.02]`}
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-purple-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Querés actualizar tus conocimientos?
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Inscripción permanente · 6 meses · 220 horas · 100% online
          </p>
          <a
            href={whatsappLink("Hola! Quiero información sobre las Actualizaciones Académicas de Nexoeducativo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-indigo-600 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5 text-green-500" />
            Consultar ahora
          </a>
        </div>
      </section>
    </main>
  );
};
