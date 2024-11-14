"use client";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, useInView } from "framer-motion";


interface HomeSectionProps {
    nameRef: React.RefObject<HTMLHeadingElement>;
};


const HomeSection: React.FC<HomeSectionProps> = ({ nameRef }) => {
    // const isInView = useInView(nameRef);

    // useEffect(() => {
    //     if (isInView) {
    //         console.log("I can see it!");
    //     } else {
    //         console.log("I can't see it!");
    //     }
    // }, [isInView]);

    return (
        <div className="relative h-[70vh] overflow-hidden relative z-0">
            <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
            objectFit: 'cover'
            }}
            >
                <source src="/videos/higher_res.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex flex-col md:items-center justify-center z-10">
                <div className="self-start text-left max-w-lg pl-4 md:mx-auto pr-5rem">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 break-words">Prama</h2>
                    <motion.h2 ref={nameRef} className="text-4xl md:text-5xl font-bold mb-4 break-words">Yudhistira</motion.h2>
                    <p className="text-2xl text-left mb-4">Computer Scientist</p>
                    <div className="flex space-x-4 ">
                        <a href="https://github.com/PramaYudhistira" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-3xl"/>
                        </a>
                        <a href="https://linkedin.com/in/pramayudhistira" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl"/>
                        </a>
                        <a href="https://linkedin.com/in/pramayudhistira" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-3xl"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HomeSection;
