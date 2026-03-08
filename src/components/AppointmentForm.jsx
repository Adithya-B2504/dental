import React, { useState } from 'react';
import { Send } from 'lucide-react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        reason: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}, we will contact you soon on ${formData.phone} to confirm your appointment for ${formData.date}!`);
        setFormData({ name: '', phone: '', date: '', time: '', reason: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="appointment" className="section bg-soft">
            <div className="container">
                <div className="form-card">
                    <div className="form-info">
                        <h2 className="section-title text-left">Book Your Appointment <span className="highlight">in 30 Seconds</span></h2>
                        <p className="form-subtitle">Share your details and we'll call you within 10 minutes during working hours.</p>

                        <div className="privacy-badge">
                            <span className="shield-icon">🛡️</span>
                            <p>We respect your privacy. Your details are only used for appointment confirmation.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="appointment-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input
                                type="text" id="name" name="name" required
                                placeholder="John Doe"
                                value={formData.name} onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                                type="tel" id="phone" name="phone" required
                                placeholder="+91 9XXXX XXXXX"
                                value={formData.phone} onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="date">Preferred Date</label>
                                <input
                                    type="date" id="date" name="date"
                                    value={formData.date} onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="time">Preferred Time</label>
                                <input
                                    type="time" id="time" name="time"
                                    value={formData.time} onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="reason">Reason for Visit</label>
                            <select name="reason" id="reason" value={formData.reason} onChange={handleChange}>
                                <option value="">Select a reason</option>
                                <option value="Tooth pain">Tooth pain</option>
                                <option value="Cleaning">Cleaning</option>
                                <option value="Braces/Aligners">Braces/Aligners</option>
                                <option value="Kids dental">Kids dental</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full">
                            <Send size={18} />
                            Request Callback
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>{`
        .bg-soft { background-color: var(--bg-soft); }
        .text-left { text-align: left; }
        .text-left::after { margin: 0.75rem 0 0; }

        .form-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          background: white;
          padding: 3rem;
          border-radius: 2rem;
          box-shadow: var(--shadow-lg);
        }

        .form-subtitle {
          font-size: 1.125rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .privacy-badge {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--accent);
          border-radius: 1rem;
          font-size: 0.9rem;
          color: var(--primary-hover);
        }

        .appointment-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        label {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-main);
        }

        input, select {
          padding: 0.875rem 1rem;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        input:focus, select:focus {
          border-color: var(--primary);
          outline: none;
        }

        .btn-full {
          width: 100%;
          margin-top: 1rem;
          padding: 1rem;
        }

        @media (max-width: 968px) {
          .form-card {
            grid-template-columns: 1fr;
            padding: 2rem;
            gap: 2.5rem;
          }
          .section-title {
            text-align: center;
          }
          .section-title::after {
            margin-left: auto;
            margin-right: auto;
          }
          .form-subtitle {
            text-align: center;
          }
        }
      `}</style>
        </section>
    );
};

export default AppointmentForm;
