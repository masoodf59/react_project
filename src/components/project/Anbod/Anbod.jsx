import React from 'react';
import Footer from '../Footer';
import { AnbodSection } from '../project.style';
import RightSide from './RightSide';
import Sidebar from './Sidebar';

const Anbod = () => {
    return (
        <>
          <AnbodSection>
            <div className="row">
                <div className="col-md-4">
                    <Sidebar/>
                </div>
                <div className="col-md-8">
                   <RightSide/>
                </div>
            </div>

            <div>
           
                <Footer/>
            </div>
            
            </AnbodSection>  
        </>
    );
};

export default Anbod;