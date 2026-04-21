import { motion } from 'motion/react';
import { Section, SectionTitle } from './ui-components';
import { ArrowRight, Search, PenTool, Wrench, Headset } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Evaluación Gratuita",
    desc: "Diagnóstico inicial de su sistema actual."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Diseño Personalizado",
    desc: "Ingeniería a la medida de su demanda térmica."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Fabricación Certificada",
    desc: "Construcción bajo estrictas normas ASME."
  },
  {
    icon: <Headset className="w-8 h-8" />,
    title: "Soporte Post-venta",
    desc: "Mantenimiento y atención continua garantizada."
  }
];

export default function Process() {
  return (
    <Section id="proceso" className="bg-white">
      <SectionTitle 
        title="Así Trabajamos Contigo" 
        subtitle="Un método probado para llevar su proyecto desde la evaluación inicial hasta el éxito operativo."
      />

      <div className="relative mt-16 max-w-5xl mx-auto">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-brand-light-alt -z-10">
           <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: '100%' }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeInOut" }}
             className="h-full bg-brand-secondary"
           />
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center relative"
            >
              <div className="w-24 h-24 mx-auto bg-white border-4 border-brand-light-alt rounded-full flex items-center justify-center text-brand-primary mb-6 shadow-xl relative z-10 group hover:border-brand-secondary transition-colors">
                 <div className="absolute inset-0 bg-brand-secondary rounded-full transform scale-0 group-hover:scale-100 transition-transform -z-10 opacity-10"></div>
                 {step.icon}
                 {/* Number Badge */}
                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-secondary text-white rounded-full flex items-center justify-center font-bold text-sm shadow border-2 border-white">
                    {i + 1}
                 </div>
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">{step.title}</h3>
              <p className="text-brand-accent text-sm md:px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <a 
          href="#contacto" 
          className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-xl shadow-brand-secondary/30"
        >
          INICIAR EVALUACIÓN SIN COSTO
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </Section>
  );
}
