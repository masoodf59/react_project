import React from 'react';
import { CardImages } from './project.style';

const Pictures = [
    {
        Url: "https://pixabay.com/vectors/bike-bicycle-icon-sport-cycle-909834/",
        Name: "Stadsfietsen"
    },
    {
        Url: "https://pixabay.com/vectors/bicycle-wheels-transport-cycle-38028/",
        Name: "Elektrische fietsen"
    },
    {
        Url: "https://pixabay.com/illustrations/bicycle-basket-with-flowers-3758313/",
        Name: "Kinderfietsen"
    },
    {
        Url: "https://pixabay.com/photos/cycles-cycle-bike-wheel-2293976/",
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
                                    <div className="card">

                                        <img src={item.Url} alt="" />
                                        <span>{item.Name}</span>

                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>





            </CardImages>
        </>
    );
};

export default ImageSection;