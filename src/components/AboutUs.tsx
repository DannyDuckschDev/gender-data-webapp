import React, { useState } from 'react';
import '../styles/aboutUs.css'; // Import the CSS file for styling

const AboutUs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="about-section">
            {/* Introduction */}
            <div className="intro">
                <h2 className="section-title">About Us</h2>
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
                <div className="goal-item">
                    <img src="https://via.placeholder.com/64" alt="Empowerment Icon" />
                    <h3>Empowerment</h3>
                    <p>Providing tools and resources to empower women*, non-binary individuals, LGBTQIA+ individuals, BIPOC, and those with disabilities in their daily lives.</p>
                </div>
                <div className="goal-item">
                    <img src="https://via.placeholder.com/64" alt="Support Icon" />
                    <h3>Support</h3>
                    <p>Offering support and guidance for those facing various challenges, helping them stand up against discrimination and oppression.</p>
                </div>
                <div className="goal-item">
                    <img src="https://via.placeholder.com/64" alt="Education Icon" />
                    <h3>Education</h3>
                    <p>Sharing knowledge to help women*, non-binary individuals, LGBTQIA+ individuals, BIPOC, and those with disabilities make informed decisions and better navigate a world designed for cisgender men.</p>
                </div>
            </div>

            {/* Concrete Examples as Vertical Accordion */}
            <div className="examples-container">
                <div className={`example-card ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleAccordion(0)}>
                    <div className="example-header">
                        <img src="https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Practical Tips" />
                        <h4>Practical Tips</h4>
                    </div>
                    <div className="example-content">
                        <p>Advice on alleviating menstrual cycle symptoms, handling unsolicited explicit images, and using apps designed for personal safety.</p>
                    </div>
                </div>
                <div className={`example-card ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
                    <div className="example-header">
                        <img src="https://images.unsplash.com/photo-1547250936-e1426b362327?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Health" />
                        <h4>Health</h4>
                    </div>
                    <div className="example-content">
                        <p>Sharing information on managing hormonal balance and recommendations for trusted healthcare providers.</p>
                    </div>
                </div>
                <div className={`example-card ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
                    <div className="example-header">
                        <img src="https://via.placeholder.com/64" alt="Navigational Aid" />
                        <h4>Navigational Aid</h4>
                    </div>
                    <div className="example-content">
                        <p>Providing insights into navigating a world designed with biases, to help individuals find their way in an often unjust system.</p>
                    </div>
                </div>
            </div>

            {/* Goals and Vision */}
            <div className="goals-vision">
                <h3 className="section-subtitle">Goals and Vision</h3>
                <p>
                    My long-term vision is to create a vibrant community where users can share tips, recipes, and recommendations. I aim to foster an environment of mutual support and empowerment, where collective knowledge is harnessed to improve the daily lives of all users.
                </p>
            </div>

            {/* Projects and Initiatives */}
            <div className="projects-carousel">
                <div className="project-item">
                    <img src="https://via.placeholder.com/64" alt="Project Image" />
                    <h4>Project Title</h4>
                    <p>Project description and link to more information.</p>
                </div>
                {/* Repeat project-item as needed */}
            </div>
        </section>
    );
};

export default AboutUs;
