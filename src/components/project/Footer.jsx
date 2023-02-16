import React from 'react';
import { FooterSection } from './project.style';

const Footer = () => {
    return (
        <>
          <FooterSection>
            <div className="row  parent">
                <div className="col-md-5">
                    <img className='image' src="images/logo.png" alt="" /><br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus, nesciunt quisquam provident amet
                         blanditiis eum animi natus quia.
                         Magni velit eius error architecto, rerum possimus iusto cupiditate minus harum.</p>
                </div>
                <div className="col-md-3">
                    <h3>Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Aanbod</li>
                        <li>Inruilen</li>
                        <li>Reperatie</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3>Aanbod</h3>
                    <ul>
                        <li>Elektrische fietsen</li>
                        <li>Elektirsche vouwfietsen</li>
                        <li>Transportfietsen</li>
                        <li>Stadsfietsen</li>
                        <li>Kinderfietsen</li>
                    </ul>
                </div>
            </div>

            <div className=" parent2">
                <div className="main row">
                <div className="col-md-6 mt-4"><h6>© 2022 Erik’s Tweewielers - Created by Squared Kiwi </h6></div>
                <div className="col-md-3 mt-4"><h6>Algemene voorwaarden</h6></div>
                <div className="col-md-3 mt-4"><h6>Privacy</h6 ></div>
                </div>
            </div>


            
        







            
            </FooterSection>  
        </>
    );
};

export default Footer;