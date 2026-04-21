import { motion } from "motion/react";
import { Section } from "./ui-components";

const industries = [
  "Industria Alimentaria",
  "Industria Hotelera",
  "Sector Minero",
  "Sector Pesquero",
  "Sector Salud",
  "Industria Textil",
  "Otras Industrias",
];

const clients = [
  { name: "C3", logo: "https://i.ibb.co/MxgRV4KK/c3.jpg" },
  {
    name: "Ideas Textiles",
    logo: "https://i.ibb.co/hFC3F1R1/ideas-textiles.jpg",
  },
  { name: "Sonesta", logo: "https://i.ibb.co/bgQ941yN/sonesta.jpg" },
  {
    name: "Hospital Loreto",
    logo: "https://i.ibb.co/tMD95gBN/hospital-loreto.jpg",
  },
  { name: "C2", logo: "https://i.ibb.co/JF8SxQ5B/c2.jpg" },
  { name: "Etsa Peru", logo: "https://i.ibb.co/WN2rfK2J/etsa-peru.jpg" },
  { name: "Filasur", logo: "https://i.ibb.co/FkWGnqGL/filasur.jpg" },
  { name: "San Ramon", logo: "https://i.ibb.co/4ncmk5bh/textsan-ramon.jpg" },
  { name: "C1", logo: "https://i.ibb.co/4nqbYp7m/c1.jpg" },
  { name: "Dripopor", logo: "https://i.ibb.co/1Y74GBmn/dripopor.jpg" },
  { name: "Casinelli", logo: "https://i.ibb.co/hJF2XhqX/casinelli.jpg" },
  { name: "Baront", logo: "https://i.ibb.co/wZ8qfVq4/baront.jpg" },
];

export default function TrustSignals() {
  return (
    <>
      <Section
        id="clientes-logos"
        className="bg-white text-brand-dark py-20 relative border-b border-gray-100 overflow-hidden"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.manserviceingenieros.com/images/bg-pattern.png')] bg-repeat"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[120px]"></div>

        <div className="relative z-10">
          <div className="text-center px-4">
            <h3 className="text-xl md:text-2xl font-black font-heading text-brand-dark tracking-[0.2em] uppercase opacity-40 mb-12">
              Nuestros Clientes y Aliados
            </h3>

            {/* Infinite Marquee Implementation */}
            <div className="relative w-full overflow-hidden py-10 select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <motion.div
                className="flex w-fit gap-12 md:gap-20 items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 15,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...clients, ...clients, ...clients, ...clients].map(
                  (client, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 flex items-center justify-center h-16 md:h-32   hover:opacity-100 transition-all duration-500"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full w-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ),
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="clientes-sectores"
        className="bg-brand-light-alt text-brand-dark py-20 relative border-b border-gray-100 overflow-hidden"
      >
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-1 bg-brand-secondary"></span>
            <span className="text-brand-secondary font-black uppercase tracking-[0.3em] text-xs">
              Red de Confianza
            </span>
            <span className="w-8 h-1 bg-brand-secondary"></span>
          </div>
          <h2 className="text-4xl text-brand-dark md:text-6xl font-black font-heading mb-6 tracking-tight leading-tight">
            Sectores que <br className="md:hidden" />{" "}
            <span className="text-brand-dark underline decoration-brand-secondary/20 decoration-8 underline-offset-8">
              Confían
            </span>{" "}
            en Nosotros
          </h2>
          <p className="text-brand-accent max-w-2xl mx-auto text-lg font-medium leading-relaxed italic">
            "Uniendo ingeniería y compromiso para fortalecer la industria
            nacional."
          </p>
        </div>

        {/* Sectors Tags */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white hover:bg-brand-primary border border-gray-100 text-brand-accent hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 cursor-default shadow-sm text-xs md:text-sm uppercase tracking-widest flex items-center gap-2 group"
            >
              <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full group-hover:bg-white transition-colors"></div>
              {ind}
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
