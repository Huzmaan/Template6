import React from 'react'
import House2 from '../Images/house2.jpg'
import House5 from '../Images/house5.jpg'
import House3 from '../Images/house3.jpg'
import House4 from '../Images/house4.jpg'

const Projects = () => {
    return (
        <div className="MainProject-css" id="Projects">
            <h3 className="ProjectsHeading-css">Projects</h3>
            <div className="MainImage-css">
                {/* <div className="ImageDiv-css"> */}
                    <div className="container-css">
                        <p className="text-css"> Summer House</p>
                <img className="Image-css" src={House5} alt="House"/>
                </div>
                <div className="container-css">
                <p className="text-css"> Brick House</p>
                <img className="Image-css" src={House2} alt="House"/>                      
                </div>
                <div className="container-css">
                <p className="text-css"> Renovated</p>
                    <img className="Image-css" src={House3} alt="House"/>
                    </div>
                    <div className="container-css">
                    <p className="text-css"> Barn House</p>
                    <img className="Image-css" src={House4} alt="House"/>
                    </div>
                {/* </div> */}
                {/* <div className="ImageDiv-css"> */}
                    <div className="container-css">
                        <p className="text-css"> Summer House</p>
                <img className="Image-css" src={House2} alt="House"/>
                </div>
                <div className="container-css">
                    <p className="text-css"> Brick House </p>
                <img className="Image-css" src={House5} alt="House"/>
                </div>
                <div className="container-css">
                    <p className="text-css"> Barn House</p>
                <img className="Image-css" src={House4} alt="House"/>
                </div>
                <div className="container-css">
                    <p className="text-css"> Renovated</p>
                <img className="Image-css" src={House3} alt="House"/>
                </div>
                </div>
           </div>
        //  </div>
    )
}

export default Projects
