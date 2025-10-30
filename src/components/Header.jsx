import { forwardRef } from 'react';

const Header = forwardRef(function Header({ onToggleCurtain, isCurtainOpen }, ref) {
  return (
    <header className="header" role="banner" ref={ref}>
      <button>
        <a href="/"><img src="/img/logo 2.png" className="Logo-biotecap" alt="Biotecap" /></a>
      </button>
      <button
        className="handle-btn"
        id="toggleCurtain"
        aria-expanded={isCurtainOpen ? 'true' : 'false'}
        aria-controls="curtain"
        onClick={onToggleCurtain}
      >
        <i className="fa-solid fa-list"></i> Productos
      </button>
    </header>
  );
});

export default Header;
