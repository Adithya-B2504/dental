import React from 'react';
import doctorImg from '../assets/doctor.png';
import { CheckCircle2 } from 'lucide-react';

const MeetDentist = () => {
  const points = [
    "Experienced in painless root canals and wisdom tooth extractions",
    "Special interest in cosmetic dentistry and smile design",
    "Explains every step clearly to reduce fear and anxiety"
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container meet-dentist-container">
        <div className="doctor-image-wrapper">
          <div className="doctor-image-container">
            <img src={doctorImg} alt="Dr. Niranjanraj" className="doctor-image" />
            <div className="doctor-badge">
              <span className="name">Dr. Niranjanraj</span>
              <span className="role">Senior Dentist / BDS</span>
            </div>
          </div>
        </div>

        <div className="doctor-details">
          <h2 className="section-title text-left">Meet Your <span className="highlight">Dentist</span></h2>
          <p className="doctor-bio">
            From preventive care to smile transformations, your comfort and confidence are our top priorities! We provide gentle, family-friendly dental treatments in Injambakkam and along East Coast Road.
          </p>

          <ul className="doctor-points">
            {points.map((point, index) => (
              <li key={index} className="point-item">
                <CheckCircle2 className="check-icon" size={24} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-num">5000+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">5+ Years</span>
              <span className="stat-label">Clinical Practice</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">98%</span>
              <span className="stat-label">Painless Treatment Success</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-white { background-color: var(--bg-white); }
        .text-left { text-align: left; }
        .text-left::after { margin: 0.75rem 0 0; }

        .meet-dentist-container {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 5rem;
          align-items: center;
        }

        .doctor-image-container {
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .doctor-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .doctor-badge {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 1.25rem;
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .doctor-badge .name {
          font-weight: 800;
          font-size: 1.125rem;
          color: var(--text-main);
        }

        .doctor-badge .role {
          font-size: 0.875rem;
          color: var(--primary-hover);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .doctor-bio {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }

        .doctor-points {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .point-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.125rem;
          font-weight: 500;
          color: var(--text-main);
        }

        .check-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1.2fr;
          gap: 2rem;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stat-num {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
        }

        .stat-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        @media (max-width: 968px) {
          .meet-dentist-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 4rem;
          }
          .text-left { text-align: center; }
          .text-left::after { margin-left: auto; margin-right: auto; }
          .doctor-points { align-items: flex-start; text-align: left; }
          .about-stats { grid-template-columns: 1fr; gap: 2rem; text-align: center; }
          .doctor-image-wrapper { max-width: 400px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

export default MeetDentist;
