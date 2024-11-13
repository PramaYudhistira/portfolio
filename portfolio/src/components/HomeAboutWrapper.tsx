"use client";

import React, { useState } from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import Navbar from "./Navbar";


//TODO: Implement IntersectionObserver so AboutSection fades in 
// when the name in HomeSection is not visible
const HomeAboutWrapper: React.FC = () => {


    return (
        <>
        <HomeSection />
        <Navbar />
        <AboutSection />
        </>
    );
};


export default HomeAboutWrapper;
