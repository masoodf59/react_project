import React from 'react';
import { ContactUs } from './project.style';
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Contact = () => {
    return (
        <>
            <ContactUs>

                <div className="row container parent">
                    <div className="col-md-6">
                        <h2>We staan voor u klaar!</h2>
                        <p>Wij staan voor u klaar. Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
                            sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.</p>
                        <h3>Contact informatie</h3>
                        <ul>
                            <li><span><AiOutlineMail /></span> info@erikstweewielers.nl</li>
                            <li>  <span><FiPhone /></span> 022-80108803</li>
                            <li><span><GoLocation /></span>Boerhaaveplein 1a 1611 EP Bovenkarspel</li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <form action="" className='bg-light'>
                            <h4>Contact formulier</h4>
                            <div className="mt-5">
                                <input type="text" className='form-control' placeholder='enter user name..' />
                            </div>
                            <div className="mt-5">
                                <input type="text" className='form-control' placeholder='enter user name..' />
                            </div>
                            <div className="mt-5">
                                <textarea name="" className='form-control' id="" cols="20" rows="7" placeholder='enter description..'></textarea>
                            </div>
                            <div className="mt-5">
                                <button className='btn '>Bericht verzenden</button>
                            </div>
                        </form>
                    </div>
                </div>


            </ContactUs>
        </>
    );
};

export default Contact;