"use client";
import React, { useEffect } from "react";
import { motion, useInView } from "framer-motion";


interface AboutSectionProps {
    nameRef: React.RefObject<HTMLHeadingElement>;
}


const AboutSection: React.FC<AboutSectionProps> = ( { nameRef } ) => {
    const isInView = useInView(nameRef);

    // useEffect(() => {
    //     if (isInView) {
    //         console.log("I can see it!");
    //     } else {
    //         console.log("I can't see it!");
    //     }
    // }, [isInView]);

    return (
        <>
        <motion.div 
        className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 pt-4"
        initial={{ opacity: 0}}
        animate={{ opacity: isInView ? 0 : 1}}
        transition={{ duration: 0.75 }}>
            <div className="col-span-1">
                <h1 className="font-bold text-2xl md:text-3xl pl-5 pr-5">About Me</h1>
            </div>
            <div className="col-span-1">
                <p className="pl-5 pr-5 text-base md:text-lg">
                    👋 Hello there! I'm a computer science major at Georgia Tech. I don't label 
                    myself as a "full-stack developer", a "graphics engine programmer", 
                    or a "networking engineer". I believe that the skills I obtained at Georgia Tech 
                    have given me the ability to adapt to anything technical. And I believe that the computer 
                    science degree I'm pursuing helps me think as a <strong><em>computer scientist</em></strong>, and hence
                    I always like to think of myself as one. 
                </p>
                <br />
                <p className="pl-5 pr-5 text-base md:text-lg">
                    That being said, I do have particular interest in specific fields within computer science.
                    These include, but are not limited to,  computer systems, computer networking, algorithms, machine learning, computer graphics,
                    and combinatorics. I have experience in these fields thanks to the opportunity I have studying at Georgia Tech, and also through
                    personal projects and internships.
                </p>
                <br />
                <p className="pl-5 pr-5 text-base md:text-lg">
                    When I'm not coding, I do even MORE coding in competitive programming (I'm half joking 😅).
                    I also like to hang out with my friends and fraternity, train Brazilian Jiu Jitsu, lift weights, and 
                    camo grind on COD
                </p>
            </div>
            <div className="col-span-1">
                <h1 className="font-bold text-lg md:text-lg pl-5 pr-5">Related Organizations</h1>
            </div>
            <div>

            </div>
        </motion.div>
        </>
    )
};


export default AboutSection;
