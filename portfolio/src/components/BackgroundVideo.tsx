import React from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[75vh] overflow-hidden z-0">
      <video
        autoPlay
        loop
        muted
        className="min-w-full min-h-full object-cover"
      >
        <source src="/public/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default BackgroundVideo;