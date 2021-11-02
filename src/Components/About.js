import React from 'react';
import Team2 from '../Images/team2.jpg'
import Team3 from '../Images/team3.jpg'
import Team4 from '../Images/team4.jpg'
import Team1 from '../Images/team1.jpg'
const About = () => {
    return (
        <div className="MainAbout-css" id="About">
            <h3 className="AboutHeading-css">About</h3>
            <p className="AboutText-css">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             <div className="Main-card-css">
            <div className="Card-css">
                <img className="img-css" src={Team2} alt="Team2"/>
               <h3 className="Card-title">John Doe</h3>
               <p className="Card-description">CEO And Founder</p>
               <p className="Card-paragraph">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button className="btn-css">Contact</button>
            </div>
            <div className="Card-css">
                <img className="img-css" src={Team1} alt="Team2"/>
               <h3 className="Card-title">Jane Doe</h3>
               <p className="Card-description">Architect</p>
               <p className="Card-paragraph">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button className="btn-css">Contact</button>
            </div>
            <div className="Card-css">
                <img className="img-css" src={Team3} alt="Team2"/>
               <h3 className="Card-title">Mike Ross </h3>
               <p className="Card-description">Architect</p>
               <p className="Card-paragraph">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button className="btn-css">Contact</button>
            </div>
            <div className="Card-css">
                <img className="img-css" src={Team4} alt="Team2"/>
               <h3 className="Card-title">Dan Star</h3>
               <p className="Card-description">Architect</p>
               <p className="Card-paragraph">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button className="btn-css">Contact</button>
                </div>
            </div>
        </div>
    )
}

export default About
