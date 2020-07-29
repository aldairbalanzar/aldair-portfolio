import React from 'react';

const TableOfContents = ({setNavState}) => {
    return(
        <div className="contents-container">
            <ul className="contents">
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
    )
}

export default TableOfContents