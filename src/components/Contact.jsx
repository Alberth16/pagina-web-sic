import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-content">
        <h2 className="section-title center">Contáctanos</h2>
        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="tu@email.com" required />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea placeholder="Cuéntanos tu proyecto..." rows="5" required></textarea>
            </div>
            <button type="submit" className="btn full-width">Enviar Mensaje</button>
          </form>

          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <p>Estamos listos para escuchar tus ideas.</p>
            <div className="info-item">
              <span>📍</span>
              <p>Col. Fesitranh, avenidad fraternidad, C 507, frente al colegio Primero de Mayo<br />San Pedro Sula, Honduras</p>
            </div>
            <div className="info-item">
              <span>📧</span>
              <p>contacto@smartintegral.com</p>
            </div>
            <div className="info-item">
              <span>☎️</span>
              <p>+504 3395-7836</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
