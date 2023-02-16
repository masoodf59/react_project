import React from 'react';

import { Logo, NavWrapper } from './project.style';

import { NavLink } from 'react-router-dom';

const Header = () => {
    const navlink = ({ isActive }) => {
        return {
            border: isActive ? '1px solid black' : 'none',
            
           
        }
    }
    return (
        <>
            <NavWrapper>
                <Logo><img className='logopic' src="images/logo.png" alt="" />
                    <ul>
                        <NavLink className="navlink" to="/" style={navlink}><li>Home</li></NavLink>
                        <NavLink className="navlink" to="/anbod" style={navlink}><li>Anbod</li></NavLink>
                        <NavLink className="navlink" ><li>Reparatie</li></NavLink>
                        <NavLink className="navlink" ><li>Inruilen</li></NavLink>
                        <li>
                            <button className='btn'>Name contact ap</button>
                        </li>
                    </ul>
                </Logo>
            </NavWrapper>




        </>
    );
};

export default Header;