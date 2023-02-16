import React from 'react';
import About from './About';
import CardSection from './CardSection';
import Contact from './Contact';

import HeroSection from './Hero_Section';
import ImageSection from './ImageSection';
import ReviewCards from './ReviewCards';
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <HeroSection />
            <ImageSection />
            <CardSection />
            <ReviewCards />
            <About />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;