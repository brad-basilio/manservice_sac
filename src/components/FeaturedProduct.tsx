import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Shield, Zap, Settings } from 'lucide-react';

export default function FeaturedProduct() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Efecto parallax: Mueve la imagen de fondo hacia abajo mientras haces scroll hacia abajo
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  // Efecto fade y escala para el contenido central
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);

  return (
    <section ref={ref} className="relative h-[85vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0 w-full h-[140%] -top-[20%]"
      >
        <img 
          src="https://picsum.photos/seed/industrial-boiler-premium/1920/1080?blur=1" 
          alt="Generador de Vapor Premium" 
          className="w-full h-full object-cover origin-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/85 mix-blend-multiply"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="container relative z-10 mx-auto px-4 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-block bg-brand-secondary text-white px-5 py-2 rounded-full font-bold text-xs mb-8 tracking-widest uppercase shadow-lg shadow-brand-secondary/30 ring-1 ring-white/20">
          Producto Estrella
        </div>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-6 leading-tight drop-shadow-2xl">
          Generadores de Vapor <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Serie Premium</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Diseñados para la industria pesada. Máxima eficiencia térmica, bajo consumo de combustible y construcción robusta con acero estructural bajo estricta certificación ASME.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-14 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-md">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-brand-secondary" />
            </div>
            <span className="font-semibold text-sm md:text-base tracking-wide">Acero ASME</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-md">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-brand-secondary" />
            </div>
            <span className="font-semibold text-sm md:text-base tracking-wide">Ahorro Energético VIP</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-md">
              <Settings className="w-6 h-6 md:w-8 md:h-8 text-brand-secondary" />
            </div>
            <span className="font-semibold text-sm md:text-base tracking-wide">Automatización</span>
          </div>
        </div>

        <a 
          href="#contacto" 
          className="inline-flex items-center gap-3 bg-brand-secondary hover:bg-white hover:text-brand-dark transition-all duration-300 px-10 py-5 rounded-full font-bold text-lg group shadow-[0_0_40px_-10px_rgba(217,39,42,0.6)]"
        >
          Solicitar Ficha Técnica
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
