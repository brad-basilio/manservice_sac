import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgy = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay - Parallax Applied */}
      <motion.div
        className="absolute inset-0 z-0 origin-top h-[120%]"
        style={{ y: bgy }}
      >
        <img
          src="https://i.ibb.co/v625cb3w/CAMPAIGN-HEADER-Benefits-of-Steam02-1.webp"
          alt="Industrial boiler machinery background"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Navy blue overlay 80% */}
        <div className="absolute inset-0 bg-brand-primary/80 mix-blend-multiply"></div>
        {/* Gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            style={{ opacity, y: yContent }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-[5.5rem] font-bold font-heading text-white leading-[1.1] mb-6 tracking-tight drop-shadow-2xl">
              SOLUCIONES EN SISTEMAS DE VAPOR CON ESTÁNDAR INTERNACIONAL
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl font-sans leading-relaxed drop-shadow-md">
              +30 años diseñando y fabricando equipos generadores de vapor
              certificados ASME para la industria peruana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contacto"
                className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-105 hover:-translate-y-1 hover:shadow-xl shadow-brand-secondary/40"
              >
                SOLICITAR COTIZACIÓN GRATIS
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#soluciones"
                className="bg-transparent border-2 border-white/80 backdrop-blur-sm text-white hover:bg-white hover:text-brand-dark font-bold py-4 px-8 rounded-full flex items-center justify-center transition-all hover:scale-105 hover:-translate-y-1 shadow-lg"
              >
                VER CATÁLOGO DE PRODUCTOS
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 md:gap-12 border-t border-white/20 pt-8 mt-auto">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 backdrop-blur p-3 rounded-full shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-light" />
                </div>
                <div>
                  <div className="text-white font-bold font-heading text-lg leading-tight">
                    Certificación ASME
                  </div>
                  <div className="text-white/70 text-sm">
                    Estándar global garantizado
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 backdrop-blur p-3 rounded-full shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-light" />
                </div>
                <div>
                  <div className="text-white font-bold font-heading text-lg leading-tight">
                    +500 Proyectos
                  </div>
                  <div className="text-white/70 text-sm">
                    Casos de éxito industriales
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
