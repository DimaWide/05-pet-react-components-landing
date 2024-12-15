import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './FullWidthSlider.scss';
import 'swiper/css';
import 'swiper/css/scrollbar';

const FullWidthSlider = () => {
    const [classAdded, setClassAdded] = useState(false);

    const slides = [
        {
            id: 3,
            imageUrl: '/images/blob-scene-haikei-2.svg',
            img_two: 'https://i.pinimg.com/736x/09/0c/1b/090c1b07880f424268131f9d48f1bf5a.jpg',
            heading: 'Discover New Horizons',
            description: 'Venture into the world of opportunities and explore endless possibilities.',
        },
        {
            id: 1,
            imageUrl: '/images/blob-scene-haikei.svg',
            img_two: 'https://i.pinimg.com/736x/90/ec/da/90ecda2f620413b4b1552c25ba373e51.jpg',
            heading: 'Embrace the Adventure',
            description: 'Life is a beautiful adventure, and it’s waiting for you to explore it.',
        },
        {
            id: 2,
            imageUrl: '/images/blob-scene-haikei-3.svg',
            img_two: 'https://i.pinimg.com/736x/7e/81/57/7e8157b0f76804ec566fb16801234aac.jpg',
            heading: 'Empower Your Journey',
            description: 'Take control of your life and start creating the future you’ve always dreamed of.',
        },
    ];

    useEffect(() => {
        setClassAdded(true);
    }, []);

    return (
        <div className={`cmp-slider ${classAdded ? 'loaded' : ''}`} id='home'>
            <div className="data-bg">
                <img src="/images/blob-scene-haikei.svg" alt="images" />
            </div>
            <div className="data-slider-container">
                <Swiper
                    speed={500}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    effect="fade"
                    pagination={{
                        clickable: true,
                        type: 'bullets',
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.id}>
                            <div className="data-slide">
                                <div className="data-container wcl-container">
                                    <div className="data-b1">
                                        <img src={slide.imageUrl || "/images/blob-scene-haikei.svg"} alt={`Слайд ${index + 1}`} />
                                    </div>

                                    <div className="data-row">
                                        <div className="data-col">
                                            <div className="data-content">
                                                <h2 className="data-title">{slide.heading}</h2>
                                                <p className="data-desc">{slide.description}</p>

                                                <div className="data-link">
                                                    <a href="#" className="cmp-button">
                                                        <span>Get Pack</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="data-col">
                                            <div className="data-img">
                                                <img src={slide.img_two} alt={`Слайд ${index + 1}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default FullWidthSlider;
