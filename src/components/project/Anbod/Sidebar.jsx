import React from 'react';
import { SidebarSection } from '../project.style';

const Sidebar = () => {
 
    return (
        <>
            <SidebarSection>
                <div>
                    <h3>Filter</h3>
                    <hr />
                    <h4>Staat van fiets</h4>
                    <div className='items'>
                     <input type="checkbox" name="" id="" /><span>Nieuwe fiets</span><br/>
                     <input type="checkbox" name="" id="" /><span>Tweedehands fiets</span>


                    </div>
                    <h4>Merk fiets</h4>
                    <div className="items">
                    <input type="checkbox" name="" id="" /><span>Voorbeeld merk</span><br/>
                     <input type="checkbox" name="" id="" /><span>Voorbeeld merk</span><br/>
                     <input type="checkbox" name="" id="" /><span>Voorbeeld merk</span><br/>
                     <input type="checkbox" name="" id="" /><span>Voorbeeld merk</span><br/>
                     <input type="checkbox" name="" id="" /><span>Voorbeeld merk</span><br/>
                     <input type="checkbox" name="" id="" /><span>Voorbeeld merk</span><br/>
                     <input type="checkbox" name="" id="" /><span>Voorbeeld merk</span><br/>
                    </div>
                </div>
                <h4>Type fiets</h4>
                <div className="items">
                     <input type="checkbox" name="" id="" /><span>Elektrische fiets</span><br/>
                     <input type="checkbox" name="" id="" /><span>Stadsfiets</span><br/> 
                     <input type="checkbox" name="" id="" /><span>Kinderfietsen</span><br/> 
                     <input type="checkbox" name="" id="" /><span>Transport fietsen</span><br/> 
                </div>
                <h4>Type fiets</h4>
                <div className="items">
                <input type="checkbox" name="" id="" /><span>Elektrische fiets</span><br/>
                     <input type="checkbox" name="" id="" /><span>Stadsfiets</span><br/> 
                     <input type="checkbox" name="" id="" /><span>Kinderfietsen</span><br/> 
                     <input type="checkbox" name="" id="" /><span>Transport fietsen</span><br/> 
                </div>
                <h4>Type fiets</h4>
                <div className="items">
                     <input type="checkbox" name="" id="" /><span>Elektrische fiets</span><br/>
                     <input type="checkbox" name="" id="" /><span>Stadsfiets</span><br/> 
                     <input type="checkbox" name="" id="" /><span>Kinderfietsen</span><br/> 
                     <input type="checkbox" name="" id="" /><span>Transport fietsen</span><br/> 
                </div>
            </SidebarSection>
        </>
    );
};

export default Sidebar;