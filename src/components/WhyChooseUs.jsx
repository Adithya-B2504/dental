import React from 'react';
import { BadgeCheck, DollarSign, Clock, MapPin, Smile, Thermometer } from 'lucide-react';

const reasons = [
    { icon: <Thermometer />, text: "Painless treatments with modern equipment" },
    { icon: <BadgeCheck />, text: "Clear explanation of treatment and costs" },
    { icon: <DollarSign />, text: "Transparent pricing with no hidden charges" },
    { icon: <BadgeCheck />, text: "Strict hygiene and sterilization protocols" },
    { icon: <MapPin />, text: "Convenient Injambakkam location on East Coast Road" },
    { icon: <Smile />, text: "Friendly staff and comfortable clinic ambience" },
];

const WhyChooseUs = () => {
    return (
        <section className="section bg-white">
            <div className="container">
                <h2 className="section-title">Why Patients <span className="highlight">Choose Us</span></h2>

                <div className="reasons-grid">
                    {reasons.map((reason, index) => (
                        <div key={index} className="reason-item">
                            <div className="reason-icon-box">
                                {React.cloneElement(reason.icon, { size: 24 })}
                            </div>
                            <span className="reason-text">{reason.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .bg-white { background-color: var(--bg-white); }
        
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .reason-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: var(--bg-soft);
          border-radius: 1rem;
          transition: transform 0.2s;
        }

        .reason-item:hover {
          transform: translateX(10px);
          background: var(--accent);
        }

        .reason-icon-box {
          flex-shrink: 0;
          color: var(--primary);
        }

        .reason-text {
          font-weight: 600;
          color: var(--text-main);
          font-size: 1.125rem;
        }

        @media (max-width: 768px) {
          .reasons-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .reason-item {
            padding: 1.25rem;
          }
        }
      `}</style>
        </section>
    );
};

export default WhyChooseUs;
