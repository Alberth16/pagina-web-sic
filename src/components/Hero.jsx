import React from 'react';
import heroBg from '../assets/hero-bg.png';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h2 className="center"><span className="">Simplifica - Crea - Innova</span></h2>
        <h1>Innovación Digital, <span className="gradient-text">Futuro Integral</span></h1>
        <p>Transformamos tus ideas en soluciones de software de alto impacto.</p>
        <div className="cta-group">
          <a href="#about" className="btn">Conócenos</a>
          <a href="#contact" className="btn btn-outline">Contáctanos</a>
        </div>
      </div>
    </section>
  );
}
