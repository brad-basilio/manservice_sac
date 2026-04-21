import { motion } from 'motion/react';
import { Section, SectionTitle } from './ui-components';
import { Target, Eye } from 'lucide-react';

export default function ValueProp() {
  return (
    <Section id="nosotros" className="bg-white">
      <SectionTitle 
        title="¿Quiénes Somos?" 
        subtitle="Especialistas en el desarrollo y optimización de sistemas de vapor con más de 30 años de experiencia."
      />
      <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
        {/* Text Column */}
        <motion.div
           initial={{ opacity: 0, x: -40 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="space-y-6 text-brand-accent text-lg leading-relaxed"
        >
          <p>
            <strong className="text-brand-dark">Manservice Ingenieros</strong> es una empresa peruana especializada en el mercado de sistemas de vapor. 
            Contamos con profesionales con más de 30 años de experiencia en la industria por lo cual nos especializamos en el desarrollo y optimización de sistemas.
          </p>
          <p>
            Somos especialistas en el diseño y fabricación de equipos generadores de vapor por lo que cumplimos con las 
            Normas Técnicas de Estándar Internacional <strong>ASME (American Society of Mechanical Engineers)</strong>.
          </p>
          <p>
            Somos conocidos por las diferentes industrias por ofrecer el mejor servicio de asesoría para proyectos de sistemas de generación de vapor; 
            y por los servicios de post-venta y de mantenimiento.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-brand-light-alt p-8 rounded-3xl shadow-xl border-l-4 border-brand-secondary hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white p-3 rounded-full shadow text-brand-secondary">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-brand-dark">Nuestra Misión</h3>
            </div>
            <p className="text-brand-accent">
              Diseñar, fabricar, instalar y comercializar productos de la industria del vapor cumpliendo con los 
              más altos estándares de calidad, seguridad y tecnología. Asimismo, ofrecer una atención profesional y 
              personalizada que se adecuen a las necesidades de nuestros clientes.
            </p>
          </div>

          <div className="bg-brand-light-alt p-8 rounded-3xl shadow-xl border-l-4 border-brand-primary hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white p-3 rounded-full shadow text-brand-primary">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-brand-dark">Nuestra Visión</h3>
            </div>
            <p className="text-brand-accent">
              Establecernos como líderes en el mercado nacional de generadores de vapor, mejorando la 
              calidad de nuestros productos y servicios para así brindar la mayor satisfacción de nuestros clientes.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
