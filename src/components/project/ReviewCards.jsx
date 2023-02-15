import React from 'react';
import { ReviewCard } from './project.style';
import {BsStarFill} from "react-icons/bs";

const ReviewCards = () => {
    return (
        <>
        
        <ReviewCard>
<h2>Ervaringen van onze klanten</h2>
<h6>Lees de ervaring van mensen die u voor gingen</h6>

<div className="cards row">
    <div className="card col-md-3">
        <span><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odio. 
            Quasi numquam in maiores doloremque unde ea molestias est adipisci.<br/><br/>    <h5>Barbara Hooijer</h5></p>
        
    </div>
    <div className="card col-md-3">
    <span><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odio. 
            Quasi numquam in maiores doloremque unde ea molestias est adipisci <br/><br/>    <h5>Barbara Hooijer</h5></p>
           
    </div>
    <div className="card col-md-3">
        <span><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odio. 
            Quasi numquam in maiores doloremque unde ea molestias est adipisci.<br/><br/>    <h5>Barbara Hooijer</h5></p>
        
    </div>
    <div className="card col-md-3">
        <span><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, odio. 
            Quasi numquam in maiores doloremque unde ea molestias est adipisci.<br/><br/>    <h5>Barbara Hooijer</h5></p>
            
    </div>
</div>
            
        </ReviewCard>
        
        </>
    );
};

export default ReviewCards;