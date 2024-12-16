import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.scss';

const testimonialsData = [
    { name: "Jane Doe", photo: "https://ui-avatars.com/api/?name=John+Doe&size=128&background=random", rating: 5, feedback: "This service exceeded my expectations!" },
    { name: "John Smith", photo: "https://ui-avatars.com/api/?name=John+Smith&size=128&background=random", rating: 4, feedback: "Great experience overall." },
    { name: "Alice Johnson", photo: "https://ui-avatars.com/api/?name=Alice+Johnson&size=128&background=random", rating: 5, feedback: "Absolutely amazing!" },
    { name: "Michael Lee", photo: "https://ui-avatars.com/api/?name=Michael+Lee&size=128&background=random", rating: 4, feedback: "Very satisfied with the results." },
    { name: "Emily White", photo: "https://ui-avatars.com/api/?name=Emily+White&size=128&background=random", rating: 5, feedback: "Top-notch service and support!" },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        autoplay: false,
        // autoplaySpeed: 5000,
        beforeChange: (current, next) => setActiveIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <section className="cmp-testimonials" id='what-our-clients-say'>
            <div className="data-container wcl-container">
                <h2 className="data-title">What Our Clients Say</h2>

                <div className="data-slider">
                    <Slider {...settings}>
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="data-item ">
                                <div
                                    className={`data-item-inner bg- ${index === activeIndex ? 'opacity-100 scale-105' : 'opacity-50 scale-95'
                                        }`}
                                >
                                    <div className="data-item-img">
                                        <img
                                            src={testimonial.photo}
                                            alt={testimonial.name}
                                        />
                                    </div>

                                    <h3 className="data-item-title">{testimonial.name}</h3>

                                    <div className="data-item-desc">
                                        {testimonial.feedback}
                                    </div>

                                    <div className="data-item-rate flex text-yellow-400 mb-2">
                                        {Array.from({ length: testimonial.rating }, (_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
