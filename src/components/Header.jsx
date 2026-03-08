import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="header">
      <div className="container header-content">
        <a href="/" className="logo-container">
          <div className="logo-circle">
            <img src={logoImg} alt="NK" className="header-logo" />
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-text">Niranjanraj</span>
            <span className="logo-sub">Dental Care</span>
          </div>
        </a>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:+918220819524" className="btn btn-outline btn-phone">
            <Phone size={18} />
            <span>+91 82208 19524</span>
          </a>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid var(--border);
          padding: 1rem 0;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .logo-circle {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          overflow: hidden;
          background: white;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .header-logo {
          width: 85%;
          height: 85%;
          object-fit: contain;
        }

        .logo-text-wrapper {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--primary);
        }

        .logo-sub {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .nav-list {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-main);
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .menu-toggle {
          display: none;
          background: none;
          color: var(--text-main);
        }

        @media (max-width: 968px) {
          .nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 2rem;
            border-bottom: 1px solid var(--border);
            display: none;
          }

          .nav.open {
            display: block;
          }

          .nav-list {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }

          .menu-toggle {
            display: block;
          }

          .btn-phone {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
