"use client";
import React from "react";
//this class is not fully implemented yet, will have to deal with a lot of css and I don't feel like doing it rn lol

interface OrganizationsCardAltProps {
    imageSrc: string;
    title: string;
    description: string;
    darkImage: boolean
};


const OrganizationsCardAlt: React.FC<OrganizationsCardAltProps> = ( { imageSrc, title, description, darkImage } ) => {


    return (
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow
        hover:shadow-xl hover:shadow-black/30 w-1/2 md:w-1/4">
            <div className="h-96 w-1/2 w-full">
                <img className="h-full w-full object-cover transition-transform duration-500 
                group-hover:scale-125" src={imageSrc}/>

            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black
            group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
            </div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9
            text-center transition-all duration-500 group-hover:translate-y-0">
                {/** make sure to have an option to have black or white text */}
                <h1 className={`font-dmserif text-3xl font-bold ${darkImage ? 'text-white' : 'text-black'}`}>{title}</h1>
                <p className={`mb-3 text-lg italic ${darkImage ? 'text-white' : 'text-black'} opacity-0 transition-opacity 
                duration-300 group-hover:opacity-100`}>
                    {description}
                </p>

            </div>


        </div>
    );
};


export default OrganizationsCardAlt;
