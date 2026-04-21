import {
  Facebook,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a252f] text-gray-300 pt-16 pb-8 border-t-4 border-brand-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="https://i.ibb.co/y9wVgTB/logo-white-man-service.png"
                alt="Manservice Ingenieros Logo"
                className="h-12 md:h-16 w-auto "
              />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Especialistas en sistemas de vapor y combustión industrial.
              Ingeniería, fabricación y mantenimiento con estándares
              internacionales.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-brand-secondary hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-brand-secondary hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-brand-secondary hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">
              Contacto
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                <span>Av. Industrial 1234, Lima - Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                <span>+51 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                <span>info@manserviceingenieros.com</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#soluciones"
                  className="hover:text-brand-secondary transition-colors"
                >
                  Nuestras Soluciones
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-brand-secondary transition-colors"
                >
                  Por qué Elegirnos
                </a>
              </li>
              <li>
                <a
                  href="#proceso"
                  className="hover:text-brand-secondary transition-colors"
                >
                  Nuestra Metodología
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-brand-secondary transition-colors"
                >
                  Solicitar Cotización
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>
            &copy; {new Date().getFullYear()} Manservice S.A.C. Ingenieros.
            Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
