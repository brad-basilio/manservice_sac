import { motion } from 'motion/react';
import { SectionTitle } from './ui-components';

export default function Certifications() {
  return (
    <section className="py-20 bg-brand-light-alt border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 justify-center">
          
          {/* Logo ASME - Mock using text since we don't have the real SVG right now */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-2xl flex items-center justify-center flex-shrink-0 border-8 border-brand-primary p-6 relative"
          >
            <div className="absolute inset-2 border-2 border-dashed border-brand-primary/30 rounded-full"></div>
            <div className="text-center font-serif text-brand-primary">
              <div className="text-5xl md:text-6xl font-black mb-1 tracking-tighter">ASME</div>
              <div className="text-[10px] md:text-xs leading-none font-bold uppercase tracking-widest text-brand-secondary">Certified</div>
            </div>
          </motion.div>

          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-brand-dark">Cumplimos Estándares Internacionales</h2>
            <div className="h-1 bg-brand-secondary w-20 mb-6 mx-auto md:mx-0"></div>
            
            <p className="text-xl font-bold mb-6 text-brand-accent">
              American Society of Mechanical Engineers
            </p>
            
            <p className="text-brand-dark/80 mb-6 font-semibold">
              Todos nuestros equipos están diseñados, fabricados y probados cumpliendo rigurosamente con:
            </p>
            
            <ul className="space-y-3 font-medium text-brand-accent mb-8">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                Norma ASME Sección I (Calderas de Potencia)
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                Norma ASME Sección VIII (Recipientes a Presión)
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                Normas Técnicas Peruanas (NTP) aplicables
              </li>
            </ul>

            <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm bg-white/50 px-4 py-2 border border-brand-primary/20 rounded">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Sello de certificación verificable
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
