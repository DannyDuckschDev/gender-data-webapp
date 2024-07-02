// src/pages/Kontakt.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/contact.css';

const Contact: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<JSX.Element | string>('');

    const sanitizeInput = (input: string): string => {
        const element = document.createElement('div');
        element.innerHTML = input;
        return element.innerHTML;
    };

    const validateForm = () => {
        if (!name || !email || !message) {
            return 'All fields are required.';
        }
        return '';
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            setSuccess('');
            return;
        }

        const sanitizeName = sanitizeInput(name);
        const sanitizeEmail = sanitizeInput(email);
        const sanitizeMessage = sanitizeInput(message);

        console.log('Name: ', sanitizeName);
        console.log('Email: ', sanitizeEmail);
        console.log('Message: ', sanitizeMessage);

        //reset form
        setName('');
        setEmail('');
        setMessage('');

        setError('');
        setSuccess(
            <span>Your message has been submitted successfully. <span className="emoji">📨</span></span>
        )
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Get in touch with me through the Contact section! I value feedback an inquiries about the gender data app. Whether you habe questions and / or suggestions, the contact form is here to help. Simply fill out your name, email and message and I&#39;ll get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group half-width">
                        <label htmlFor="name">Name:</label>
                        <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        required 
                         />
                    </div>
                    <div className="form-group half-width">
                        <label htmlFor="email">Email:</label>
                        <input 
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                    id="message"
                    value={message}
                    onChange={(e : ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                    required></textarea>
                </div>
                <div className="form-group centered">
                    <button className="submit-button" type="submit">Send</button>
                </div>
            </form>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
        </div>
    );
}

export default Contact;