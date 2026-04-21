import { motion } from "motion/react";
import { Section, SectionTitle } from "./ui-components";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Generadores de Vapor",
    desc: "Diseño y fabricación de calderas y equipos generadores de vapor cumpliendo estrictamente con la normativa ASME.",
    image: "https://www.manserviceingenieros.com/images/hsg400-min.png",
  },
  {
    title: "Reguladoras de Gas",
    desc: "Reguladoras de gas de alta calidad para equipos térmicos industriales.",
    image:
      "https://www.manserviceingenieros.com/images/Belgas%20p2010160300b3f0-min.png",
  },
  {
    title: "Quemadores Duales",
    desc: "Quemadores duales de alta calidad para equipos térmicos industriales.",
    image: "https://www.manserviceingenieros.com/images/p_duales.jpg",
  },
  {
    title: "Repuestos de Productos",
    desc: "Repuestos de alta calidad para equipos térmicos industriales.",
    image: "https://www.manserviceingenieros.com/images/img4.jpg",
  },
];

export default function Products() {
  return (
    <Section id="soluciones" className="bg-brand-light-alt">
      <SectionTitle
        title="Nuestras Soluciones Industriales"
        subtitle="Tecnología de combustión líder y sistemas de regulación diseñados para máxima eficiencia."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-3 transition-all duration-500 group border border-gray-50 flex flex-col h-full"
          >
            {/* Image Container - Square & Contain */}
            <div className="relative aspect-square p-10 bg-slate-50/50 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full aspect-square object-contain transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                <ArrowRight className="w-4 h-4 text-brand-secondary" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow bg-white relative">
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary/70 block mb-1">
                  Categoría Industrial
                </span>
                <h3 className="font-heading font-black text-2xl leading-tight text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                  {product.title}
                </h3>
              </div>

              <p className="text-brand-accent text-sm leading-relaxed mb-8 flex-grow font-medium">
                {product.desc}
              </p>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-brand-light-alt rounded-full text-brand-dark font-black text-xs uppercase tracking-widest group/btn hover:bg-brand-secondary hover:text-white transition-all duration-300 shadow-sm"
              >
                Solicitar Cotización
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <a
          href="#contacto"
          className="group relative inline-flex items-center justify-center px-10 py-4 font-black text-white transition-all duration-300 bg-brand-primary rounded-full hover:bg-brand-dark shadow-xl hover:shadow-brand-primary/20 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-2">
            EXPLORAR CATÁLOGO COMPLETO
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </div>
    </Section>
  );
}
