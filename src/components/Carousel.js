import React from 'react';
import '../styles/Carousel.scss';
import { Link } from 'react-router-dom';

const slideWidth = 30;
const _items = [
    {
        post: {
            title: 'SUNRISE PUBLICATIONS September-October 2021',
            desc: 'We are happy to announce that SUNRISE have had two articles published recently. The SUNRISE team in Bangladesh, led by Mohammad Sorowar Hossain, in collaboration with the UOW coordinating team, have published an article titled, International Study of 24-hour Movement Behaviors of Early Years (SUNRISE)',
            image: 'https://sunrise-study.com/wp-content/uploads/2021/11/ISPAH-logo-cropped.jpg',
            category: 'Newsletter',
            date: '01/11/2021',
            url:'./posts/SeptOct2021Update.html',
        },
    },
    {
        post: {
            title: "SUNRISE NEWSLETTER SEPTEMBER/OCTOBER",
            desc: "The past two months brings with it a lot of good news from the SUNRISE team. On a very positive note, many countries are now seeing an ease in COVID-19 case numbers and as a result, restrictions on movements and activities are beginning to lift.",
            image: 'https://sunrise-study.com/wp-content/uploads/2021/11/bubbles.jpg',
            category: 'Newsletter',
            date: '01/11/2021',
            url:'./posts/SeptOct2021Update',
        },
    },
    {
        post: {
            title: 'SUNRISE July/August 2021 Update',
            desc: 'Although it has been a challenging time to conduct research, we are happy to share that many of our SUNRISE teams have been lucky enough to continue with their data collection safely and have persevered through the ever-changing restrictions brought about due to the pandemic. We currently have Sweden, Papua New Guinea, and the United States of Americacollecting data for the Main Study and Nigeria collecting data for the Phase 3 Pilot Study.',
            image: 'https://sunrise-study.com/wp-content/uploads/2021/09/puddles.jpg',
            category: '',
            date: '',
            url:'./posts/SeptOct2021Update',
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        post: _items[idx].post,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = { ...item.styles };
            break;
        case length:
            break;
        default:
            item.styles = { ...item.styles, opacity: 0 };
            break;
    }

    return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className="carousel__slide-item-img-link">
                <Link to={item.post.url} target='_blank'><img src={item.post.image} alt={item.post.title} /></Link>
            </div>
            <div className="carousel-slide-item__body">
                <hr style={{marginTop:'5px'}}/>
                <h4>{item.post.title}</h4>
                <p>{item.post.desc}</p>
                <hr style={{marginTop:'5px'}}/>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p style={{ fontSize: '15px' }}>Category: {item.post.category}</p>
                    <p style={{ fontSize: '15px' }}>Date Published: {item.post.date}</p>
                </div>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
