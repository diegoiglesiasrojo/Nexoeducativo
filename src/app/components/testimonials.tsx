import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Docente de Nivel Inicial",
    image: "https://images.unsplash.com/photo-1771873437291-674dc79b4653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd29tYW4lMjBzbWlsaW5nJTIwbGFwdG9wfGVufDF8fHx8MTc3NjMyMjczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "La diplomatura en Nexoeducativo transformó mi práctica docente. El contenido es súper actualizado y los tutores realmente te acompañan en el proceso.",
  },
  {
    name: "Carlos Fernández",
    role: "Profesional en Actualización",
    image: "https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzc2MzIyNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "Pude compatibilizar mi trabajo con la cursada gracias a la flexibilidad horaria. La calidad académica es excelente y el certificado me abrió nuevas oportunidades.",
  },
  {
    name: "Laura Martínez",
    role: "Egresada del Tramo Pedagógico",
    image: "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBsYXB0b3AlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzYzMjI3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "Recomiendo Nexoeducativo al 100%. El equipo es muy profesional, la plataforma es fácil de usar y los contenidos son realmente aplicables en el aula.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo que Dicen Nuestros Estudiantes
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Miles de profesionales ya transformaron su carrera con nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />

              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
