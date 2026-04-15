import React from 'react';
import Section from '../components/Section';
import './BookingForm.css';

const BookingForm = () => {
    const services = [
        { name: "Security Audit / Red Team", color: "#ff4d4d" },
        { name: "Website Development", color: "#4dff88" },
        { name: "App Development", color: "#ff9933" },
        { name: "AI Engineering", color: "#33ccff" },
        { name: "Frontend / UI", color: "#a64dff" }
    ];

    return (
        <Section id="booking" title="Book a Session" subtitle="STRATEGIC_CONSULTATION/PROJECT_INTAKE">
            <div className="booking-container">
                <div className="booking-info">
                    <p className="booking-desc">
                        Whether you need a web product built from scratch, a security assessment, AI tooling, or a quick consult — reach out and let's talk scope, timeline, and rates.
                    </p>
                    <ul className="service-list">
                        {services.map((service, idx) => (
                            <li key={idx} className="service-item">
                                <span className="service-dot" style={{ backgroundColor: service.color }}></span>
                                {service.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>YOUR NAME</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>YOUR EMAIL</label>
                            <input type="email" placeholder="you@email.com" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>SERVICE CATEGORY</label>
                        <select>
                            <option>Select a category</option>
                            {services.map((service, idx) => (
                                <option key={idx} value={service.name}>{service.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>PROJECT DETAILS</label>
                        <textarea placeholder="Briefly describe what you need — scope, timeline, budget, or anything relevant."></textarea>
                    </div>
                    <button type="submit" className="btn btn-submit">
                        SEND REQUEST <span>→</span>
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default BookingForm;
