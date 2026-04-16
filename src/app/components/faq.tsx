import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo es la modalidad de cursada?",
    answer:
      "Todos nuestros cursos son 100% online y en modalidad asincrónica. Podés acceder al material, las clases grabadas y las actividades en cualquier momento del día, desde cualquier dispositivo con conexión a internet. Respetamos tu tiempo y te brindamos la flexibilidad que necesitás.",
  },
  {
    question: "¿Los certificados tienen validez oficial?",
    answer:
      "Sí, nuestras diplomaturas y programas de formación cuentan con certificación oficial y reconocimiento académico. Los certificados son emitidos con validez nacional y pueden ser utilizados para puntaje docente, ascensos y desarrollo profesional.",
  },
  {
    question: "¿Cuál es el proceso de inscripción?",
    answer:
      "El proceso es muy simple: contactanos por WhatsApp, te enviaremos toda la información del curso que te interesa, y te guiaremos paso a paso en el registro. Solo necesitás completar un formulario básico y realizar el pago de la matrícula para comenzar.",
  },
  {
    question: "¿Qué tipo de acompañamiento ofrecen durante el curso?",
    answer:
      "Contás con un equipo de tutores especializados disponibles para resolver tus consultas académicas durante todo el curso. Además, ofrecemos soporte técnico para cualquier dificultad con la plataforma. Nuestro objetivo es que te sientas acompañado en todo momento.",
  },
  {
    question: "¿Cuánto dura cada programa?",
    answer:
      "La duración varía según el programa: las diplomaturas tienen una duración de 6 a 12 meses, las actualizaciones académicas de 2 a 4 meses, y el tramo pedagógico de 8 a 10 meses. Cada programa tiene fechas de inicio flexibles durante el año.",
  },
  {
    question: "¿Puedo pagar en cuotas?",
    answer:
      "Sí, ofrecemos diferentes planes de pago con facilidades. Podés abonar en cuotas mensuales sin interés o acceder a descuentos por pago completo. Consultanos por WhatsApp para conocer todas las opciones disponibles según tu programa de interés.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="font-semibold text-gray-900 dark:text-white pr-8">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-gray-600 dark:text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Resolvé tus dudas antes de comenzar
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
          ¿Tenés otra consulta?{" "}
          <a
            href="https://wa.me/XXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Contactanos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
