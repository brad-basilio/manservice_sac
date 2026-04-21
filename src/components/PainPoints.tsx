import { motion } from "motion/react";
import { Section, SectionTitle } from "./ui-components";
import { AlertTriangle, Activity, Zap } from "lucide-react";

const problems = [
  {
    icon: <AlertTriangle className="w-10 h-10 text-brand-secondary" />,
    title: "Equipos Obsoletos",
    desc: "Sistemas antiguos que ponen en riesgo la seguridad y eficiencia de su planta.",
  },
  {
    icon: <Zap className="w-10 h-10 text-brand-secondary" />,
    title: "Alto Consumo",
    desc: "Costos excesivos de combustible debido a ineficiencias térmicas no detectadas.",
  },
  {
    icon: <Activity className="w-10 h-10 text-brand-secondary" />,
    title: "Fallas Constantes",
    desc: "Paradas de producción no programadas que afectan su rentabilidad diaria.",
  },
];

export default function PainPoints() {
  return (
    <Section
      id="problemas"
      className="bg-brand-light-alt relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <SectionTitle
        title="¿Problemas con tus Sistemas de Vapor?"
        subtitle="Nosotros optimizamos tu sistema para garantizar el máximo rendimiento industrial."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((problem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:border-brand-secondary/30 transition-shadow relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-3xl"></div>
            <div className="mb-6 bg-brand-light-alt w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {problem.icon}
            </div>
            <h3 className="text-3xl font-bold font-heading mb-3">
              {problem.title}
            </h3>
            <p className="text-brand-accent">{problem.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-16 bg-linear-to-br from-brand-primary to-brand-dark text-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-secondary/30 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-primary/40 rounded-full blur-[80px]"></div>

        <div className="relative z-10 max-w-2xl text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <span className="h-px w-8 bg-white"></span>
            <span className="uppercase tracking-[0.2em] text-white font-black text-xs">
              Excelencia Garantizada
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black font-heading mb-8 leading-[1.1] text-white">
            Nuestra Promesa de <br className="hidden md:block" />
            <span className="text-brand-secondary drop-shadow-[0_2px_10px_rgba(217,39,42,0.3)]">
              Optimización Industrial:
            </span>
          </h3>
          <ul className="space-y-4 inline-block text-left">
            {[
              "Reducción directa de costos energéticos acumulados",
              "Cumplimiento total de normas técnicas internacionales",
              "Mantenimiento de clase mundial para su infraestructura",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 group/item">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-secondary group-hover/item:border-brand-secondary transition-all duration-500 transform group-hover/item:rotate-12">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-lg font-bold text-white/90 group-hover/item:text-white transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 w-full lg:w-auto">
          <a
            href="#contacto"
            className="group/btn relative inline-flex items-center justify-center w-full lg:min-w-[280px] px-10 py-6 font-black text-brand-primary transition-all duration-300 bg-white rounded-full hover:bg-brand-light hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]"
          >
            <span className="relative z-10 uppercase tracking-widest text-lg">
              Diagnosticar mi Sistema
            </span>
            <div className="absolute inset-0 rounded-3xl bg-white/50 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
