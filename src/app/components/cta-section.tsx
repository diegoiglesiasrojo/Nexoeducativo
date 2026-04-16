import { MessageCircle, Mail, Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/XXXXXXXXXXX";

export function CtaSection() {
  return (
    <section
      id="contacto"
      className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Listo para Transformar tu Carrera?
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Comenzá hoy tu camino hacia el crecimiento profesional. Nuestro equipo
          está listo para asesorarte sin compromiso.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white hover:bg-gray-100 text-blue-600 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl mb-12"
        >
          <MessageCircle className="w-6 h-6" />
          Consultar por WhatsApp
        </a>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-blue-400/30">
          <div className="flex flex-col items-center gap-2 text-white">
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="font-semibold">WhatsApp</div>
            <div className="text-sm text-blue-100">Respuesta inmediata</div>
          </div>

          <div className="flex flex-col items-center gap-2 text-white">
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div className="font-semibold">Email</div>
            <div className="text-sm text-blue-100">info@nexoeducativo.com.ar</div>
          </div>

          <div className="flex flex-col items-center gap-2 text-white">
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div className="font-semibold">Teléfono</div>
            <div className="text-sm text-blue-100">Lun a Vie 9-18hs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
