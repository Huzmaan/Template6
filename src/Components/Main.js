import React from 'react';
import Architects from '../Images/architect.jpg'


const Main = () => {
    return (
        <div className="Main-css" id="Home">
        <div className="backgroundImage-css">
            <img className="MainImg-css" src={Architects} alt="Architects" />
            <div className="MainHeading-css">
           <h1 className="Heading-css">
               <span><b className="MainHeadingText-css">BR</b></span>
               <span className="MainHeadingText2-css">Architects</span>
           </h1>
           </div>
             </div>            
        </div>
    )
}

export default Main
