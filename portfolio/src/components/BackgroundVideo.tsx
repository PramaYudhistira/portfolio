import React from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[75vh] overflow-hidden z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="min-w-full min-h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 w-full 
      h-1/3 bg-gradient-to-t from-black to-transparent"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,1)), linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,1))",
        mixBlendMode: "multiply",
      }}></div>
    </div>
  );
};

export default BackgroundVideo;