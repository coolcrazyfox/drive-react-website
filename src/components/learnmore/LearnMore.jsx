import React from 'react';
import Hero from "../hero/Hero";
import Find from "../find/Find";
import Driver from "../driver/Driver";
import Luxury from "../luxury/Luxury";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const LearnMore = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Find/>
            <Driver/>
            <Luxury/>
            <Footer/>
        </div>
    );
};

export default LearnMore;
