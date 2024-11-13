"use client";
import React, { useEffect } from "react";


const AboutSection: React.FC = () => {


    useEffect(() =>{
        const observer = new IntersectionObserver(
            (entries) => {

            }
        );
    });

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 pt-4">
            <div className="col-span-1">
                <h1 className="font-bold text-2xl pl-5 pr-5">About Me </h1>
            </div>
            <div className="col-span-1">
                <p className="pl-5 pr-5">I'm a computer science major at Georgia Tech. I don't label 
                    myself as a "full-stack developer", a "graphics engine programmer", 
                    or a "networking engineer". I believe that the skills I obtained at Georgia Tech 
                    have given me the ability to adapt to anything technical. And I believe that the computer 
                    science degree I'm pursuing helps me think as a <strong><em>computer scientist</em></strong>. 
                </p>
            </div>
        </div>
        </>
    )
};


export default AboutSection;
