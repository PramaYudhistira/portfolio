"use client";

import React, { useRef, useState } from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import Navbar from "./Navbar";
import TimelineMain from "./Timeline/TimelineMain";


const HomeAboutWrapper: React.FC = () => {
    const nameRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null); 

    //TODO: perhaps instead of using the reference, use the boolean value 
    //      could fix the problem of rendering automatically then fading out
    return (
        <>
        <HomeSection nameRef={nameRef}/>
        <Navbar experienceRef={experienceRef} />
        <AboutSection nameRef={nameRef}/>
        <TimelineMain experienceRef={experienceRef}/>
        </>
    );
};


export default HomeAboutWrapper;
