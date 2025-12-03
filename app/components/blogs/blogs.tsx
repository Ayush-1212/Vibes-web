"use client";
import Image from "next/image";
import Link from "next/link";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import { Button3 } from "@/components/ui/button3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface BlogCardProps {
    id: string;
    date: string;
    title: string;
    description: string;
    link: string;
}

const blogs: BlogCardProps[] = [
    {
        id: "101",
        date: "April 28, 2025",
        title: "Accenture Introduces trusted agent huddle to allow seamless.",
        description:
            "Accenture introduces trusted agent huddle to allow seamless, first of its kind multistatement AI agent collaboration across the enterprise",
        link: "/blogs/101",
    },
    {
        id: "102",
        date: "April 28, 2025",
        title: "Accenture Introduces trusted agent huddle to allow seamless.",
        description:
            "Accenture introduces trusted agent huddle to allow seamless, first of its kind multistatement AI agent collaboration across the enterprise",
        link: "/blogs/102",
    },
    {
        id: "103",
        date: "April 28, 2025",
        title: "Accenture Introduces trusted agent huddle to allow seamless.",
        description:
            "Accenture introduces trusted agent huddle to allow seamless, first of its kind multistatement AI agent collaboration across the enterprise",
        link: "/blogs/103",
    },
];

export default function OurBlogs() {
    return (
        <section className="blogs-wrapper section-gap relative w-full bg-[#F3EFE4]">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-between items-center mb-12">
                    <h3 className="font-poppins font-medium text-[48px] leading-[123%] tracking-normal">
                        <span className="highlight relative z-9 w-fit">Our Blogs</span>
                    </h3>

                    <Button2 className="mt-5 p-[20px]">
                        <span>Explore Our Blogs</span>
                        <ArrowUpIcon className="transform rotate-45" />
                    </Button2>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={2500}
                    className="pb-10"
                >
                    {blogs.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-[#ECF3EE] p-8 mb-8 border border-[#E5E5E5] hover:shadow-xl transition-all duration-300">
                                <p className="font-poppins font-medium text-[12px] leading-[100%] tracking-[0px] text-[#636060] mb-4">{item.date}</p>
                                <h4 className="font-poppins font-semibold text-[24px] leading-[130%] tracking-[0px] text-[#464646] mb-2">
                                    {item.title}
                                </h4>
                                <p className="font-poppins font-normal text-[14px] leading-[130%] tracking-[0px] text-[#606060]">
                                    {item.description}
                                </p>
                                <Button3 className=" text-[#204667] flex items-center gap-2">
                                    <span>View More</span>
                                    <ArrowUpIcon className="transform rotate-45" />
                                </Button3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
