// src/pages/Contact.tsx
import React from 'react';
import useContactForm from '../hooks/useContactForm';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import '../styles/contact.css';

const Contact: React.FC = () => {
    // Using custom hook to manage form state and handlers
    const {
        name,
        email,
        message,
        error,
        success,
        handleChange,
        handleSubmit
    } = useContactForm();

    return (
        <div>
            {/* Banner section with image */}
            <div className="banner-container">
                <img src="https://images.unsplash.com/photo-1509085702214-9178b0941e25?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="An open mailbox with different letters which are touched by moody sunlight." className='banner-image' />
            </div>
            {/* Contact form container */}
            <div className="contact-container">
                <h1>Contact Me</h1>
                <p>Get in touch with me through the Contact section! I value feedback an inquiries about the gender data app. Whether you habe questions and / or suggestions, the contact form is here to help. Simply fill out your name, email and message and I&#39;ll get back to you as soon as possible.</p>
                {/* Contact form */}
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <FormInput 
                            id="name"
                            label="Name"
                            value={name}
                            onChange={handleChange}
                            required 
                        />
                        <FormInput 
                            id="email"
                            label="Email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <FormTextarea
                        id="message"
                        label="Message"
                        value={message}
                        onChange={handleChange}
                        required
                    />
                    <div className="form-group centered">
                        <button className="submit-button" type="submit">Send</button>
                    </div>
                </form>
                {/* Display error message if any */}
                {error && <p className="error-message">{error}</p>}
                {/* Display success message if form is submitted successfully */}
                {success && <p className="success-message">{success}</p>}
            </div>
            {/* Copyright container */}
            <div className="container-contact-copyright">
                <p>Photo by <a href="https://unsplash.com/de/@californong">Nong</a> on <a href="https://unsplash.com/de">Unsplash</a></p>
            </div>
        </div>
        
    );
};

export default Contact;
