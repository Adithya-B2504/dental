import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AppointmentForm from './components/AppointmentForm';
import MeetDentist from './components/MeetDentist';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import LocationSection from './components/LocationSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import { Phone, MessageCircle } from 'lucide-react';

function App() {
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBottomBar(true);
      } else {
        setShowBottomBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <MeetDentist />
        <AppointmentForm />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <FAQ />
        <LocationSection />
        <FinalCTA />
      </main>

      {/* Sticky Bottom Bar for Mobile */}
      <div className={`mobile-bottom-bar ${showBottomBar ? 'visible' : ''}`}>
        <a href="tel:+918220819524" className="bottom-btn call">
          <Phone size={20} />
          Call
        </a>
        <a href="https://wa.me/918220819524" className="bottom-btn whatsapp">
          <MessageCircle size={20} />
          WhatsApp
        </a>
      </div>

      <style jsx>{`
        .mobile-bottom-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          display: none;
          grid-template-columns: 1fr 1fr;
          padding: 0.75rem;
          gap: 0.75rem;
          box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
          z-index: 1000;
          transform: translateY(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-bottom-bar.visible {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .mobile-bottom-bar {
            display: grid;
          }
          main {
            padding-bottom: 4rem;
          }
        }

        .bottom-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem;
          border-radius: 0.5rem;
          font-weight: 700;
          text-decoration: none;
          color: white;
        }

        .call { background-color: #7a8215; }
        .whatsapp { background-color: #25d366; }
      `}</style>
    </div>
  );
}

export default App;
