import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles.css';
import Loader from './components/Loader.jsx';
import Header from './components/Header.jsx';
import Spacer from './components/Spacer.jsx';
import BentoGrid from './components/BentoGrid/BentoGrid.jsx';
import Curtain from './components/Curtain/Curtain.jsx';
import Footer from './components/Footer.jsx';
import FichasRouter from './FichasRouter.jsx';

function Home({ headerH }) {
  return (
    <>
      <Spacer height={headerH} />
      <main>
        <section className="fbp-card">
          <div className="fbp-cover" style={{ backgroundImage: "url('/img/banner_BANNER.jpg')" }} />
          <div className="fbp-body">
            <img className="fbp-avatar" src="/img/Inge.jpeg" alt="Foto de perfil" />
            <div className="fbp-info">
              <h2 className="fbp-name">Arturo Anzaldo Ramírez</h2>
              <p className="fbp-role">Técnico en ventas</p>
              <p className="fbp-role">729 282 1472</p>
              <p className="fbp-role" type="email">arturoanzaldor@gmail.com</p>
              <p className="fbp-bio">
                Calle Vicente Guerrero 217, Col. San Nicolas, C.P. 52104, San Mateo de Atenco, Estado de México
              </p>
            </div>
          </div>
        </section>

        <BentoGrid
          cards={[
            { title: 'Ganado de carne',  bg: '/img/ganado.jpeg',       logo: '/img/pxcarnesc15.svg', link: '/fichas/pxcarne' },
            { title: 'Ganado lechero',   bg: '/img/ganadolechero.png', logo: '/img/pxlecheras.svg',  link: '/fichas/lecheras' },
            { title: 'Equinos',          bg: '/img/ganado equino.jpg', logo: '/img/equinos.svg',     link: '/fichas/equinos' },
            { title: 'Ovinos',           bg: '/img/fondo-ovino.jpg',   logo: '/img/ovinos.svg',      link: '/fichas/ovinos' },
            { title: 'Levaduras',        bg: '/img/levadura.jpg',      logo: '/img/byways.svg',      link: '/fichas/byways' }
          ]}
        />
      </main>
    </>
  );
}

export default function App() {
  const headerRef = useRef(null);
  const [headerH, setHeaderH] = useState(90);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('carne'); // pestaña por defecto
  const location = useLocation();

  // Altura del header
  useEffect(() => {
    const update = () => { if (headerRef.current) setHeaderH(headerRef.current.offsetHeight); };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Cerrar cortina con ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setCurtainOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Cerrar cortina al cambiar de ruta (para que no quede abierta al navegar a fichas)
  useEffect(() => {
    setCurtainOpen(false);
  }, [location.pathname]);

  const openWhatsApp = (e) => {
    e?.preventDefault?.();
    window.open(
      'https://wa.me/523787319554?text=Hola%20quiero%20más%20información%20sobre%20sus%20productos',
      '_blank'
    );
  };

  return (
    <>
      <Loader />

      {/* Header SIEMPRE visible; el botón “Productos” controla la misma cortina */}
      <Header
        ref={headerRef}
        onToggleCurtain={() => {
          setCurtainOpen(v => {
            const next = !v;
            if (next && !activeTab) setActiveTab('carne'); // por si estuviera null
            return next;
          });
        }}
        isCurtainOpen={curtainOpen}
      />

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home headerH={headerH} />} />
        <Route path="/fichas/*" element={<><Spacer height={headerH} /><FichasRouter /></>} />
      </Routes>

      {/* Cortina GLOBAL: aparece en home y en /fichas/* */}
      <Curtain
        open={curtainOpen}
        onClose={() => setCurtainOpen(false)}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
      />

      {/* Footer global */}
      <Footer onWhatsAppClick={openWhatsApp} />
    </>
  );
}
