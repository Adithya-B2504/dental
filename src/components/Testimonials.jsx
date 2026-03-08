import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Priya S.",
        rating: 5,
        text: "I was very nervous about my root canal, but Dr. Niranjanraj made it completely painless. The clinic is very clean and the staff is extremely polite. Everything was explained clearly before starting."
    },
    {
        name: "Rahul M.",
        rating: 5,
        text: "Best dental experience in Injambakkam. Transparent pricing and no hidden costs. The wisdom tooth extraction was quick and I recovered much faster than expected. Highly recommended!"
    },
    {
        name: "Anita R.",
        rating: 5,
        text: "Brought my daughter for her first dental check-up. The doctor was very gentle and patient with her. She's no longer afraid of dentists! Great hygiene protocols followed here."
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section bg-white">
            <div className="container">
                <h2 className="section-title">What Our <span className="highlight">Patients Say</span></h2>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div key={index} className="testimonial-card">
                            <Quote className="quote-icon" size={40} />
                            <div className="stars">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{t.text}"</p>
                            <h4 className="patient-name">{t.name}</h4>
                            <span className="source">Verified Google Review</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .bg-white { background-color: var(--bg-white); }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background: var(--bg-soft);
          padding: 3rem 2.5rem;
          border-radius: 1.5rem;
          position: relative;
          transition: transform 0.3s;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          background: white;
          box-shadow: var(--shadow);
        }

        .quote-icon {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: var(--primary);
          opacity: 0.1;
        }

        .stars {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }

        .testimonial-text {
          font-style: italic;
          color: var(--text-main);
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .patient-name {
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .source {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
