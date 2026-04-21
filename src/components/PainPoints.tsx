import { motion } from 'motion/react';
import { Section, SectionTitle } from './ui-components';
import { AlertTriangle, Activity, Zap } from 'lucide-react';

const problems = [
  {
    icon: <AlertTriangle className="w-10 h-10 text-brand-secondary" />,
    title: "Equipos Obsoletos",
    desc: "Sistemas antiguos que ponen en riesgo la seguridad y eficiencia de su planta."
  },
  {
    icon: <Zap className="w-10 h-10 text-brand-secondary" />,
    title: "Alto Consumo",
    desc: "Costos excesivos de combustible debido a ineficiencias térmicas no detectadas."
  },
  {
    icon: <Activity className="w-10 h-10 text-brand-secondary" />,
    title: "Fallas Constantes",
    desc: "Paradas de producción no programadas que afectan su rentabilidad diaria."
  }
];

export default function PainPoints() {
  return (
    <Section id="problemas" className="bg-brand-light-alt relative overflow-hidden">
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
            <h3 className="text-xl font-bold font-heading mb-3">{problem.title}</h3>
            <p className="text-brand-accent">{problem.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-16 bg-brand-primary text-white p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/blueprint/1000/500')] bg-cover mix-blend-overlay"></div>
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">Nuestra Promesa de Optimización:</h3>
          <ul className="space-y-3">
            {[
              "Reducir costos energéticos con tecnología moderna",
              "Cumplir estrictamente con normas internacionales",
              "Minimizar paradas de producción con mantenimiento preventivo"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-secondary flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative z-10 w-full md:w-auto">
          <a href="#contacto" className="block w-full text-center bg-white text-brand-primary font-bold py-4 px-8 rounded-full hover:bg-brand-light hover:scale-105 transition-transform shadow-xl">
            Diagnosticar mi Sistema
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
