import React from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="container text-center">
        <h2 className="cta-title">Ready for a Healthier, Happier Smile?</h2>
        <p className="cta-subtitle">Call, WhatsApp or book your appointment and we'll be happy to help you.</p>

        <div className="cta-btns">
          <a href="#appointment" className="btn btn-primary btn-lg">
            <Calendar size={20} />
            Book Same-Day Appointment
          </a>
          <div className="cta-secondary">
            <a href="tel:+918220819524" className="btn btn-outline-white">
              <Phone size={18} />
              Call Now
            </a>
            <a href="https://wa.me/918220819524" className="btn btn-outline-white">
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="footer-mini">
          <div className="footer-brand">
            <div className="footer-logo-circle">
              <img src={logoImg} alt="logo" className="footer-logo" />
            </div>
            <div>
              <p className="footer-name">Niranjanraj Dental Care</p>
              <p className="footer-copyright">© 2024. All rights reserved.</p>
            </div>
          </div>
          <p>Designed for excellence in oral healthcare.</p>
        </div>
      </div>

      <style jsx>{`
        .final-cta {
          padding: 3rem 0 2rem;
          background: var(--primary);
          color: white;
        }

        .cta-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: white;
        }

        .cta-subtitle {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-btns {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        .cta-secondary {
          display: flex;
          gap: 1rem;
        }

        .btn-outline-white {
          border: 2px solid white;
          color: white;
          background: transparent;
        }

        .btn-outline-white:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .footer-mini {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 1.5rem;
          font-size: 0.85rem;
          opacity: 0.9;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          text-align: left;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer-logo-circle {
          width: 45px;
          height: 45px;
          background: white;
          border-radius: 50%;
          overflow: hidden;
          padding: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-logo {
          width: 85%;
          height: 85%;
          object-fit: contain;
        }

        .footer-name {
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .footer-copyright {
          font-weight: 400;
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .cta-title {
            font-size: 2.25rem;
          }
          .cta-secondary {
            flex-direction: column;
            width: 100%;
          }
          .cta-secondary .btn {
            width: 100%;
          }
          .footer-mini {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
