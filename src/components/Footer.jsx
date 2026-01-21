import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container center">
        <p>&copy; {new Date().getFullYear()} Smart Integral Corporation. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
