import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50">
            <img 
              src="https://www.manserviceingenieros.com/images/logo.png" 
              alt="Manservice Ingenieros Logo" 
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#soluciones" className={`font-semibold hover:text-brand-secondary transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white/90'}`}>Soluciones</a>
            <a href="#nosotros" className={`font-semibold hover:text-brand-secondary transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white/90'}`}>Por qué Manservice</a>
            <a href="#proceso" className={`font-semibold hover:text-brand-secondary transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white/90'}`}>Metodología</a>
            <a href="#contacto" className="bg-brand-secondary hover:bg-brand-secondary/90 text-white px-6 py-2.5 rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl font-bold flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Cotizar Ahora
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden z-50 ${isScrolled || mobileMenuOpen ? 'text-brand-dark' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 flex flex-col justify-center items-center gap-8 lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="#soluciones" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-heading font-bold text-brand-dark">Soluciones</a>
        <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-heading font-bold text-brand-dark">Por qué Manservice</a>
        <a href="#proceso" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-heading font-bold text-brand-dark">Metodología</a>
        <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="bg-brand-secondary text-white px-8 py-4 rounded-full font-bold text-xl flex items-center gap-2 mt-4 shadow-lg">
          <Phone className="w-5 h-5" />
          Cotizar Ahora
        </a>
      </div>
    </header>
  );
}
