const services = [
    {
        title: "Desarrollo Web",
        desc: "Sitios web modernos, rápidos y adaptables a cualquier dispositivo (Responsive Design).",
        icon: "💻"
    },
    {
        title: "Aplicaciones Móviles",
        desc: "Apps nativas y multiplataforma para conectar con tus clientes en iOS y Android.",
        icon: "📱"
    },
    {
        title: "Software a Medida",
        desc: "Soluciones empresariales personalizadas para optimizar tus procesos internos.",
        icon: "⚙️"
    },
    {
        title: "Consultoría IT",
        desc: "Asesoramiento experto para transformar digitalmente tu negocio.",
        icon: "🚀"
    },
    {
        title: "Diseño UX/UI",
        desc: "Interfaces intuitivas y atractivas que enamoran a los usuarios.",
        icon: "🎨"
    },
    {
        title: "Cloud Computing",
        desc: "Implementación y gestión de servidores en la nube seguros y escalables.",
        icon: "☁️"
    }
];

export default function Services() {
    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title center">Productos y <span className="highlight">Servicios</span></h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .services {
          background: #111827; /* Slightly lighter than dark-bg */
        }

        .center {
          text-align: center;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .service-card {
          background: var(--card-bg);
          padding: 30px;
          border-radius: 12px;
          transition: transform 0.3s, background 0.3s;
          border: 1px solid rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
        }

        .service-card:hover {
          transform: translateY(-5px);
          background: rgba(40, 50, 70, 0.8);
          border-color: var(--primary);
        }

        .icon {
          font-size: 3rem;
          background: rgba(255,255,255,0.1);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .service-card h3 {
          font-size: 1.5rem;
          color: var(--text-main);
        }

        .service-card p {
          color: var(--text-muted);
        }
      `}</style>
        </section>
    );
}
