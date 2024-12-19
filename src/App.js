import React from 'react';
import Header from './components/Header/Header';
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
                <About />
                <Features />
                <Tabs />
                <Testimonials />
                <Pricing />
                <Contact />
                <Faq />
            </main>
            <Footer />
        </div>
    );
};

export default App;
