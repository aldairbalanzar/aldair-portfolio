import React from 'react';
import Nav from './Nav'

const AboutMe = ({github, linkedin, navState, setNavState}) => {
    return(
        <div className="about-me">
            <Nav navState={navState} setNavState={setNavState} github={github} linkedin={linkedin}/>
            <div className="about-me-content">
                <header>
                    <h1>Aldair Balanzar</h1>
                    <img src="" alt=""/>
                </header>

                <section>
                    <p>
                        Good day! my name is Aldair Balanzar and I am full-stack developer based in Charlotte, NC with an ambition for excellence in the work that I partake in. I attended the Lambda School Full-Stack Web-Development curriculum and now continue my learning through self-taught methods by working on side projects on my free time. My background is in education and for almost 4 years I served as an Educational Interpreter for pre-school aged children at special education schools. 
                    </p>
                </section>

                <br/>

                <section>
                    <p>
                        When I am not sharpening my programming skills, I enjoy spending my free time by doing activities with my family such as watching a Studio Ghibli movie, drawing and painting, playing videogames, watching football/soccer, or just making a mix for my daughter to dance to. I believe that spending time to take one's mind off work is also important for one's well-being.
                    </p>
                </section>

                <br/>

                <section>
                    <p>
                        I hope to be able to contribute with my skillset to projects that facilitate people's lives around the world. Thank you for taking from your time to look over my portfolio. 
                    </p>
                </section>
            </div>
        </div>
    )
}

export default AboutMe