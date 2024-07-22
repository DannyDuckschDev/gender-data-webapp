import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css'; 

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-title">Empowering Women* Every Day</h1>
                    <p className="hero-subtitle">
                        Your go-to resource for vital information and support in a &nbsp;
                        <span className='explanationTip'>patriarchal
                            <span className='explanationTipText'>Relating to a social system in which men hold primary power.</span>
                        </span>
                        ,
                        <span className='explanationTip'> androcentric
                            <span className='explanationTipText'>Centered around male interests or a male perspective.</span>
                        </span>
                        &nbsp; society. Making your daily life easier and more informed.
                    </p>
                    <Link to="/knowledge" className="hero-button">Learn More</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
