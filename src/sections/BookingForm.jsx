import React, { useState } from 'react';
import Section from '../components/Section';
import './BookingForm.css';

const BookingForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <Section id="booking" title="Work With Me" subtitle="CLIENT_SERVICES/SYSTEM_INTEGRATION">
                <div className="submission-message">
                    <h3>Request Received</h3>
                    <p>I will review your request and respond with scope, timeline, and pricing details.</p>
                </div>
            </Section>
        );
    }

    return (
        <Section id="booking" title="Work With Me" subtitle="CLIENT_SERVICES/SYSTEM_INTEGRATION">
            <form className="booking-form glass" onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="form-group">
                        <label>Service Type</label>
                        <select required>
                            <option value="">Select a service...</option>
                            <option value="security">Security Audit / Penetration Testing</option>
                            <option value="ai">AI System Development</option>
                            <option value="web">Premium Web Infrastructure</option>
                            <option value="consulting">Technical Consulting</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Budget Range</label>
                        <select required>
                            <option value="flexible">Flexible / Negotiable</option>
                            <option value="mid">$5k - $15k</option>
                            <option value="high">$15k+</option>
                            <option value="custom">Enterprise / Custom</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Timeline</label>
                        <select required>
                            <option value="urgent">Urgent (1-2 weeks)</option>
                            <option value="standard">Standard (4-6 weeks)</option>
                            <option value="long">Long-term / Retainer</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>Project Description</label>
                    <textarea placeholder="Tell me about your project, goals, and technical requirements..." required></textarea>
                </div>

                <div className="form-group">
                    <label>Preferred Contact Method</label>
                    <input type="text" placeholder="WhatsApp, Instagram, or Email" required />
                </div>

                <button type="submit" className="btn btn-primary glitch-text">Submit Request</button>
            </form>
        </Section>
    );
};

export default BookingForm;
