import React from 'react';
import { Background } from './project.style';

const HeroSection = () => {
    return (
        <>
        <Background>
            
                <div className="bg">
                    <div className="content">
                    <h1>Voor de bestie & voordeligste deals</h1>
                    <div className=" main">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/>
                         Deleniti alias soluta aperiam minus laborum sed provident reiciendis
                          omnis nobis odit.Lorem.<br/> ipsum, dolor sit amet  consectetur adipisicing elit
                         Deleniti alias soluta aperiam <br/> minus laborum sed provident reiciendis
                          omnis nobis odit.</p>

                         </div>
                         <div className="buttons">
                         <button className='btn b1'>Bekijik anbod</button>
                         <button className='btn b2'>Name contact ap</button>
                         </div>
                         </div>
                </div>
           
        </Background>
        </>
    );
};

export default HeroSection;