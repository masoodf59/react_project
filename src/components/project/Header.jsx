import React from 'react';
import About from './About';
import CardSection from './CardSection';
import Contact from './Contact';
import Footer from './Footer';
import HeroSection from './Hero_Section';
import ImageSection from './ImageSection';
import { Logo, NavWrapper, ReviewCard } from './project.style';
import ReviewCards from './ReviewCards';

const Header = () => {
    return (
        <>
            <NavWrapper>
                <Logo><img src="images/logo.png" alt="" />
                    <ul>
                        <li>Home</li>
                        <li>Anbod</li>
                        <li>Reparatie</li>
                        <li>Inruilen</li>
                        <li>
                            <button className='btn'>Name contact ap</button>
                        </li>
                    </ul>
                </Logo>
            </NavWrapper>

            <HeroSection />

            <ImageSection />
            <CardSection />
            <ReviewCards />
            <About />
            <Contact/>


            <Footer/>


        </>
    );
};

export default Header;