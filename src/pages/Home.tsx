// src/pages/Home.tsx
import React from "react";
import Hero from "../components/HeroElement";
import AboutUs from "../components/AboutUs";
import DisclaimerBanner from "../components/DisclaimerBanner";
import ScrollToTopButton from "../components/ScrollToTopButton";
import BlogPosts from "../components/BlogPosts";
import blogData from"../data/data.json";

const Home: React.FC = () => {
    return(
        <div>
            <Hero />
            <AboutUs />
            <DisclaimerBanner
                text="I strive to be as inclusive as possible and am always open to feedback. This project has just started, and I greatly appreciate your input on organizations, NGOs, apps, software, and other resources that could be included here."
                buttonText="To the contact form"
            />
            <BlogPosts
                posts={blogData} />
            <ScrollToTopButton
                selector="body"
            />
            <div className="container-contact-copyright">
                <p>Hero Photo by <a href="https://unsplash.com/de/@missswiss">Ashley Piszek</a> on <a href="https://unsplash.com/de">Unsplash</a></p>
            </div>
        </div>
    );
};

export default Home;