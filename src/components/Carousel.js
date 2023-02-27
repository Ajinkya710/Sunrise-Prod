import React from 'react';
import '../styles/Carousel.scss';
import { Link } from 'react-router-dom';
import ISPAHlogocropped from '../images/posts/ISPAH-logo-cropped.jpg';
import bubbles from '../images/posts/bubbles.jpg';
import puddles from '../images/posts/puddles.jpg';
import heightmorocco from '../images/posts/height-Morocco.jpg';
import swedendc from '../images/posts/matiinu-ramadhan-Ovmog0nQGZ0-unsplash-1-scaled.jpg';
import sunrise2021 from '../images/posts/Russia-data-collection-300x220.jpg';
import placementstudents from '../images/posts/ceced5fd-c14c-439c-bc43-4919cdff84b3-1024x651.jpg';
import ethiopiateam from '../images/posts/EthiopiaTeam.jpg';
import Carousel_comp from 'react-elastic-carousel';
import { Box } from '@mui/system';
const slideWidth = 30;
const _items = [
    {
        post: {
            title: 'Ethiopia\'s experience blog ',
            desc: 'Chalchisa Abdeta, PhD candidate and chief investigator of the SUNRISE Study Ethiopia, shared his country experience. The Ethiopia team began data collection in the phase 3 pilot study in April 2022.',
            image: ethiopiateam,
            category: 'Other Updates',
            date: '27/02/2023',
            url: '/posts/Ethiopia_Blog_post.html',
        },
    },
    {
        post: {
            title: 'SUNRISE PUBLICATIONS September-October 2021',
            desc: 'We are happy to announce that SUNRISE have had two articles published recently. The SUNRISE team in Bangladesh, led by Mohammad Sorowar Hossain, in collaboration with the UOW coordinating team, have published an article titled, International Study of 24-hour Movement Behaviors of Early Years (SUNRISE)',
            image: ISPAHlogocropped,
            category: 'Publications',
            date: '01/11/2021',
            url: '/posts/SeptOct2021Update.html',
        },
    },
    {
        post: {
            title: "SUNRISE NEWSLETTER SEPTEMBER/OCTOBER",
            desc: "The past two months brings with it a lot of good news from the SUNRISE team. On a very positive note, many countries are now seeing an ease in COVID-19 case numbers and as a result, restrictions on movements and activities are beginning to lift.",
            image: bubbles,
            category: 'Newsletter',
            date: '01/11/2021',
            url: '/posts/SeptOct2021Newsletter.html',
        },
    },
    {
        post: {
            title: 'SUNRISE July/August 2021 Update',
            desc: 'Although it has been a challenging time to conduct research, we are happy to share that many of our SUNRISE teams have been lucky enough to continue with their data collection safely and have persevered through the ever-changing restrictions brought about due to the pandemic. We currently have Sweden, Papua New Guinea, and the United States of Americacollecting data for the Main Study and Nigeria collecting data for the Phase 3 Pilot Study.',
            image: puddles,
            category: 'Newsletter',
            date: '09/09/2021',
            url: '/posts/JulyAug2021Update.html',
        },
    },
    {
        post: {
            title: 'SUNRISE Morocco',
            desc: 'This month, we spoke with the team in Morocco about their experience participating in the SUNRISE study during the COVID-19 Pandemic.',
            image: heightmorocco,
            category: 'Newsletter',
            date: '09/09/2021',
            url: '/posts/SUNRISEMorocco.html',
        },
    },
    {
        post: {
            title: 'Sweden Data Collection Update',
            desc: 'Sweden is the third country to commence data collection for the SUNRISE Main Study. The team reported that data collection is progressing nicely. Since their training in February 2021, they have visited 5 preschool centres for the SUNRISE Main Study and have successfully assessed over 115 children.',
            image: swedendc,
            category: 'Data collection',
            date: '01/06/2021',
            url: '/posts/SwedenDCUpdate.html',
        },
    },
    {
        post: {
            title: 'SUNRISE 2021 Update',
            desc: 'Firstly, the SUNRISE Coordinating Centre team would like to extend our deepest sympathies, condolences, and our support to our friends within the SUNRISE India team and all nations effected by COVID-19. Our thoughts are with you',
            image: sunrise2021,
            category: 'Other Updates',
            date: '01/06/2021',
            url: '/posts/Sunrise2021Update.html',
        },
    },
    {
        post: {
            title: 'SUNRISE Health & Society Placement Student Feedback',
            desc: 'For the past 13 weeks, we have been joined by University of Wollongong Health and Society placement students, Claudia Maddren and Hamad Aldughdugh. Below, read what Claudia and Hamad had to share regarding their experience. Thank you, Claudia and Hamad, for all your hard work!',
            image: placementstudents,
            category: 'Other Updates',
            date: '01/12/2020',
            url: '/posts/SUNRISEPlacementStudentFeedback.html',
        },
    },
];

const Carousel = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1400, itemsToShow: 3, itemsToScroll: 3 }
    ];

    return (
        // 
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <div className="carousel__container">
                    <ul>
                        <Carousel_comp breakPoints={breakPoints} >
                            {_items.map(item =>
                                <>
                                    <li className="carousel__slide-item" style={item.styles}>
                                        <Link to={item.post.url} target='_blank' rel="noreferrer">
                                            <div className="carousel__slide-item-img-link">
                                                <img src={item.post.image} alt={item.post.title} />
                                            </div></Link>
                                        <div className="carousel-slide-item__body">
                                            <hr style={{ marginTop: '5px' }} />
                                            <h4>{item.post.title}</h4>
                                            <p>{item.post.desc}</p>
                                            <hr style={{ marginTop: '5px' }} />
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p style={{ fontSize: '15px' }}>Category: {item.post.category}</p>
                                                <p style={{ fontSize: '15px' }}>Date Published: {item.post.date}</p>
                                            </div>
                                        </div>
                                    </li>
                                </>

                            )}
                        </Carousel_comp>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
