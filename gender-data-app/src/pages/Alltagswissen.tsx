// src/pages/Alltagswissen.tsx
import React from "react";
import infoData from "../data/infoData";

const Alltagswissen: React.FC = () => {
    return (
        <div>
            <h1>Informationssammlung Alltagswissen</h1>
            <p>Tipps und Informationen für den Alltag.</p>
            <ul>
                {infoData.alltagswissen.map((item) => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Alltagswissen;