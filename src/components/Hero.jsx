import React from 'react';
import { Phone, MessageCircle, Star, Calendar, ShieldCheck, Clock } from 'lucide-react';
import heroImg from '../assets/hero.png';
import logoImg from '../assets/logo.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-logo-badge">
            <div className="badge-logo-circle">
              <img src={logoImg} alt="logo" className="badge-logo" />
            </div>
            <span>Niranjanraj Dental Care</span>
          </div>
          <h1 className="hero-title">
            Where Comfort Meets <span className="highlight">Confident Smile</span>
          </h1>
          <p className="hero-subtitle">
            Our clinic is thoughtfully designed to provide a calm, hygienic, and modern space where patients feel relaxed from the moment they walk in.
          </p>

          <div className="hero-btns">
            <a href="#appointment" className="btn btn-primary btn-lg">
              <Calendar size={20} />
              Book Same-Day Appointment
            </a>
            <div className="hero-secondary-btns">
              <a href="tel:+918220819524" className="btn btn-outline">
                <Phone size={18} />
                Call Now
              </a>
              <a href="https://wa.me/918220819524" className="btn btn-outline btn-whatsapp">
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="trust-strip">
            <div className="trust-item">
              <Star size={18} className="star-icon" fill="currentColor" />
              <span>4.9⭐ Google rating</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={18} />
              <span>5+ years' experience</span>
            </div>
            <div className="trust-item">
              <Clock size={18} />
              <span>Same-day appointments</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img
              src={heroImg}
              alt="Modern Dental Clinic"
              className="hero-image"
            />
            <div className="floating-card">
              <div className="flex items-center gap-3">
                <div className="status-dot"></div>
                <span className="font-bold">Clinic Open Now</span>
              </div>
              <p className="text-small">Location: ECR, Injambakkam</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 6rem 0;
          background: linear-gradient(135deg, #fefce8 0%, #ffffff 100%);
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          color: var(--text-main);
        }

        .highlight {
          color: var(--primary);
        }

        .hero-logo-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: white;
          padding: 0.5rem 1.25rem 0.5rem 0.5rem;
          border-radius: 3rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--primary);
          border: 1px solid var(--border);
        }

        .badge-logo-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          overflow: hidden;
          background: white;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge-logo {
          width: 85%;
          height: 85%;
          object-fit: contain;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .hero-btns {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .hero-secondary-btns {
          display: flex;
          gap: 1rem;
        }

        .btn-lg {
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
          width: fit-content;
        }

        .trust-strip {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .star-icon {
          color: #fbbf24;
        }

        .hero-image-wrapper {
          position: relative;
        }

        .hero-image-container {
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .floating-card {
          position: absolute;
          bottom: 2rem;
          right: -1rem;
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-lg);
          border-left: 4px solid var(--primary);
        }

        .status-dot {
          width: 10px;
          height: 10px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.2);
        }

        .text-small {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        @media (max-width: 968px) {
          .hero {
            padding: 3rem 0;
          }
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-btns {
            align-items: center;
          }
          .hero-secondary-btns {
            flex-direction: column;
            width: 100%;
          }
          .btn-lg {
            width: 100%;
          }
          .hero-secondary-btns .btn {
            width: 100%;
          }
          .trust-strip {
            justify-content: center;
          }
          .floating-card {
            right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
