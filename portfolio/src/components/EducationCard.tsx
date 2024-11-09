import React from "react";

const EducationCard: React.FC = () => {
  return (
    <div className="shadow-md rounded-lg p-6 max-w-md mx-auto"
    style={{
        marginTop: "20rem",
    }}>

        <div className="text-left mb-4 items-left left-0">
            {/*perhaps add cards of images 
            under this div... */}
            <h1 className="text-5xl">About me</h1>
        </div>

        <p className="text-white text-lg">Details about your education go here.</p>
    </div>
  );
};

export default EducationCard;
