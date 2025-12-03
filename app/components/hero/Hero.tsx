import React from "react";

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="../../assests/img/home/banner-vdeo.mp4" type="video/mp4" />
            </video>

            {/* Optional dark overlay */}
            {/* <div className="absolute inset-0 bg-black/40"></div> */}

        </div>
    );
};

export default Hero;
