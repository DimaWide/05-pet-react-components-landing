import React from 'react';
import { FaBullseye, FaEye, FaStar } from 'react-icons/fa';
import './About.scss';

const About = () => {
    const sections = [
        {
            title: "Our Mission",
            content: "Our mission is to deliver high-quality products that meet the needs of our customers and exceed their expectations.",
            icon: <FaBullseye className="icon" />
        },
        {
            title: "Our Vision",
            content: "We envision a world where our services make a significant impact on our customers' lives and the communities we serve.",
            icon: <FaEye className="icon" />
        },
        {
            title: "Our Values",
            content: "Integrity, Innovation, and Excellence are the core values that guide our operations and our relationships with clients.",
            icon: <FaStar className="icon" />
        }
    ];

    return (
        <section className="cmp-about" id="about">
            <div className="data-container wcl-container">
                <h2 className="data-title">
                    About Us
                </h2>

                <p className="data-subtitle">
                    We are a leading company in our industry, dedicated to providing the best services to our customers.
                </p>

                <div className="data-list">
                    {sections.map((section, index) => (
                        <div key={index} className="data-item">
                            <div className="data-item-b1">
                                <div className="data-item-icon">{section.icon}</div>
                                <h3 className="data-item-title">
                                    {'0' + (index + 1)}. {section.title}
                                </h3>
                            </div>
                            <div className="data-item-desc">
                                <p>

                                    {section.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
