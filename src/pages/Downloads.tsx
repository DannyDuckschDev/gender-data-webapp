// src/pages/Downloads.tsx
import React from "react";

const Downloads: React.FC = () => {
    return (
        <div>
            <h1>Rund ums Thema Periode</h1>
            <p>Informationen und Rezepte für Menstruationsbeschwerden.</p>
            {/*Link zum Download für Periodentee Rezpet,
            Keyword "download" fehlt noch in a-tag*/}
            <button>Periodentee Rezept</button>
            <h2>Quellen zum Nachlesen</h2>
            <a href="">Gerstoffe in Himbeerblättern</a>
        </div>
    );
};

export default Downloads;