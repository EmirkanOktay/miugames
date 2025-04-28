import React from 'react';
import Navbar from '../CompenentsEng/Navbar';
import Section1 from '../CompenentsEng/Section1';
import Footer from '../CompenentsEng/Footer';
import ContactUs from '../CompenentsEng/ContactUs';
import AboutUs from '../CompenentsEng/AboutUs';
import Games from '../CompenentsEng/Games';

function Index() {
    return (
        <div>
            <Navbar />
            <Section1 />
            <AboutUs />
            <Games />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default Index;
