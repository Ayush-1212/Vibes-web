"use client";

import { FC, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

interface SectionProps {
  title: string;
  highlight?: string;
  description: string;
  tags: string[];
  buttonText: string;
  images: string[];
  bgColor?: string;
  reverse?: boolean;
}

const SectionWithSlider: FC<SectionProps> = ({
  title,
  highlight,
  description,
  tags,
  buttonText,
  images,
  bgColor = "bg-black",
  reverse = false,
}) => {


//     useEffect(() => {
//   document.body.style.overflow = "hidden";
//   return () => {
//     document.body.style.overflow = "auto";
//   };
// }, []);

  return (
    <div className="sticky-wrapper hide-scrollbar">

    <div className={`${bgColor} py-24 px-6 md:px-20 overflow-hidden`}>
      <style>{`
        @keyframes zoomInFade {
            0% { transform: scale(0.85); opacity: 0.3; }
            100% { transform: scale(1.15); opacity: 1; }
        }
        .zoom-small-to-big {
            animation: zoomInFade 4s ease-in-out forwards;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-14 items-center">

        {/* LEFT / RIGHT SWITCH USING ORDER */}
        <div
          className={`md:col-span-5 space-y-6 ${
            reverse ? "md:order-2" : "md:order-1"
          }`}
        >
          <div className="space-y-2">
            <h2 className="text-5xl font-extrabold text-white">{title}</h2>
            {highlight && (
              <h2 className="text-5xl font-extrabold text-yellow-300 -mt-2">
                {highlight}
              </h2>
            )}
          </div>

          <p className="text-white/80 max-w-[420px] leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-3 mt-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-5 py-2 border border-white/40 text-white text-sm rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="mt-6 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md">
            {buttonText} ↗
          </button>
        </div>

        {/* SLIDER */}
        <div
          className={`relative md:col-span-7 w-full h-[500px] overflow-hidden ${
            reverse ? "md:order-1" : "md:order-2"
          }`}
        >
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 2000 }}
            speed={1500}
            loop
            className="w-full h-full"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt="slide"
                  className="absolute inset-0 w-full h-full object-cover zoom-anim zoom-small-to-big"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SectionWithSlider;
