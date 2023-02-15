import React from 'react';
import { CardImages } from './project.style';

const Pictures = [
    {
        Url: "images/img1.jpg",
        Name: "Stadsfietsen"
    },
    {
        Url: "images/img1.jpg",
        Name: "Elektrische fietsen"
    },
    {
        Url: "images/img2.jpg",
        Name: "Kinderfietsen"
    },
    {
        Url: "images/img2.jpg",
        Name: "Transport fietsen"
    }
]

const ImageSection = () => {
    return (
        <>
            <CardImages>
                <div className="imagehead">
                    <h2>Waar bent u naar opzoek?</h2>
                    <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>


                    <div className="pics">
                       
                        {
                            Pictures.map((item) => {
                                return (
                                    <>
                                    <div className="cardmain">
                                    <div className="card">

                                        <img src={item.Url} alt="" />
                                        <span>{item.Name}</span>

                                    </div>
                                    </div>
                                    </>
                                )
                            })
                        }

                    
                    </div>
                    <div className="buttons">
                    <button className='btn '>Bekijk gehele aanbod</button>
                    </div>
                </div>





            </CardImages>
        </>
    );
};

export default ImageSection;