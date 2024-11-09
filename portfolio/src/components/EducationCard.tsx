"use client";
import React from "react";

const EducationCard: React.FC = () => {
  return (

    <div className="grid grid-cols-2 gap-4" style={{
        marginTop: "23rem"
    }}>
        {/*Column 1 */}
        <div className="text-left mb-4 pl-10">
            {/*maybe add the padding inside the header class then worry about
            creating the icons of my interests?
            Also, a grid within a grid column sounds good, so this div would
            be a grid itself */}
            <h1 className="text-5xl font-bold">About me</h1>
            <h3>pajeet pajeet</h3>
        </div>

        {/*Column 2 */}
        <div className="flex justify-center">
            <p>I am a builder. I don't like to label myself as a 
                "full-stack developer", a "graphics engine programmer", 
                or a "networking engineer". I believe that the skills I obtained at Georgia Tech 
                have given me the ability to adapt to anything technical.
            </p>
        </div>


    </div>
  );
};

export default EducationCard;
