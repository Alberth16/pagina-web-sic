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
                            <p>Av. Innovación 123, Edificio Tech<br />Ciudad Integrada</p>
                        </div>
                        <div className="info-item">
                            <span>📧</span>
                            <p>contacto@smartintegral.com</p>
                        </div>
                        <div className="info-item">
                            <span>☎️</span>
                            <p>+123 456 7890</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-wrapper {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 50px;
          margin-top: 40px;
          background: var(--card-bg);
          padding: 40px;
          border-radius: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-main);
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          background: rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: white;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
        }

        .full-width {
          width: 100%;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-left: 30px;
          border-left: 1px solid rgba(255,255,255,0.1);
        }

        .info-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          color: var(--text-muted);
        }

        .info-item span {
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            padding: 20px;
          }
          .contact-info {
            padding-left: 0;
            border-left: none;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 30px;
          }
        }
      `}</style>
        </section>
    );
}
