"use client";
import React from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CorporateWorkflow = () => {
    return (
        <div className="branding-workflow-wrapper section-gap">
            <div className="w-full mb-2 ">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2.5,
                        },
                    }}
                    className="w-full"
                >
                    {[
                        "/assests/img/branding-details/branding-bottom-img-1.png",
                        "/assests/img/branding-details/branding-bottom-img-2.png",
                        "/assests/img/branding-details/branding-bottom-img-3.png",
                        "/assests/img/branding-details/branding-bottom-img-4.png",
                        "/assests/img/branding-details/branding-bottom-img-1.png",
                    ].map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="overflow-hidden border-[5px] border-white">
                                <Image
                                    src={src}
                                    alt="Integrated Brand Identity"
                                    width={720}
                                    height={674}
                                    priority
                                    unoptimized
                                    className="w-full h-[433px] object-cover transition-transform duration-700 ease-in-out hover:scale-110" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default CorporateWorkflow