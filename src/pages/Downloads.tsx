import {useState} from "react";

const PeriodenteeeRezept: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <h2 onClick={() => setIsOpen(!isOpen)}>Periodenteee Rezept</h2>
            {isOpen && (
                <div className="accordion-content">
                    <h3>Zutaten</h3>
                    <ul>
                        <li>1 TL Kamillenblüten</li>
                        <li>1 TL Fenchelsamen</li>
                        <li>1 TL Schafgarbenkraut</li>
                    </ul>
                    <h3>Zubereitung</h3>
                    <p>Die Zutaten mit kochendem Wasser übergießen und 10 Minuten ziehen lassen. Abseihen und genießen.</p>
                </div>
            )}
        </div>
    );
}

export default PeriodenteeeRezept;