import React from 'react';
import { Sparkles, Activity, Smile, Baby, Shield, Target } from 'lucide-react';

const services = [
    {
        icon: <Target />,
        title: "Root Canal & Crowns",
        description: "Save infected teeth with painless root canals and durable zirconia crowns.",
    },
    {
        icon: <Activity />,
        title: "Wisdom Tooth Removal",
        description: "Safe, comfortable removal of impacted wisdom teeth with quick recovery tips.",
    },
    {
        icon: <Sparkles />,
        title: "Braces & Clear Aligners",
        description: "Teeth straightening options for teens and adults, including nearly invisible aligners.",
    },
    {
        icon: <Smile />,
        title: "Scaling & Polishing",
        description: "Regular cleaning to remove tartar, stains and keep gums healthy.",
    },
    {
        icon: <Baby />,
        title: "Children’s Dentistry",
        description: "Gentle care for kids to build positive, fear-free dental experiences.",
    },
    {
        icon: <Shield />,
        title: "Cosmetic Dentistry",
        description: "Teeth whitening, veneers and smile makeovers to enhance your smile.",
    },
];

const Services = () => {
    return (
        <section id="services" className="section bg-soft">
            <div className="container">
                <h2 className="section-title">Treatments <span className="highlight">We Offer</span></h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                {React.cloneElement(service.icon, { size: 32 })}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <a href="#appointment" className="service-link">
                                Book consult for this
                                <span className="arrow">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .bg-soft { background-color: var(--bg-soft); }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2.5rem;
          border-radius: 1.5rem;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: var(--accent);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          margin-bottom: 1.5rem;
        }

        .service-title {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .service-desc {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .service-link {
          color: var(--primary);
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: gap 0.2s;
        }

        .service-link:hover {
          gap: 0.75rem;
          color: var(--primary-hover);
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Services;
