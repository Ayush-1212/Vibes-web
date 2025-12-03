"use client";

import { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// ----------------------------------------------------
// FULLY CUSTOMIZABLE LOGO CONFIG (EDIT ANYTIME)
// ----------------------------------------------------
const logoConfig: Record<string, string[]> = {
    all: [], // we auto-generate below

    digital: [
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
    ],

    branding: [
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
    ],

    technology: [
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
        "https://vibes-work.s3.ap-south-1.amazonaws.com/event-marketing/assets/images/buzaria-logo.png",
    ],
};

// Bottom slider items (NOT functional)
const bottomTabs = [
    "healthcare",
    "education",
    "realestate",
    "entertainment",
    "government",
];

export default function MarqueeTabsSlider() {
    const topTabs = Object.keys(logoConfig); // auto-mapped tabs

    const [activeTab, setActiveTab] = useState("all");

    // Generate logos based on active tab
    const filteredLogos = useMemo(() => {
        if (activeTab === "all") {
            const merged: string[] = [];
            Object.keys(logoConfig).forEach((key) => {
                if (key !== "all") merged.push(...logoConfig[key]);
            });
            return merged;
        }
        return logoConfig[activeTab] || [];
    }, [activeTab]);

    return (
        <section className="w-full py-16 bg-black text-white">
            <div className="container mx-auto">

                {/* Heading */}
                <h2 className="text-center text-3xl font-semibold">Trusted by over</h2>
                <p className="text-center text-green-400 text-4xl font-bold mt-2">
                    100+ Companies
                </p>

                {/* TOP FILTER TABS — AUTO GENERATED */}
                <div className="flex justify-center gap-4 mt-8 mb-10 flex-wrap">
                    {topTabs.map((t) => (
                        <button
                            key={t}
                            onClick={() => setActiveTab(t)}
                            className={`px-4 py-2 rounded-full border transition-all capitalize
                ${activeTab === t
                                    ? "bg-green-500 text-white border-green-500"
                                    : "border-gray-500 text-gray-300 hover:border-white"
                                }
              `}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* SLIDER 1 (Left → Right) */}
                <div className="overflow-hidden w-[90%] mx-auto mb-10">
                    <div className="flex animate-marquee-left gap-10">
                        {[...filteredLogos, ...filteredLogos].map((src, i) => (
                            <div
                                key={i}
                                className="min-w-[180px] h-[90px] bg-[#5e816d] rounded-md flex items-center justify-center px-6 shadow-md border border-[#6f8f7c]"
                            >
                                <img
                                    src={src}
                                    className="max-h-[50px] w-auto opacity-90 hover:opacity-100 transition"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* SLIDER 2 (Right → Left) */}
                <div className="overflow-hidden w-[90%] mx-auto mb-14">
                    <div className="flex animate-marquee-right gap-10">
                        {[...filteredLogos, ...filteredLogos].map((src, i) => (
                            <div
                                key={i}
                                className="min-w-[180px] h-[90px] bg-[#5e816d] rounded-md flex items-center justify-center px-6 shadow-md border border-[#6f8f7c]"
                            >
                                <img
                                    src={src}
                                    className="max-h-[50px] w-auto opacity-90 hover:opacity-100 transition"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* BOTTOM SWIPER */}
                <div className="relative w-full max-w-3xl mx-auto">
                    <div className="swiper-button-prev text-white !left-[-40px]"></div>

                    <Swiper
                        modules={[Navigation]}
                        navigation
                        slidesPerView={3}
                        spaceBetween={20}
                        className="py-6"
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {bottomTabs.map((t) => (
                            <SwiperSlide key={t}>
                                <div className="px-4 py-2 rounded-full border border-gray-500 text-gray-300 text-center capitalize hover:border-white transition cursor-pointer">
                                    {t}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-button-next text-white !right-[-40px]"></div>
                </div>
            </div>

            {/* Custom Animations */}
            <style>{`
        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 25s linear infinite;
        }
        @keyframes marquee-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}
