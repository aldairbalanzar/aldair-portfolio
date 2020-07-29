import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import TableOfContents from './TableOfContents';
import Nav from './Nav';
import MyCarousel from './MyCarousel';
import greetings from '../text/greetings_text';

const Projects = ({navState, setNavState}) => {
    const github = 'https://github.com/aldairbalanzar';
    const [repo, setRepo] = useState(null)
    const [repo2, setRepo2] = useState(null)
    const linkedin = 'https://www.linkedin.com/in/aldair-balanzar-390185177/';
    const randNum = Math.round(Math.random() * 7);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [speechText, setSpeechText] = useState(greetings[randNum]);
    const [carouselNum, setCarouselNum] = useState(1)

    const handleModal = (project) => {
        if(!isModalOpen){
            console.log(project)
            if(project.github_repo.length > 1) {
                setRepo(project.github_repo[0])
                setRepo2(project.github_repo[1])
            }
            setRepo(project.github_repo[0])
            setSpeechText(project.description)
            setIsModalOpen(true)
        } else {
            setIsModalOpen(false)
        }
    }

    useEffect(() => {
        setIsModalOpen(true)
    }, [])

    return(
        <div className="practice">
            {/* <TableOfContents /> */}
            <Nav navState={navState} setNavState={setNavState} github={github} linkedin={linkedin}/>
            {isModalOpen && 
                <Modal
                handleModal={handleModal}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen} 
                speechText={speechText} 
                github={github}
                repo={repo}
                setRepo={setRepo}
                repo2={repo2}
                setRepo2={setRepo2}
                />}
                <MyCarousel 
                handleModal={handleModal} 
                isModalOpen={isModalOpen} 
                carouselNum={carouselNum} 
                setCarouselNum={setCarouselNum}
                />
        </div>
    )
}

export default Projects