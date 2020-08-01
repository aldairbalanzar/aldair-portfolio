import React from 'react';
import List from './List'
import projects from '../text/projects_text';

const MyCarousel = ({handleModal, isModalOpen, carouselNum, setCarouselNum, setGithub}) => {
    const handleNum = (operation) => {
        if(operation === 'prev') {
            setCarouselNum(carouselNum - 1)
        }
        if(operation === 'next') {
            setCarouselNum(carouselNum + 1)
        }
        if(carouselNum === 1 && operation === 'prev') {
            setCarouselNum(1)
        }
        if(carouselNum === 4 && operation === 'next') {
            setCarouselNum(4)
        }
    }
    

    return(
        <div className={isModalOpen ? 'carousel-open' : 'carousel-close'}>
            <div className={isModalOpen ? 'slide-open' : 'slide-close'}>
                {carouselNum === 1 && <a href={projects[0].website_url} target="_blank"><img src={projects[0].img} className="slide-img"/></a>}
                {carouselNum === 2 && <a href={projects[1].website_url} target="_blank"><img src={projects[1].img} className="slide-img"/></a>}
                {carouselNum === 3 && <a href={projects[2].website_url} target="_blank"><img src={projects[2].img} className="slide-img"/></a>}
                {carouselNum === 4 && <a href={projects[3].website_url} target="_blank"><img src={projects[3].img} className="slide-img"/></a>}
            </div>

            {carouselNum === 1 && <List project={projects[0]} carouselNum={carouselNum} handleNum={handleNum} handleModal={handleModal}/>}
            {carouselNum === 2 && <List project={projects[1]} carouselNum={carouselNum} handleNum={handleNum} handleModal={handleModal}/>}
            {carouselNum === 3 && <List project={projects[2]} carouselNum={carouselNum} handleNum={handleNum} handleModal={handleModal}/>}
            {carouselNum === 4 && <List project={projects[3]} carouselNum={carouselNum} handleNum={handleNum} handleModal={handleModal}/>}

            <div className="more-info-container">   
                {carouselNum === 1 && <h3 className="more-info" onClick={() => {handleModal(projects[0])}}>More Info</h3>}
                {carouselNum === 2 && <h3 className="more-info" onClick={() => {handleModal(projects[1])}}>More Info</h3>}
                {carouselNum === 3 && <h3 className="more-info" onClick={() => {handleModal(projects[2])}}>More Info</h3>}
                {carouselNum === 4 && <h3 className="more-info" onClick={() => {handleModal(projects[3])}}>More Info</h3>}
            </div>
        </div>
    )
}

export default MyCarousel