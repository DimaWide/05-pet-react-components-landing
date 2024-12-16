import React, { useState } from 'react';
import tabsData from '../../assets/Tabs.json';  
import './Tabs.scss';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { tabs } = tabsData;

    const activeTabData = tabs.find(tab => tab.id === activeTab);

    return (
        <section className='cmp-tabs' id='learn-more'>
            <div className='data-container wcl-container'>
                <h2 className='data-title'>Learn More</h2>

                {/* Tab Buttons */}
                <div className='data-nav'>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`data-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                        >
                            {React.createElement(require('react-icons/fa')[tab.icon], { className: "icon" })}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className='data-tab'>
                    {activeTabData.content.title && (
                        <h3 className='data-tab-title'>{activeTabData.content.title}</h3>
                    )}

                    {activeTabData.content.text && (
                        <p className='data-tab-text'>{activeTabData.content.text}</p>
                    )}

                    {activeTabData.content.list && (
                        <ul className='data-tab-list'>
                            {activeTabData.content.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}

                    {activeTabData.content.testimonials && (
                        <div className='testimonials'>
                            {activeTabData.content.testimonials.map((testimonial, index) => (
                                <blockquote key={index} className='blockquote'>
                                    “{testimonial.quote}” – {testimonial.author}
                                </blockquote>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Tabs;
