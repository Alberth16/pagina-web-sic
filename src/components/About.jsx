import React from 'react';
import aboutImg from '../assets/about.png';
import '../styles/About.css';

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
            <div className="value-card">
              <h3>Flexibilidad</h3>
              <p>Creación de aplicaciones a las necesidades del cliente.</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="img-wrapper">
            <img src={aboutImg} alt="Nuestro Equipo" />
          </div>
        </div>
      </div>
    </section>
  );
}
