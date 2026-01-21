import React, { useState } from 'react';
import '../styles/Services.css';

const services = [
  {
    title: "Desarrollo Web",
    desc: "Sitios web modernos, rápidos y adaptables a cualquier dispositivo (Responsive Design).",
    icon: "💻",
    subItems: [
      { title: "Web Empresarial", desc: "Sitios corporativos robustos diseñados para fortalecer la presencia de tu marca y optimizar la comunicación con tus clientes." },
      { title: "Web Personal", desc: "Portafolios y blogs personalizados que destacan tu perfil profesional y te conectan con nuevas oportunidades." }
    ]
  },
  {
    title: "Aplicaciones Móviles",
    desc: "Apps nativas y multiplataforma para conectar con tus clientes en iOS y Android.",
    icon: "📱",
    subItems: [
      { title: "Asistencia Médica", desc: "Plataformas móviles para la gestión de citas, historiales y telemedicina, mejorando la atención al paciente." },
      { title: "Servicios Múltiples", desc: "Apps versátiles para la gestión de servicios on-demand, integrando pagos y seguimiento en tiempo real." }
    ]
  },
  {
    title: "Software a Medida",
    desc: "Soluciones empresariales personalizadas para optimizar tus procesos internos.",
    icon: "⚙️",
    subItems: [
      { title: "Sistemas de Inventarios (Conto-ERP)", desc: "Solución integral para el control de stock, facturación y contabilidad, adaptada a tus flujos de trabajo." },
      { title: "Centro Inteligente de Gestión Educativa (CIGE)", desc: "Plataforma completa para la administración académica, control de asistencia y comunicación escolar." },
      { title: "Control de Producción para la Industria Textil", desc: "Software especializado para monitorear procesos de tejeduría, optimizando tiempos y recursos." },
      { title: "Control de Producción para la Industria de Costura", desc: "Herramienta para el seguimiento de líneas de confección, control de calidad y eficiencia de operarios." }
    ]
  },
  {
    title: "Consultoría IT",
    desc: "Asesoramiento experto para transformar digitalmente tu negocio.",
    icon: "🚀",
    subItems: [
      { title: "Transformación Digital", desc: "Estrategias para digitalizar procesos manuales y modernizar la infraestructura tecnológica de tu empresa." },
      { title: "Auditoría de Sistemas", desc: "Evaluación exhaustiva de seguridad y rendimiento de tus sistemas actuales para detectar vulnerabilidades y mejoras." },

    ]
  }
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title center">Productos y <span className="highlight">Servicios</span></h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              onMouseEnter={() => setHoveredService(service)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              {/* Modal / Tooltip */}
              <div className={`service-modal ${hoveredService === service ? 'active' : ''}`}>
                <h4>{service.title} - Detalles</h4>
                <ul>
                  {service.subItems.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}:</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
