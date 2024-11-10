"use client";
import React from "react";

const EducationCard: React.FC = () => {
  return (

    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4" style={{
        marginTop: "23rem"
    }}>
        {/*Column 1 */}
        <div className="text-left mb-4 pl-10 pr-10 items-center">
            {/*maybe add the padding inside the header class then worry about
            creating the icons of my interests?
            Also, a grid within a grid column sounds good, so this div would
            be a grid itself */}
            <h1 className="text-4xl font-bold">About me</h1>
        </div>

        {/*Column 2 */}
        <div className="flex justify-center items-center pl-10 pr-10">
            <p >I'm a computer science major at Georgia Tech. I don't label 
                myself as a  
                "full-stack developer", a "graphics engine programmer", 
                or a "networking engineer". I believe that the skills I obtained at Georgia Tech 
                have given me the ability to adapt to anything technical. And I believe that the computer 
                science degree I'm pursuing helps me think as a <strong><em>computer scientist</em></strong>. 
            </p>
        </div>


    </div>
  );
};

export default EducationCard;
