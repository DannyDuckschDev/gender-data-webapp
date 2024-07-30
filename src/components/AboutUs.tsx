import React from 'react';
import '../styles/aboutUs.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox, faHandsHelping, faBrain } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
   
    return (
        <section className="about-section">
            {/* Introduction */}
            <div className="intro">
                <h2 className="section-title">About This Website</h2>
                <p className="intro-paragraph">
                    Creating a world where women*, LGBTQIA+ individuals, BIPOC, and other marginalized groups can thrive.
                    Empowering women*, non-binary individuals, LGBTQIA+ individuals, BIPOC, and those with disabilities with essential resources and support to navigate a patriarchal society.
                </p>
            </div>

            {/* Mission Statement */}
            <div className="mission-statement">
                <h3 className="section-subtitle">Mission Statement</h3>
                <p>
                    My mission is to support women*, non-binary individuals, LGBTQIA+ individuals, BIPOC (Black, Indigenous, and People of Color), and those with disabilities by providing vital information and support to navigate a patriarchal and androcentric society. I strive to create a safe space for all marginalized groups, offering resources that address the unique challenges they face daily. This includes practical advice for navigating healthcare, legal systems, workplaces, and public spaces, with the aim of empowering individuals to utilize the information effectively in their everyday lives.
                </p>
            </div>

            {/* Main Goals */}
            <div className="goals-container">
                <div className="goal-item item1">
                    <FontAwesomeIcon icon={faBrain} size="3x" />
                    <h3>Knowledge</h3>
                    <p>Sharing knowledge to help women*, non-binary individuals, LGBTQIA+ individuals, BIPOC, and those with disabilities make informed decisions and better navigate a world designed for cisgender men.</p>
                    <Link to="/knowledge" className="goal-button">Learn More</Link>
                </div>
                <div className="goal-item item2">
                    <FontAwesomeIcon icon={faHandsHelping} size="3x" />
                    <h3>Support</h3>
                    <p>Offering support and guidance for those facing various challenges, helping them stand up against discrimination and oppression.</p>
                    <Link to="/support" className="goal-button">Explore Support</Link>
                </div>
                <div className="goal-item item3">
                    <FontAwesomeIcon icon={faToolbox} size="3x" />
                    <h3>Empowerment</h3>
                    <p>Providing tools and resources to empower women*, non-binary individuals, LGBTQIA+ individuals, BIPOC, and those with disabilities in their daily lives.</p>
                    <Link to="/downloads" className="goal-button">Download Resources</Link>
                </div>
            </div>

            

            {/* Goals and Vision */}
            <div className="goals-vision">
                <h3 className="section-subtitle">Goals and Vision</h3>
                <p>
                    My long-term vision is to create a vibrant community where users can share tips, recipes, and recommendations. I aim to foster an environment of mutual support and empowerment, where collective knowledge is harnessed to improve the daily lives of all users.
                </p>
            </div>

        </section>
    );
};

export default AboutUs;
