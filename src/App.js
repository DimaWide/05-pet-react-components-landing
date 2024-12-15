import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import Pricing from './components/Pricing/Pricing';
import Tabs from './components/Tabs/Tabs';
import FullWidthSlider from './components/FullWidthSlider/FullWidthSlider';


const App = () => {
    return (
        <div>
            <Header />

            <main className="">
            <FullWidthSlider />
                {/* <Hero /> */}
                <About />
                <Features />
                <Tabs />
                <Testimonials />
                <Pricing />
                <Contact />
                <Faq />
            </main>

            <Footer />

            {/* <footer className="bg-gray-800 text-white text-center py-4">
                <p>© 2024 MyWebsite. All rights reserved.</p>
            </footer> */}
        </div>
    );
};

export default App;
