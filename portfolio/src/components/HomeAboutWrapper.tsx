"use client";

import React, { useRef, useState } from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import Navbar from "./Navbar";


//TODO: Implement IntersectionObserver so AboutSection fades in 
// when the name in HomeSection is not visible
const HomeAboutWrapper: React.FC = () => {
    const nameRef = useRef<HTMLDivElement>(null);

    return (
        <>
        <HomeSection nameRef={nameRef}/>
        <Navbar />
        <AboutSection nameRef={nameRef}/>
        </>
    );
};


export default HomeAboutWrapper;
