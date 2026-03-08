import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Easy to Reach in <span className="highlight">Injambakkam</span></h2>

        <div className="location-grid">
          <div className="location-info">
            <div className="info-block">
              <div className="info-icon"><MapPin size={24} /></div>
              <div className="info-text">
                <h3>Our Clinic</h3>
                <p>2/34, East Coast Rd, opposite to Cholamandel Artist Village, Injambakkam, Chennai - 600115</p>
                <span className="near-tag">Located on ECR with easy access and nearby parking.</span>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon"><Clock size={24} /></div>
              <div className="info-text">
                <h3>Working Hours</h3>
                <div className="hours-list">
                  <div className="hour-row"><span>Mon - Sat:</span> <span>10:00 AM - 8:30 PM</span></div>
                  <div className="hour-row"><span>Sunday:</span> <span>10:00 AM - 1:00 PM (By Appt)</span></div>
                </div>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon"><Phone size={24} /></div>
              <div className="info-text">
                <h3>Contact Us</h3>
                <p>+91 82208 19524</p>
                <p>+91 44 2449 0XXX</p>
              </div>
            </div>
          </div>

          <div className="map-placeholder">
            <div className="map-ui">
              <div className="map-marker">
                <div className="marker-dot"></div>
                <div className="marker-label">Niranjanraj Dental Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-white { background-color: white; }
        
        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: start;
        }

        .info-block {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .info-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .info-text h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-main);
        }

        .info-text p {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .near-tag {
          display: inline-block;
          font-size: 0.9rem;
          background: var(--accent);
          color: var(--primary);
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          font-weight: 600;
        }

        .hour-row {
          display: flex;
          justify-content: space-between;
          max-width: 300px;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .map-placeholder {
          background: #eef2f6;
          height: 450px;
          border-radius: 2rem;
          overflow: hidden;
          position: relative;
          border: 1px solid var(--border);
        }

        .map-ui {
          width: 100%;
          height: 100%;
          background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
          background-size: 20px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .marker-dot {
          width: 16px;
          height: 16px;
          background: #ef4444;
          border-radius: 50%;
          box-shadow: 0 0 0 10px rgba(239, 68, 68, 0.2);
          animation: pulse 2s infinite;
        }

        .marker-label {
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 700;
          box-shadow: var(--shadow);
          font-size: 0.9rem;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 968px) {
          .location-grid {
            grid-template-columns: 1fr;
          }
          .map-placeholder {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default LocationSection;
