import { motion } from 'motion/react';
import { Section, SectionTitle } from './ui-components';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: "GENERADORES DE VAPOR",
    desc: "Diseño y fabricación de calderas y equipos generadores de vapor cumpliendo estrictamente con la normativa ASME.",
    image: "https://picsum.photos/seed/caldera-vapor/400/300" // Mock image
  },
  {
    title: "ASESORÍA DE PROYECTOS",
    desc: "Consultoría especializada para el óptimo desarrollo, dimensionamiento y rendimiento de sistemas de generación.",
    image: "https://picsum.photos/seed/asesoria-ingenieria/400/300"
  },
  {
    title: "MANTENIMIENTO POST-VENTA",
    desc: "Servicio preventivo y correctivo para asegurar la máxima durabilidad, seguridad operativa y eficiencia de sus equipos.",
    image: "https://picsum.photos/seed/mantenimiento-industrial/400/300"
  },
  {
    title: "COMERCIALIZACIÓN",
    desc: "Venta e instalación de quemadores, reguladoras y repuestos de alta calidad para equipos térmicos industriales.",
    image: "https://picsum.photos/seed/repuestos-valvulas/400/300"
  }
];

export default function Products() {
  return (
    <Section id="soluciones" className="bg-brand-light-alt">
      <SectionTitle 
        title="Nuestras Soluciones Industriales" 
        subtitle="Tecnología de combustión líder y sistemas de regulación diseñados para máxima eficiencia."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100 hover:border-brand-secondary/50 flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-heading font-bold text-lg mb-3 tracking-tight text-brand-dark">{product.title}</h3>
              <p className="text-brand-accent text-sm mb-6 flex-grow">{product.desc}</p>
              <a 
                href="#contacto" 
                className="inline-flex items-center gap-2 text-brand-secondary font-bold text-sm uppercase tracking-wide group/btn w-fit"
              >
                Información
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="#contacto" 
          className="inline-flex items-center justify-center bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
        >
          VER CATÁLOGO COMPLETO
        </a>
      </div>
    </Section>
  );
}
