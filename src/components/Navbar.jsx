import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Productos y Servicios', href: '#services' },
    { name: 'Contactanos', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="logo">
          <img src={logo} alt="Smart Integral Corporation" />
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
        }
        
        .navbar.scrolled {
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          padding: 10px 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          /* Removed font styles since text is gone */
        }

        .logo img {
          height: 60px; /* Increased height for wordmark */
          width: auto;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          font-weight: 500;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--accent);
          transition: width 0.3s;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: white;
          border-radius: 2px;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(15, 23, 42, 0.95);
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            clip-path: circle(0% at 100% 0);
            transition: clip-path 0.5s ease-in-out;
          }

          .nav-links.open {
            clip-path: circle(150% at 100% 0);
          }

          .menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
}
