import {
  Clock,
  Monitor,
  Award,
  CheckCircle,
  Users,
  BookOpen,
  Shield,
  Star,
} from "lucide-react";
import { whatsappLink, COLORS } from "../constants";
import { WhatsAppIcon } from "../components/whatsapp-icon";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const especializaciones = [
  {
    id: 1,
    title: "Especialización en Educación en Contextos de Encierro",
    tagline: "Formación pedagógica especializada para intervenir en instituciones de privación de libertad",
    duration: "440 horas reloj",
    duracionDetalle: "400 h de cursado + 40 h de Práctica Final Integradora",
    modalidad: "100% a distancia",
    inscripcion: "Permanente",
    certificacion: "Universidad Tecnológica Nacional",
    certificacionDetalle: "En articulación con el Ministerio de Capital Humano de la Nación",
    image: "https://images.unsplash.com/photo-1629103619903-d87250e008cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsaXplZCUyMGVkdWNhdGlvbiUyMHVuaXZlcnNpdHklMjBjZXJ0aWZpY2F0aW9ufGVufDF8fHx8MTc3NzA3NTQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    descripcion:
      "La educación en contextos de encierro constituye un campo educativo complejo y fundamental, reconocido como modalidad del sistema educativo argentino. Esta especialización forma profesionales capaces de intervenir pedagógicamente en instituciones de privación de libertad (cárceles, institutos de menores, hospitales psiquiátricos y otros ámbitos de internación), desde una perspectiva de derechos y transformación social.",
    aprendizajes: [
      "Marco legal y normativo de la educación en contextos de encierro",
      "Perspectivas pedagógicas y didácticas para el trabajo en privación de libertad",
      "Derechos humanos, ciudadanía y educación inclusiva",
      "Estrategias para el trabajo con personas privadas de libertad",
      "Diseño e implementación de propuestas educativas contextualizadas",
      "Práctica Final Integradora con acompañamiento especializado",
    ],
    destinatarios: [
      "Docentes y profesores de todos los niveles educativos",
      "Profesionales del sistema penitenciario",
      "Trabajadores sociales y psicólogos vinculados al sistema judicial",
      "Profesionales de instituciones de menores",
    ],
    destacados: [
      { label: "Certificación UTN", icon: Award },
      { label: "Práctica integradora", icon: BookOpen },
      { label: "Modalidad a distancia", icon: Monitor },
      { label: "Ministerio de Capital Humano", icon: Shield },
    ],
    whatsappMsg: "Hola! Quiero más información sobre la Especialización en Educación en Contextos de Encierro.",
    badge: "Puntaje Docente",
  },
];

export const Especializaciones = () => {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-orange-500 to-amber-600 dark:from-orange-900 dark:to-amber-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 right-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl" />
          <div className="absolute bottom-5 left-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4" />
            Formación avanzada con certificación universitaria
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Especialización Docente
          </h1>
          <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto mb-10">
            Programas de especialización docente de alto nivel, con certificación de la Universidad Tecnológica Nacional y articulación con organismos nacionales.
          </p>
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">440 hs</div>
              <div className="text-orange-200 text-sm mt-1">Carga horaria</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">UTN</div>
              <div className="text-orange-200 text-sm mt-1">Certificación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-orange-200 text-sm mt-1">A distancia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className={`py-16 sm:py-20 ${COLORS.section.secondary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {especializaciones.map((esp) => (
              <div key={esp.id}>
                {/* Main card */}
                <div className={`${COLORS.card.default} rounded-2xl shadow-xl overflow-hidden`}>
                  {/* Certification banner */}
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-white">
                      <Award className="w-5 h-5 shrink-0" />
                      <span className="font-semibold text-sm">Certificación: {esp.certificacion}</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-100">
                      <Shield className="w-4 h-4 shrink-0" />
                      <span className="text-xs">{esp.certificacionDetalle}</span>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto min-h-[320px]">
                      <ImageWithFallback
                        src={esp.image}
                        alt={esp.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      {/* Highlight badges on image */}
                      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                        {esp.destacados.map((d, i) => {
                          const Icon = d.icon;
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2"
                            >
                              <Icon className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                              <span className="text-xs font-medium text-gray-800 dark:text-white">{d.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
                      {/* Meta */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400">
                          <Clock className="w-3.5 h-3.5" />
                          {esp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                          <Monitor className="w-3.5 h-3.5" />
                          {esp.modalidad}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                          {esp.badge}
                        </span>
                      </div>

                      <h2 className={`text-xl sm:text-2xl font-bold ${COLORS.text.heading} mb-2`}>
                        {esp.title}
                      </h2>
                      <p className="text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
                        {esp.tagline}
                      </p>
                      <p className={`${COLORS.text.body} mb-6 leading-relaxed text-sm`}>
                        {esp.descripcion}
                      </p>
                      <p className={`text-xs ${COLORS.text.muted} italic mb-6 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800`}>
                        📋 {esp.duracionDetalle}
                      </p>

                      <a
                        href={whatsappLink(esp.whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all hover:scale-[1.02] shadow-md mt-auto"
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                        Consultar por WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Detail sections */}
                  <div className={`border-t ${COLORS.border.faqItem} grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x ${COLORS.border.faqItem}`}>
                    {/* Aprendizajes */}
                    <div className="p-6 sm:p-8">
                      <h3 className={`flex items-center gap-2 font-semibold ${COLORS.text.heading} mb-4`}>
                        <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center">
                          <BookOpen className="w-4 h-4 text-white" />
                        </div>
                        ¿Qué vas a aprender?
                      </h3>
                      <ul className="space-y-2.5">
                        {esp.aprendizajes.map((item, i) => (
                          <li key={i} className={`flex items-start gap-2 text-sm ${COLORS.text.body}`}>
                            <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Destinatarios */}
                    <div className="p-6 sm:p-8">
                      <h3 className={`flex items-center gap-2 font-semibold ${COLORS.text.heading} mb-4`}>
                        <div className="w-7 h-7 rounded-lg bg-orange-500 flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        ¿A quién está dirigido?
                      </h3>
                      <ul className="space-y-3">
                        {esp.destinatarios.map((d, i) => (
                          <li key={i} className={`flex items-start gap-3 text-sm ${COLORS.text.body}`}>
                            <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0 mt-1.5" />
                            {d}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
                        <div className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                          <div>
                            <p className={`text-xs font-semibold ${COLORS.text.heading}`}>Certificación oficial</p>
                            <p className={`text-xs ${COLORS.text.body} mt-1`}>
                              Otorgada por la Universidad Tecnológica Nacional en articulación con el Ministerio de Capital Humano de la Nación.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-amber-600 dark:from-orange-900 dark:to-amber-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Especialización con certificación UTN
          </h2>
          <p className="text-orange-100 mb-8 text-lg">
            440 horas · 100% a distancia · Ministerio de Capital Humano · Inscripción permanente
          </p>
          <a
            href={whatsappLink("Hola! Quiero información sobre las Especializaciones Docentes de Nexoeducativo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-orange-600 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5 text-green-500" />
            Consultar ahora
          </a>
        </div>
      </section>
    </main>
  );
};
