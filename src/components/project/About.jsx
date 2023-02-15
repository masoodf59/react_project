import React from 'react';
import { AboutUs } from './project.style';

const About = () => {
    return (
        <>
           <AboutUs>
            <div className="row container main">
                <div className="col-md-5">
<img src="images/about.jpg" alt="" />
                </div>
                <div className="col-md-5 text">
                    <h2>Over Erik’s tweewielers</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod expedita debitis sit ex hic veniam numquam, autem,
                         iste adipisci eligendi iure nam reiciendis nulla, a harum voluptates temporibus laudantium.Lorem ipsum, dolor.a harum voluptates temporibus laudantium.Lorem ipsum, dolor </p>
                </div>
            </div>
            </AboutUs> 
        </>
    );
};

export default About;