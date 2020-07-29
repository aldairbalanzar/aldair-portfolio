import React from 'react';

const List = ({project, handleNum, carouselNum}) => {
   
    return(
        <div>
            <div className="container">
                {carouselNum > 1 && <i className="fas fa-angle-left" onClick={()=>{handleNum('prev')}}></i>}
                <h1 className="project-name">{project.name}</h1>
                {carouselNum < 4 && <i className="fas fa-angle-right" onClick={()=>{handleNum('next')}}></i>}
            </div>
            <h3 className="list-title">Technologies used: </h3>
            <ul className="list">
                {project.technologies.map(tech => {
                    return(
                        <li key={tech}>{tech}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List