// src/pages/Home.tsx
import React from "react";
import Hero from "../components/HeroElement";
import AboutUs from "../components/AboutUs";

const Home: React.FC = () => {
    return(
        <div>
            <Hero />
            <AboutUs />


            <div className="container-contact-copyright">
                <p>Hero Photo by <a href="https://unsplash.com/de/@missswiss">Ashley Piszek</a> on <a href="https://unsplash.com/de">Unsplash</a></p>
                
            </div>
        </div>
    );
};

export default Home;