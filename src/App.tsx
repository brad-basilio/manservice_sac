import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import ValueProp from './components/ValueProp';
import Products from './components/Products';
import FeaturedProduct from './components/FeaturedProduct';
import TrustSignals from './components/TrustSignals';
import Process from './components/Process';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  
  useEffect(() => {
    // Inicializar Lenis para el buttery smooth scrolling moderno
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Conectar el hash scroll de anclas con Lenis (smooth anchor scrolling)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetAttr = this.getAttribute('href');
        if(targetAttr) {
            lenis.scrollTo(targetAttr);
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans text-brand-dark bg-brand-light">
      <Navbar />
      <Hero />
      <PainPoints />
      <ValueProp />
      <Products />
      <FeaturedProduct />
      <TrustSignals />
      <Process />
      <Certifications />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
