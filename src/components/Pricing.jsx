import React from 'react';
import { Info } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="pricing" className="section bg-soft">
            <div className="container">
                <h2 className="section-title">Clear and <span className="highlight">Simple Pricing</span></h2>

                <div className="pricing-content">
                    <div className="pricing-card">
                        <div className="price-header">
                            <span className="price-label">Consultation starting at</span>
                            <h3 className="price-value">₹500</h3>
                            <p className="price-detail">(includes basic check-up and treatment plan)</p>
                        </div>

                        <div className="pricing-note">
                            <Info className="info-icon" size={20} />
                            <p>Exact costs depend on your treatment; we will explain all options and prices before starting.</p>
                        </div>

                        <a href="#appointment" className="btn btn-primary btn-full">Book Consult Now</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .bg-soft { background-color: var(--bg-soft); }
        
        .pricing-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .pricing-card {
          background: white;
          padding: 4rem;
          border-radius: 2rem;
          text-align: center;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
        }

        .price-label {
          color: var(--text-muted);
          font-weight: 500;
          font-size: 1.125rem;
        }

        .price-value {
          font-size: 4rem;
          font-weight: 800;
          color: var(--primary);
          margin: 1rem 0;
        }

        .price-detail {
          color: var(--text-muted);
          font-size: 1.125rem;
          margin-bottom: 2.5rem;
        }

        .pricing-note {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: var(--accent);
          padding: 1.5rem;
          border-radius: 1rem;
          text-align: left;
          margin-bottom: 2.5rem;
          color: var(--primary-hover);
          font-weight: 500;
        }

        .info-icon {
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .btn-full {
          width: 100%;
          padding: 1.25rem;
          font-size: 1.125rem;
        }

        @media (max-width: 600px) {
          .pricing-card {
            padding: 2.5rem 1.5rem;
          }
          .price-value {
            font-size: 3rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Pricing;
