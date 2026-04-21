import { motion } from "motion/react";
import { Section } from "./ui-components";
import { Target, Eye, Award, CheckCircle2 } from "lucide-react";

export default function ValueProp() {
  return (
    <Section id="nosotros" className="bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="grid lg:grid-cols-12 gap-16 items-center">
        {/* Visual Column (5/12) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] z-10 aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
              alt="Manservice Ingenieros"
              className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-primary/95 via-transparent to-transparent"></div>

            {/* Overlay Experience */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/20">
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-6xl font-black text-brand-secondary leading-none">
                    +30
                  </span>
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] mt-2">
                    Años de Trayectoria
                  </span>
                </div>
                <div className="h-16 w-px bg-white/20"></div>
                <p className="text-white/90 text-sm font-bold leading-snug">
                  Liderando la industria del vapor en el Perú con excelencia
                  técnica indiscutible.
                </p>
              </div>
            </div>
          </div>

          {/* Floaters and Decor */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-secondary/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        {/* Content Column (7/12) */}
        <div className="lg:col-span-7 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-1 bg-brand-secondary rounded-full"></span>
              <span className="text-brand-secondary font-black uppercase tracking-[0.3em] text-xs">
                Excelencia en Ingeniería
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black font-heading text-brand-dark mb-8 leading-[1.1]">
              ¿Quiénes <span className="text-brand-primary">Somos?</span>
            </h2>

            <div className="space-y-6 text-brand-accent text-lg leading-relaxed">
              <p>
                <strong className="text-brand-dark font-black">
                  Manservice Ingenieros
                </strong>{" "}
                representa la culminación de más de tres décadas de maestría
                técnica en sistemas térmicos. Como empresa peruana líder, nos
                apasiona transformar desafíos industriales en soluciones de alta
                eficiencia energética.
              </p>
              <p>
                Especializados en el diseño y fabricación bajo la rigurosa
                <strong className="text-brand-dark font-bold border-b-4 border-brand-secondary/20 pb-0.5 mx-1 inline-block">
                  Normativa ASME
                </strong>
                , entregamos equipos que definen el estándar de seguridad y
                rentabilidad en la operación industrial moderna.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-brand-light-alt p-8 rounded-[2.5rem] border border-transparent hover:border-brand-secondary/20 transition-all duration-500 group shadow-sm hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-secondary mb-6 shadow-md group-hover:bg-brand-secondary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black font-heading text-brand-dark mb-4 tracking-tight">
                Nuestra Misión
              </h3>
              <p className="text-brand-accent/90 text-sm leading-relaxed font-medium">
                Impulsar la industria mediante el diseño y fabricación de
                sistemas de vapor de clase mundial, ofreciendo tecnología de
                punta y un soporte personalizado inigualable.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-brand-primary p-8 rounded-[2.5rem] shadow-full group text-white relative overflow-hidden transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-6 shadow-md group-hover:bg-brand-secondary transition-all duration-500 transform group-hover:rotate-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black font-heading mb-4 tracking-tight text-white">
                Nuestra Visión
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-medium">
                Ser el referente definitivo en el mercado global, redefiniendo
                los estándares de calidad y sostenibilidad en ingeniería de
                vapor y servicios industriales preventivos.
              </p>
            </motion.div>
          </div>

          {/* Bottom Features/Certifications */}
          <div className="flex flex-wrap gap-6 pt-4">
            {[
              {
                icon: <Award className="text-brand-secondary w-6 h-6" />,
                text: "Garantía Internacional ASME",
              },
              {
                icon: <CheckCircle2 className="text-brand-primary w-6 h-6" />,
                text: "Soporte Técnico Especializado",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-gray-100 shadow-sm hover:bg-white transition-colors duration-300"
              >
                {feature.icon}
                <span className="font-bold text-brand-dark text-[10px] uppercase tracking-[0.2em]">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
