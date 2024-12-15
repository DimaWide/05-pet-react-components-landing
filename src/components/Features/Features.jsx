import React from 'react';
import { FaRegLightbulb, FaRocket, FaShieldAlt } from 'react-icons/fa';
import './Features.scss';

const Features = () => {
    const features = [
        {
            icon: <FaRegLightbulb className="text-blue-500 text-5xl mx-auto mb-4" />,
            title: "Innovation",
            description: "Our product is built with the latest innovations to ensure high performance and reliability."
        },
        {
            icon: <FaRocket className="text-blue-500 text-5xl mx-auto mb-4" />,
            title: "Speed",
            description: "Experience unmatched speed and efficiency that boosts productivity and performance."
        },
        {
            icon: <FaShieldAlt className="text-blue-500 text-5xl mx-auto mb-4" />,
            title: "Security",
            description: "Our advanced security features protect your data and ensure peace of mind."
        }
    ];

    return (
        <section className="cmp-features ">
            <div className="wcl-container ">
                <h2 className="data-title">Our Features</h2>

                <p className="data-subtitle ">
                    Discover the benefits of our product designed to help you succeed.
                </p>

                <div className="data-list-out">
                    <div className="data-list ">
                        {features.map((feature, index) => (
                            <div key={index} className="data-item ">
                                <div className="data-item-icon">
                                    {feature.icon}
                                </div>

                                <h3 className="data-item-title ">{feature.title}</h3>

                                <div className="data-item-desc">
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
