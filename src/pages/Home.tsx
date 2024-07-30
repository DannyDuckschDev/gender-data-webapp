// src/pages/Home.tsx
import React from "react";
import Hero from "../components/HeroElement";
import AboutUs from "../components/AboutUs";
import DisclaimerBanner from "../components/DisclaimerBanner";
import ScrollToTopButton from "../components/ScrollToTopButton";
import BlogPosts from "../components/BlogPosts";
import blogData from"../data/data.json";

// Functional component representing the Home page
const Home: React.FC = () => {
    return(
        <div>
            {/* Hero section */}
            <Hero />
            {/* About Us section */}
            <AboutUs />
            {/* Disclaimer banner with customizable text and button */}
            <DisclaimerBanner
                text="I strive to be as inclusive as possible and am always open to feedback. This project has just started, and I greatly appreciate your input on organizations, NGOs, apps, software, and other resources that could be included here."
                buttonText="To the contact form"
            />
            {/* Blog posts section with data passed as props */}
            <BlogPosts
                posts={blogData} />
            {/* Scroll to top button */}
            <ScrollToTopButton
                selector="body"
            />
            {/* Attribution for hero photo */}
            <div className="container-contact-copyright">
                <p>Hero Photo by <a href="https://unsplash.com/de/@missswiss">Ashley Piszek</a> on <a href="https://unsplash.com/de">Unsplash</a></p>
            </div>
        </div>
    );
};

export default Home;