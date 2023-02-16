import React from 'react';
import { RightSideSection } from '../project.style';
import Cards from './CardData';
import { Link } from 'react-router-dom';

const RightSide = () => {
    return (
        <>
            <RightSideSection>

                <h2>Alle fietsen</h2>
                {
                    Cards.map(({image,title,price,desc,para}) => {
                        return (
                            <>
                                <div className="card ">
                                    <div className="row">
                                        <div className="col-md-3">
                                         <Link to="/detail"><img src={image} alt="" /></Link>  
                                        </div>
                                        <div className="col-md-9">
                                            <div className="card_body">
                                                <li><h6>{title}</h6></li>
                                                <li><span>{price}</span></li>
                                                <li>{desc}</li>
                                                <li><p>{para} </p></li>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }


            </RightSideSection>
        </>
    );
};

export default RightSide;