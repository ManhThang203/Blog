import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} My React Blog. All rights reserved.</p>
        <div className="social-links">
          <a href="#twitter" className="social-link">
            Twitter
          </a>
          <a href="#facebook" className="social-link">
            Facebook
          </a>
          <a href="#linkedin" className="social-link">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
