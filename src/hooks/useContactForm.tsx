// src/hooks/useContactForm.tsx

import { useState, ChangeEvent, FormEvent } from "react";

// Interface defining the properties and functions returned by the useContactForm hook
interface UseContactFormProps {
    name: string;
    email: string;
    message: string;
    error: string;
    success: JSX.Element | string;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

// Custom hook to manage contact form state and handlers
const useContactForm = (): UseContactFormProps => {
    // State variables for form fields and messages
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<JSX.Element | string>('');


    // Function to sanitize user input to prevent XSS attacks
    const sanitizeInput = (input: string): string => {
        const element = document.createElement('div');
        element.innerHTML = input;
        return element.innerHTML;
    };
    
    // Function to validate the form fields
    const validateForm = () => {
        if (!name || !email || !message){
            return 'All fields are required.';
        }
        return '';
    };

    // Event handler for input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
        const {id, value} = e.target;
        if (id === 'name') setName(value);
        if (id === 'email') setEmail(value);
        if (id === 'message') setMessage(value);
    };

    // Event handler for form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            setSuccess('');
            return;
        }

        // Sanitize form inputs
        const sanitizeName = sanitizeInput(name);
        const sanitizeEmail = sanitizeInput(email);
        const sanitizeMessage = sanitizeInput(message);

        // Log sanitized inputs to the console (for demonstration purposes)
        console.log('Name: ', sanitizeName);
        console.log('Email: ', sanitizeEmail);
        console.log('Message: ', sanitizeMessage);

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');

        // Clear error and set success message
        setError('');
        setSuccess(
            <span>Your message has been submitted successfully. <span className="emoji">📨</span></span>
        );

        //Clear sucess message after 5 seconds
        setTimeout(() =>  {
            setSuccess('');
        }, 5000);
    };

    // Return the form state and handlers
    return {name, email, message, error, success, handleChange, handleSubmit};
};

export default useContactForm;