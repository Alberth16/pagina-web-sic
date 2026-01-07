import aboutImg from '../assets/about.png';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-text">
          <h2 className="section-title">Sobre <span className="highlight">Nosotros</span></h2>
          <p>
            En <strong>Smart Integral Corporation</strong>, creemos en el poder de la tecnología para transformar negocios.
            Somos un equipo apasionado de desarrolladores, diseñadores y estrategas digitales comprometidos con la excelencia.
          </p>
          <div className="mission-vision">
            <div className="mv-item">
              <h4>Misión</h4>
              <p>“Fomentar el crecimiento de nuestros clientes mediante la creación de sistemas inteligentes, con el cual podamos acompañarlos estratégicamente, asegurando que la tecnología sea la base para el cumplimiento de sus objetivos."</p>
            </div>
            <div className="mv-item">
              <h4>Visión</h4>
              <p>"Ser una empresa modelo en innovación tecnológica, solucionando las necesidades del mercado y estableciendo altos estándares en calidad, servicio y la adaptabilidad de nuestras soluciones en sistemas."</p>
            </div>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h3>Trabajo en Equipo</h3>
              <p>La colaboración es nuestra mayor fortaleza. Creamos sinergia para obtener resultados extraordinarios.</p>
            </div>
            <div className="value-card">
              <h3>Confianza</h3>
              <p>Construimos relaciones duraderas basadas en la transparencia y la honestidad.</p>
            </div>
            <div className="value-card">
              <h3>Innovación</h3>
              <p>Siempre a la vanguardia, buscando las soluciones más modernas y eficientes.</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="img-wrapper">
            <img src={aboutImg} alt="Nuestro Equipo" />
          </div>
        </div>
      </div>

      <style>{`
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }

        .highlight {
          color: var(--accent);
        }

        .about p {
          color: var(--text-muted);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .mission-vision {
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mv-item h4 {
          color: var(--accent);
          font-size: 1.2rem;
          margin-bottom: 5px;
        }

        .mv-item p {
          font-size: 1rem;
          font-style: italic;
          margin-bottom: 0;
          border-left: 3px solid var(--secondary);
          padding-left: 15px;
        }

        .values-grid {
          display: grid;
          gap: 20px;
        }

        .value-card {
          background: var(--card-bg);
          padding: 20px;
          border-left: 4px solid var(--primary);
          border-radius: 0 8px 8px 0;
        }

        .value-card h3 {
          color: var(--text-main);
          margin-bottom: 5px;
        }

        .value-card p {
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        .img-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          transform: perspective(1000px) rotateY(-10deg);
          transition: transform 0.5s;
        }

        .img-wrapper:hover {
          transform: perspective(1000px) rotateY(0deg);
        }

        .img-wrapper img {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 900px) {
          .about-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .values-grid {
            text-align: left;
          }

          .img-wrapper {
            transform: none;
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  );
}
