import { useEffect, useRef } from 'react';

const TABS = [
  { id: 'carne',  icon: 'fa-drumstick-bite', label: 'Ganado de carne' },
  { id: 'leche',  icon: 'fa-cow',            label: 'Ganado lechero' },
  { id: 'equinos',icon: 'fa-horse',          label: 'Equinos' },
  { id: 'ovinos', icon: 'fa-seedling',       label: 'Ovinos' },
  { id: 'levaduras', icon: 'fa-flask-vial',  label: 'Levaduras' },
];

export default function Curtain({ open, onClose, activeTab, onChangeTab }) {
  const ref = useRef(null);

  // Cerrar con click fuera
  useEffect(() => {
    function onDoc(e) {
      if (!open) return;
      const within = ref.current?.contains(e.target);
      const btn = e.target.closest('#toggleCurtain');
      if (!within && !btn) onClose?.();
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, [open, onClose]);

  return (
    <section
      ref={ref}
      className={`curtain ${open ? 'open' : ''}`}
      id="curtain"
      aria-hidden={open ? 'false' : 'true'}
    >
      <nav className="tabs" role="tablist" aria-label="Categorías de productos">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`tab ${activeTab === t.id ? 'active' : ''}`}
            role="tab"
            aria-selected={activeTab === t.id ? 'true' : 'false'}
            data-target={t.id}
            onClick={() => onChangeTab?.(t.id)}
          >
            <i className={`fa-solid ${t.icon}`}></i> {t.label}
          </button>
        ))}
      </nav>

      <div className="tab-panels">
        {activeTab === 'leche' && (
          <div id="leche" className="panel active" role="tabpanel">
            <h3>Ganado lechero</h3>
            <div className="products-list">
              <ul>
                <a href="/fichas/lecheras"><li><i className="fa-solid fa-drumstick-bite"></i> PX Lechero</li></a>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'carne' && (
          <div id="carne" className="panel active" role="tabpanel">
            <h3>Ganado para carne</h3>
            <div className="products-list">
              <ul>
                <a href="/fichas/pxcarne"><li><i className="fa-solid fa-drumstick-bite"></i> PX Carne C15</li></a>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'ovinos' && (
          <div id="ovinos" className="panel active" role="tabpanel">
            <h3>Ovinos</h3>
            <div className="products-list">
              <ul>
                <a href="/fichas/ovinos"><li><i className="fa-solid fa-seedling"></i> Núcleo mineral para ovinos</li></a>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'equinos' && (
          <div id="equinos" className="panel active" role="tabpanel">
            <h3>Equinos</h3>
            <div className="products-list">
              <ul>
                <a href="/fichas/equinos"><li><i className="fa-solid fa-horse"></i> Premix Equinos</li></a>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'levaduras' && (
          <div id="levaduras" className="panel active" role="tabpanel">
            <h3>Levaduras</h3>
            <div className="products-list">
              <ul>
                <a href="/fichas/byways"><li><i className="fa-solid fa-fish"></i> BYWAYS</li></a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
