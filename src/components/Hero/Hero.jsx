import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <section className="cmp-hero bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
            <div className="data-container wcl-container">
                <div className="data-row">
                    <div className="data-col">
                        <div className="data-info">
                            <div className="data-title">
                                <h1 className="text-5xl font-bold leading-tight mb-4">
                                    Welcome to <span className="">MyWebsite</span>
                                </h1>
                            </div>

                            <p className="text-lg mb-6">
                                Discover our amazing services and find out how we can help you achieve your goals.
                            </p>
                            <a
                                href="/contact"
                                className="bg-white text-blue-600 border-2 border-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>

                    <div className="data-col">
                        <div className="data-img">

                        </div>
                        {/* <div className="data-img">
                        <img src="https://plus.unsplash.com/premium_photo-1666580543682-c70e62b3d337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image" className="rounded-lg shadow-lg" />
                        </div> */}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
