// src/components/FormTextarea.tsx

import React from "react";

// Interface defining the properties for the FormTextarea component
interface FormTextareaProps{
    id: string; // ID for the textarea
    label: string; // Label text for the textarea
    value: string; // Value of the textarea
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Change event handler
    required?: boolean; // Optional prop to mark the input as required
}

// Functional component for rendering an textarea with a label
const FormTextarea: React.FC<FormTextareaProps> = ({id, label, value, onChange, required = false}) => (
    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <textarea id={id} value={value} onChange={onChange} required={required}></textarea>
    </div>
);

export default FormTextarea;