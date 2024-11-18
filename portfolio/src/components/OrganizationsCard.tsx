"use client";
import React from "react";


interface OrganizationsCardProps {
    imageSrc: string;
    title: string;
    description: string;
    bgColor: string;
};


const OrganizationsCard: React.FC<OrganizationsCardProps> = ( {
    imageSrc,
    title,
    description,
    bgColor
} ) => {
    //note: padding = space inside
    //      margin = space outside

    /**
     * logic, I wrapped the card in a div with different width classes, and then 
     * the actual card goes within the div itself. the reason why is that so i can fit 2 of these and its fixed 2 cards when the viewport is small,
     * and then 3 when medium and so on, whilst also having a gap between the cards. I chose mr-2 instead of ml-2 as a workaround for now until I 
     * can figure out how to make it more uniform but also align it with everything else
     * 
     * I shall contact nabeel hossain for this lol
     */
    return(
        //the outer "slots" to structurethe physical cards
        <div className="w-1/2 md:w-1/4 lg:1/4">
            {/** the actual definitions for the cards themselves */}
            <div className="relative rounded-lg border-gray-700 bg-gray-900 overflow-hidden mr-2 mb-2 h-23rem md:h-96">
                <div className={`h-1/2 ${bgColor} flex items-center justify-center`}>
                    <img className="h-full object-cover transition-transform duration-500 
                    group-hover:scale-125" src={imageSrc}/>
                </div>
                <div className="p-3">
                    <h5 className="mb-2 text-lg md:text-xl
                    text-white tracking-tight">
                        {title}
                    </h5>
                    <p className="w-full">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};


export default OrganizationsCard;
