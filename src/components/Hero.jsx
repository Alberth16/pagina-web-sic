import heroBg from '../assets/hero-bg.png';

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Innovación Digital, <span className="gradient-text">Futuro Integral</span></h1>
                <p>Smart Integral Corporation transforma tus ideas en soluciones de software de alto impacto.</p>
                <div className="cta-group">
                    <a href="#about" className="btn">Conócenos</a>
                    <a href="#contact" className="btn btn-outline">Contáctanos</a>
                </div>
            </div>

            <style>{`
        .hero {
          background-image: url(${heroBg});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          text-align: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.7); /* Overlay darker */
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .gradient-text {
          background: linear-gradient(to right, var(--accent), var(--secondary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero p {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 700px;
          margin-bottom: 30px;
        }

        .cta-group {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }
          .cta-group {
            flex-direction: column;
            width: 100%;
            max-width: 300px;
          }
          .btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
        </section>
    );
}
