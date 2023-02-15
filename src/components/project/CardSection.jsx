import React from 'react';
import { Cards } from './project.style';
import { TbArrowsRightLeft } from "react-icons/tb";
import {BsTools } from "react-icons/bs";

const CardSection = () => {
    return (
        <>
            <Cards>


                <h2>Diensten</h2>
                <span >We helpen u graag verder en staan voor u klaar</span>
                <div className="row  cards">
                    <div className=" col-md-5 card p-3 m-3">
                        <div className='icon'><TbArrowsRightLeft /></div>
                        <h5>Inruilen</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Natus, deserunt vitae?
                            Asperiores quia nulla error voluptates, nemo in ea amet.Asperiores quia nulla error voluptates</p>
                    </div>
                    <div className=" col-md-5 card m-3 p-3">
                    <div className='icon'><BsTools /></div>
                        <h5>Reparatie</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Natus, deserunt vitae?
                            Asperiores quia nulla error voluptates, nemo in ea amet.Asperiores quia nulla error voluptates</p>
                    </div>
                </div>



            </Cards>
        </>
    );
};

export default CardSection;