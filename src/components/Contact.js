import React from 'react';
import Nav from './Nav'

const Contact = ({github, linkedin, navState, setNavState}) => {
    return(
        <div>
            <Nav navState={navState} setNavState={setNavState} github={github} linkedin={linkedin}/>
            Contact
        </div>
    )
}

export default Contact