import React from 'react'

const Header = () => {
    return (
        <div className="MainHeader-css">
            <div className="HeaderText-css">
              <a className="Link-css" href="#Home">  <strong>BR</strong> <span>Architects</span></a> 
            </div>
            <div className="Header-css">
                <a className="Link-css" href="#Projects">Projects</a>
                <a className="Link-css" href="#About">About</a>
                <a className="Link-css" href="#Contact">Contact</a>
            </div>
        </div>
    )
}

export default Header
