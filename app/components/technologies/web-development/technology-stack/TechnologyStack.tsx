"use client";

import React from "react";

const techLogosTop: string[] = [
    "/assests/img/web-development/php-logo.png",
    "/assests/img/web-development/react-logo.png",
    "/assests/img/web-development/github-logo.png",
    "/assests/img/web-development/css-logo.png",
    "/assests/img/web-development/node-logo.png",
    "/assests/img/web-development/html-logo.png",
    "/assests/img/web-development/bootstrap-logo.png",
];

const techLogosBottom: string[] = [
    "/assests/img/web-development/shopify-logo.png",
    "/assests/img/web-development/postgresql-logo.png",
    "/assests/img/web-development/wordpress-logo.png",
    "/assests/img/web-development/mysql-logo.png",
    "/assests/img/web-development/ci-4-logo.png",
    "/assests/img/web-development/mongodb-logo.png",
];

const TechnologyStack: React.FC = () => {
    return (
        <section className="bg-[#466E59] section-gap overflow-hidden">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                {/* HEADER */}
                <div className="flex justify-center mb-5">
                    <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
                        <span className="font-poppins font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                            Technology we use
                        </span>
                    </div>
                </div>

                <h3 className="text-center font-poppins font-medium text-[48px] leading-[123%] text-white">
                    Technology <span className="highlight relative z-9">Stack</span>
                </h3>

                <p className="text-[#FFFFFFDB] font-normal text-[16px] leading-[130%] text-center max-w-3xl mx-auto mb-16 mt-5">
                    Vibes uses a robust, future-ready tech stack built for speed, security, and scale every tool is handpicked to power high performance and elevate every digital experience.
                </p>

                {/* MARQUEE 1 */}
                <div className="overflow-hidden mb-8">
                    <div className="flex gap-6 animate-marquee-left w-max">
                        {[...techLogosTop, ...techLogosTop].map((logo: string, index: number) => (
                            <div
                                key={index}
                                className="min-w-[180px] h-[96px] bg-[#FFFFFF] rounded-sm flex items-center justify-center shadow"
                            >
                                <img src={logo} alt="tech logo" className="h-15 w-auto" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* MARQUEE 2 */}
                <div className="overflow-hidden mx-20">
                    <div className="flex gap-6 animate-marquee-right w-max">
                        {[...techLogosBottom, ...techLogosBottom].map(
                            (logo: string, index: number) => (
                                <div
                                    key={index}
                                    className="min-w-[180px] h-[96px] bg-[#FFFFFF] rounded-sm flex items-center justify-center shadow"
                                >
                                    <img src={logo} alt="tech logo" className="h-15 w-auto" />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* SAFE STYLE */}
            <style>{`
        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 25s linear infinite;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
        </section>
    );
};

export default TechnologyStack;
