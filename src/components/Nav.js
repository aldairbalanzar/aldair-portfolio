import React, { useState } from 'react';

const Nav = ({github, linkedin, navState, setNavState}) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNav = async() => {
        if(!isNavOpen){
            setIsNavOpen(true)
        } else {
            setIsNavOpen(false)
        }
    };

    return(
        <div>
            <nav className={isNavOpen ? 'nav-container-open' : 'nav-container-closed'}>
                <div onClick={handleNav}>
                    <i className={isNavOpen ? 'hamburger fa fa-times' : 'hamburger fa fa-bars'}></i>
                </div>
                <div className="ul-container">
                    <ul>
                        <li className="link" onClick={() => {setNavState(1)}}>Projects</li>
                        <li className="link" onClick={() => {setNavState(2)}}>About Me</li>
                        <li className="link" onClick={() => {setNavState(3)}}>Contact</li>
                        <div className="nav-icon-container">
                            <a href='https://www.linkedin.com/in/aldair-balanzar-390185177/' target='_blank' style={{margin: '0 3%'}}>
                                <i className="nav-icon fa fa-linkedin-square"></i>
                            </a>
                            <a href='https://github.com/aldairbalanzar' target='_blank' style={{margin: '0 3%'}}>
                                <i className="nav-icon fa fa-github"></i>
                            </a>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;