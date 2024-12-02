"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import OrganizationsCard from "./OrganizationsCard";


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
        className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 pt-4 opacity-0"
        initial={{ opacity: 0}}
        animate={{ opacity: isInView ? 0 : 1}}
        transition={{ duration: 0.75 }}>
            <div className="col-span-1 mt-10 md:mt-20">
                <h1 className="font-bold text-2xl lg:text-4xl md:text-3xl pl-5 pr-5">About Me</h1>
            </div>
            <div className="col-span-1 mt-10 md:mt-20">
                <p className="pl-5 pr-5 text-base md:text-xl">
                    👋 Hello there! I'm a computer science major at Georgia Tech. I don't label 
                    myself as a "full-stack developer", a "graphics engine programmer", 
                    or a "networking engineer". I believe that the skills I obtained at Georgia Tech 
                    have given me the ability to adapt to anything technical. And I believe that the computer 
                    science degree I'm pursuing helps me think as a <strong><em>computer scientist</em></strong>, and hence
                    I always like to think of myself as one. 
                </p>
                <br />
                <p className="pl-5 pr-5 text-base md:text-xl">
                    That being said, I do have particular interest in specific fields within computer science.
                    These include, and are not limited to,  computer systems, computer networking, algorithms, machine learning, computer graphics,
                    and combinatorics. I have experience in these fields thanks to the opportunity I have studying at Georgia Tech, and also through
                    personal projects and internships.
                </p>
                <br />
                <p className="pl-5 pr-5 text-base md:text-xl">
                    When I'm not coding, I do even MORE coding in competitive programming (I'm half joking 😅).
                    I also like to hang out with my friends and fraternity, train Brazilian Jiu Jitsu, lift weights, and 
                    camo grind on COD.
                </p>
            </div>
            <div className="col-span-1 mt-10 md:mt-20">
                <h1 className="font-bold text-lg md:text-3xl ml-5 mr-5">Relevant Organizations</h1>
            </div>
            <div className="col-span-1 mt-5 md:mt-20 flex flex-wrap ml-5 mr-5">
                <OrganizationsCard
                    imageSrc="gold_sga_logo.png"
                    title="SGA"
                    description="I worked on the career fair queueing system and Course Critique, which has 20,000 monthly active users."
                    bgColor="bg-white"
                />
                <OrganizationsCard
                    imageSrc="grand_challenges_logo.jpg"
                    title="Grand Challenges"
                    description="Worked on a group to find a problem solving phone addiction in children"
                    bgColor="bg-white"
                />
                <OrganizationsCard
                    imageSrc="OIT_logo.jpg"
                    title="OIT"
                    description="I worked as a tech support agent for wreck techs."
                    bgColor="bg-oit"
                />
                <OrganizationsCard
                    imageSrc="vip_logo.jpg"
                    title="VIP"
                    description="Helped make a Game in Unity, and currently in the AI-Based discovery and innovation team"
                    bgColor="bg-white"
                />

                
            </div>

        </motion.div>
        </>
    )
};


export default AboutSection;
