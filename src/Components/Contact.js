import React from 'react';
import Map from '../Images/map.jpg'

const Contact = () => {
    return (
        <div className="MainContact-css" id="Contact">
            <h3 className="ContactHeading-css">Contact</h3>
            <p className="ContactText-css">Lets get in touch and talk about your next project.</p>
            <form className="ContactForm-css">
                <input type="text" required="Name" placeholder="Name" className="Inp-css"/>
                <input type="email" required="Email" placeholder="Email" className="Inp-css"/>
                <input type="Subject" required="Subject" placeholder="Subject" className="Inp-css"/>
                <input type="Message" required="Message" placeholder="Comment" className="Inp-css"/>
                <button type="submit" className="btn-Contact">SEND MESSAGE</button>
            </form>
             <img  className="map-css" src={Map} alt="Map"/>
        </div>
    )
}

export default Contact
