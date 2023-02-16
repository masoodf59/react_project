import React from 'react';
import Footer from '../Footer';
import { ProductDetail } from '../project.style';
import ImageSlider from './ImageSlider';


const Detail = () => {
    return (
        <>
            <ProductDetail>
                <div className="head">
                Homepage > Aanbod alle fietsen > Elektrische BIKKEL fiets
                </div>
                <div className="detailparent">
                <div className="row container mx-auto">
                    <div className="col-md-6">
                        <ImageSlider/>
                    </div>  
                    <div className="col-md-6">
                        <h2>Elektrische BIKKEL fiets</h2>
                        <span>€500</span><br/>
                        <span>Tweedehands - Merk - Framemaat - Accucapaciteit</span>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur qui nisi ipsum maxime quod officia neque
                            laudantium dolores voluptates architecto. Rem deserunt cupiditate unde porro! Culpa pariatur, provident ducimus
                            molestias excepturi tenetur deleniti itaque dolorem veritatis,
                            aperiam soluta atque quia deserunt eum repellendus facere saepe nulla. Voluptate consequuntur fugit velit.</p>

                        <h3>Garantie informatie</h3>
                        <p>Wij streven ernaar onze fietsen perfect af te leveren. Toch kan het gebeuren dat een fiets defect raakt, wij hanteren de volgende garantie voorwaarden.</p>

                        <div className="row">
                            <div className="col-md-5">
                                <span>Aankoopbedrag</span>
                                <li>€500-€1000 </li>
                                <li>€1000 - €1500 </li>
                                <li> €1500</li>
                            </div>
                            <div className="col-md-5">
                                <span>Garantietermijn</span>
                                <li>1 maand garantie </li>
                                <li>3 maanden garantie</li>
                                <li>6 maanden garantie</li>
                            </div>
                        </div>

                        <h5>Heeft u interesse in deze fiets?</h5>
                        <p>U kunt ons altijd direct bereiken per telefoon op 022-8234010.
                             U kunt ons ook een bericht sturen via het contactformulier.</p>

                             <button className='btn btn-warning'>Stuur een bericht</button>
                    </div>
                </div>
                </div>

                <div>
                    <Footer/>
                </div>


            </ProductDetail>
        </>
    );
};

export default Detail;