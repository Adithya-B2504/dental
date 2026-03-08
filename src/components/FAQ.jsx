import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "Is the treatment painful?",
        answer: "No, we prioritize patient comfort above all else. We use modern anesthesia techniques and gentle methods to ensure most treatments, including root canals and extractions, are virtually painless. Our goal is to make your visit as stress-free as possible."
    },
    {
        question: "Do you accept walk-in patients?",
        answer: "While we recommend booking an appointment to minimize your wait time, we do accept walk-ins for dental emergencies. If you're in severe pain, visit us immediately and we will do our best to see you as soon as possible."
    },
    {
        question: "How do I book an appointment?",
        answer: "You can book an appointment by calling us directly, sending a WhatsApp message, or using the online form on this website. Once you submit the form, our team will call you back within 10 minutes during working hours to confirm your slot."
    },
    {
        question: "What payment methods are available?",
        answer: "We accept all major payment methods including Cash, UPI (GPay, PhonePe, etc.), Credit Cards, and Debit Cards. We believe in transparent pricing and will provide you with a detailed estimate before starting any treatment."
    },
    {
        question: "Do you treat children?",
        answer: "Yes! We specialize in children's dentistry and provide a very gentle, friendly environment for our little patients. We focus on building positive dental habits and ensuring children have a fear-free experience from their very first visit."
    },
    {
        question: "What should I expect on my first visit?",
        answer: "During your first visit, we perform a comprehensive dental check-up and discuss your dental history and concerns. We will explain any findings clearly, show you X-rays if needed, and create a personalized treatment plan with transparent costs."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="section bg-soft">
            <div className="container">
                <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        >
                            <div className="faq-question">
                                <span>{faq.question}</span>
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .bg-soft { background-color: var(--bg-soft); }
        
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: var(--primary);
        }

        .faq-question {
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 700;
          color: var(--text-main);
          font-size: 1.1rem;
          gap: 1rem;
        }

        .faq-item.open .faq-question {
          color: var(--primary);
          background: var(--accent);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
          background: white;
        }

        .faq-item.open .faq-answer {
          max-height: 300px;
          padding: 0 2rem 2rem;
        }

        .faq-answer p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 1.05rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }

        @media (max-width: 600px) {
          .faq-question {
            padding: 1.25rem;
            font-size: 1rem;
          }
          .faq-answer {
            padding: 0 1.25rem 1.25rem;
          }
        }
      `}</style>
        </section>
    );
};

export default FAQ;
