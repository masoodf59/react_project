import React from 'react';
import HeroSection from './Hero_Section';
import ImageSection from './ImageSection';
import { Logo, NavWrapper } from './project.style';

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

            <HeroSection/>
            <ImageSection/>
        </>
    );
};

export default Header;