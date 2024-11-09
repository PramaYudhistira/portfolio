"use client";
import React from "react";

const EducationCard: React.FC = () => {
  return (

    <div className="flex items-start" style={{
        marginTop: "25rem"
    }}>
        <div className="text-left mb-4 items-left left-0
        pl-10">
            {/*perhaps add cards of images 
            under this div... */}
            <h1 className="text-5xl">About me</h1>
        </div>

        <div className="flex justify-center pl-20 text-left"
        style={{
            marginTop: "1rem"
        }}>
            <p className="text-white text-lg text-center">Details about your education go here
                asdfuhasdifuhaidufhvsidjfvksjdfbvkjhbzsdvbalkjdhfgkljdfvnlksjncvlkjnwf.</p>

        </div>

    </div>
  );
};

export default EducationCard;
