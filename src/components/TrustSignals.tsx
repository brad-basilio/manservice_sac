import { motion } from 'motion/react';
import { Section } from './ui-components';

const industries = [
  "Industria Alimentaria", 
  "Industria Hotelera", 
  "Sector Minero", 
  "Sector Pesquero", 
  "Sector Salud", 
  "Industria Textil",
  "Otras Industrias"
];

const mockClients = ['Baronet', 'Cassinelli', 'Dipropor', 'GPI', 'Gloria', 'Alicorp'];

export default function TrustSignals() {
  return (
    <Section id="clientes" className="bg-brand-dark text-white pt-24 pb-20 relative border-b-4 border-brand-secondary">
      <div className="absolute inset-0 opacity-5 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] bg-repeat"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Sectores que Confían en Nosotros</h2>
          <div className="h-1 bg-brand-secondary w-20 mx-auto mb-8"></div>
          <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Proporcionamos nuestros servicios a los diferentes sectores e industrias, garantizando el mejor servicio de asesoría, post-venta y mantenimiento para proyectos de sistemas de generación de vapor.
          </p>
        </div>

        {/* Sectors Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-24 max-w-4xl mx-auto">
           {industries.map((ind, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-brand-primary/20 hover:bg-brand-secondary hover:-translate-y-1 border border-brand-primary/40 text-white px-8 py-3 rounded-full font-semibold transition-all cursor-default shadow-lg text-sm md:text-base"
             >
               {ind}
             </motion.div>
           ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-white/90">Nuestros Clientes Destacados</h3>
        </div>

        {/* Logos Carousel Mock */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 whitespace-nowrap bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-md max-w-5xl mx-auto border border-white/10 shadow-2xl">
          {mockClients.map((logo, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="text-2xl md:text-3xl font-heading font-black tracking-widest uppercase hover:text-brand-secondary transition-colors cursor-pointer"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
