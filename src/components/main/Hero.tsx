import React from "react";

const Hero = () => {
  return (
    <div>
      <div>
        <video
          autoPlay
          muted
          loop
          className="absolute rotate-180 top-[-340px] left-0 z-[1]   sm:w-full h-full object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>
      <div>Text</div>
    </div>
  );
};

export default Hero;
