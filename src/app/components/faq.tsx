import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { whatsappLink, COLORS } from "../constants";

const faqs = [
  {
    question: "¿Cómo es la modalidad de cursada?",
    answer:
      "Todos nuestros postitulos son 100% online y en modalidad asincrónica. Podés acceder al material, las clases grabadas y las actividades en cualquier momento del día, desde cualquier dispositivo con conexión a internet. Respetamos tu tiempo y te brindamos la flexibilidad que necesitás.",
  },
  {
    question: "¿Los certificados tienen validez oficial?",
    answer:
      "Sí, nuestros postitulos  cuentan con certificación oficial y reconocimiento académico. Los certificados son emitidos con validez nacional y pueden ser utilizados para puntaje docente, ascensos y desarrollo profesional.",
  },
  {
    question: "¿Cuál es el proceso de inscripción?",
    answer:
      "El proceso es muy simple: contactanos por WhatsApp, te enviaremos toda la información del postitulo que te interesa, y te guiaremos paso a paso en la inscripción. Solo necesitas completar un formulario basico.",
  },
  {
    question: "¿Qué tipo de acompañamiento ofrecen durante el curso?",
    answer:
      "Contás con un equipo de tutores especializados disponibles para resolver tus consultas académicas durante todo el curso. Además, ofrecemos soporte técnico para cualquier dificultad con la plataforma. Nuestro objetivo es que te sientas acompañado en todo momento.",
  },
  {
    question: "¿Puedo pagar en cuotas?",
    answer:
      "Sí, ofrecemos diferentes planes de pago con facilidades. Podés abonar en cuotas mensuales sin interés o acceder a descuentos por pago completo. Consultanos por WhatsApp para conocer todas las opciones disponibles según tu programa de interés.",
  },
];

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b ${COLORS.border.faqItem} last:border-b-0`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full py-5 px-6 flex items-center justify-between text-left ${COLORS.nav.faqHover} transition-colors`}
      >
        <span className={`font-semibold ${COLORS.text.heading} pr-8`}>
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 ${COLORS.text.icon} transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className={`px-6 pb-5 ${COLORS.text.body}`}>{answer}</div>
      )}
    </div>
  );
}

export const Faq = () => {
  return (
    <section id="faq" className={`py-16 sm:py-20 ${COLORS.section.secondary}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${COLORS.text.heading} mb-4`}
          >
            Preguntas Frecuentes
          </h2>
          <p className={`text-lg sm:text-xl ${COLORS.text.body}`}>
            Resolvé tus dudas antes de comenzar
          </p>
        </div>

        <div
          className={`${COLORS.card.faqContainer} rounded-2xl shadow-lg overflow-hidden`}
        >
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <p className={`text-center mt-8 ${COLORS.text.muted}`}>
          ¿Tenés otra consulta?{" "}
          <a
            href={whatsappLink(
              "Hola! Tengo una consulta sobre los programas de Nexoeducativo.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`${COLORS.text.brand} hover:underline font-medium`}
          >
            Contactanos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
