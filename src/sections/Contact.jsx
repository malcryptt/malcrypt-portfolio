import React from 'react';
import Section from '../components/Section';
import './Contact.css';

const Contact = () => {
    return (
        <Section id="contact" title="Contact">
            <div className="contact-grid">
                <div className="contact-item">
                    <label>WhatsApp</label>
                    <a href="https://wa.me/2349164703407" target="_blank" rel="noopener noreferrer">09164703407</a>
                </div>
                <div className="contact-item">
                    <label>Instagram</label>
                    <a href="https://www.instagram.com/devluxe_tech/#" target="_blank" rel="noopener noreferrer">@devluxe_tech</a>
                </div>
                <div className="contact-item">
                    <label>Email</label>
                    <a href="mailto:mal4crypt404@gmail.com">mal4crypt404@gmail.com</a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
