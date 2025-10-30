export default function Footer({ onWhatsAppClick }) {
  return (
    <footer className="footer" aria-label="Redes sociales">
      <a id="whatsappBtn" className="social whatsapp" href="#" aria-label="WhatsApp" onClick={onWhatsAppClick}>
        <i className="fab fa-whatsapp"></i>
      </a>
      <a className="social phone" href="tel:+523787319554" aria-label="Llamar">
        <i className="fa-solid fa-phone"></i>
      </a>
      {/* Agrega LinkedIn/Facebook si quieres activarlos */}
    </footer>
  );
}
