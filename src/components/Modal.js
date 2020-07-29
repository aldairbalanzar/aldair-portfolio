import React from 'react';
import greetings from '../text/greetings_text'
import aldair_persona from '../media/aldair_persona.png';

const Modal = ({ isModalOpen, setIsModalOpen, speechText, github, repo, setRepo, repo2, setRepo2}) => {

    const handleModal = () => {
        setRepo(null)
        setRepo2(null)
        setIsModalOpen(false)
    }

    const githubGreet = greetings[greetings.length - 1]
    // console.log('githubGreet: ', githubGreet)
    return(
        <div className="modal-wrapper">
            <div className="modal-backdrop" onClick={handleModal}></div>
            <i className='modal-x fa fa-times' onClick={handleModal}></i>
            <div className="modal" onClick={handleModal}>
                <img className="aldair-persona" src={aldair_persona} alt="aldair in persona art style"/>
                <div className="speech-container" >
                    <h1>Aldair Balanzar</h1>
                    <p>{speechText} <a href={repo ? repo : github} target="_blank">
                    {repo
                    ? greetings[greetings.length - 2]
                    :greetings[greetings.length - 1]}
                    </a>
                    {repo2 && <a className="back-end-repo" href={repo2} target="_blank">{greetings[greetings.length - 3]}</a>}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Modal;