import { motion } from "motion/react";
import { Section } from "./ui-components";
import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-24 bg-brand-dark overflow-hidden"
    >
      {/* Background Image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/industrial-pipes/1920/1080?blur=4"
          alt="Industrial background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/90 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl text-white md:text-6xl font-bold font-heading leading-tight mb-6">
              ¿Listo para optimizar tu sistema de vapor?
            </h2>
            <div className="h-1 bg-brand-secondary w-16 mb-8"></div>

            <ul className="space-y-4 mb-12 text-lg">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-secondary w-6 h-6 flex-shrink-0" />
                <span>
                  Cotización técnica y económica{" "}
                  <strong className="text-brand-secondary">GRATIS</strong>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-secondary w-6 h-6 flex-shrink-0" />
                <span>Asesoría especializada por ingenieros colegiados</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-secondary w-6 h-6 flex-shrink-0" />
                <span>
                  Respuesta garantizada en{" "}
                  <strong className="text-brand-secondary">
                    menos de 24 horas
                  </strong>
                </span>
              </li>
            </ul>

            <div className="space-y-6 bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-xl">
              <a
                href="tel:+511234567"
                className="flex items-center gap-4 hover:text-brand-secondary transition-colors"
              >
                <div className="bg-brand-secondary p-3 rounded-full text-white shadow">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Llámanos directo</div>
                  <div className="text-2xl font-bold font-heading">
                    +51 123 4567
                  </div>
                </div>
              </a>
              <div className="w-full h-px bg-white/10"></div>
              <a
                href="mailto:info@manserviceingenieros.com"
                className="flex items-center gap-4 hover:text-brand-secondary transition-colors"
              >
                <div className="bg-brand-primary p-3 rounded-full text-white shadow">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-white/60">Escríbenos</div>
                  <div className="text-lg font-semibold font-heading">
                    info@manserviceingenieros.com
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative border-t-8 border-brand-primary"
          >
            <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-brand-primary text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
              <Clock className="w-4 h-4" />
              RESPUESTA EN 24H
            </div>

            <h3 className="text-2xl font-bold font-heading text-brand-dark mb-6 mt-2">
              Solicitud de Información
            </h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-brand-light-alt border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-brand-light-alt border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder="tu@empresa.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-brand-light-alt border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    placeholder="+51 999 999 999"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1">
                  Empresa
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-brand-light-alt border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1">
                  ¿Qué necesitas? *
                </label>
                <select
                  className="w-full px-4 py-3 bg-brand-light-alt border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors text-brand-dark"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="generadores">
                    Equipos Generadores de vapor
                  </option>
                  <option value="asesoria">Asesoría para proyectos</option>
                  <option value="mantenimiento">
                    Mantenimiento y Post-venta
                  </option>
                  <option value="repuestos">
                    Repuestos / Comercialización
                  </option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1">
                  Mensaje Breve (Opcional)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-brand-light-alt border border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none"
                  placeholder="Cuéntanos más sobre tu requerimiento..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold text-lg py-4 px-8 rounded-full transition-all hover:-translate-y-1 hover:shadow-xl shadow-brand-secondary/40 mt-4"
              >
                SOLICITAR INFO SIN COMPROMISO
              </button>
            </form>
            <p className="text-center text-xs text-brand-accent mt-4">
              Tus datos están protegidos. No enviamos SPAM.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
