import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-hearts">💕</div>
        <p className="footer-text">Made with love by</p>
        <div className="footer-names">
          Omkar <span className="heart-divider">❤️</span> Shweta
        </div>
        <p className="footer-text">Forever and Always</p>
        <div className="footer-sparkles">✨ 💑 ✨</div>
        <p className="footer-date">© {currentYear} - A Love Story</p>
      </div>
    </footer>
  );
};

export default Footer;
