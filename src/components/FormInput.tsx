// src/component/FormInput.tsx

import React from "react";

// Interface defining the properties for the FormInput component
interface FormInputProps{
    id: string; // ID for the input field
    label: string; // Label text for the input field
    value: string; // Value of the input field
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Change event handler
    required?: boolean; // Optional prop to mark the input as required
}

// Functional component for rendering an input field with a label
const FormInput: React.FC<FormInputProps> = ({ id, label, value, onChange, required = false}) => (
    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} value={value} onChange={onChange} required={required} />
    </div>
);

export default FormInput;