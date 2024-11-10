import React from "react";


const HomeSection: React.FC = () => {
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
        </div>
    );
};


export default HomeSection;
