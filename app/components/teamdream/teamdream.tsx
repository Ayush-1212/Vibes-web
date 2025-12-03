"use client";
import Image from "next/image";
import { Button2 } from "@/components/ui/button2";
import { ArrowUpIcon } from "lucide-react";
import React from "react";

const TeamDreamSection = () => {
    return (
        <section className="one-team-wrapper section-gap">
            <div className="container mx-auto">
                <div className="max-w-7xl mx-auto px-5 lg:px-0 flex flex-col lg:flex-row items-center gap-12">

                    {/* Left Content */}
                    <div className="flex-1">
                        <h3 className="font-poppins font-semibold text-[40px] leading-[1.23] tracking-norma]">
                            One Team.One Dream.<br />
                            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Together for Tomorrow.</span>
                        </h3>

                        <p className="text-[#525252] mt-5 max-w-md">
                            Built on true partnership, the journey becomes a unified force merging strategy, technology, and creativity to shape what comes next. A shared vision turns into a shared mission, building the future side by side.
                        </p>

                        <Button2 className="mt-5 p-[20px]">
                            <span>View More</span>
                            <ArrowUpIcon className="transform rotate-45" />
                        </Button2>
                    </div>
                    {/* Right Logo */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/assests/img/home/one-team-img.png"
                            alt="Team Dream"
                            width={500}
                            height={500}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Bottom Cards */}
                <div className="max-w-7xl mx-auto px-5 lg:px-0 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-[#436E53] text-white p-12 rounded-xl one-team-card">
                        <h3 className="font-poppins font-semibold text-[#FFFFFF] text-[28px] leading-[1.23] tracking-normal mb-3">One Team</h3>
                        <p className="font-poppins font-normal text-[16px]  tracking-normal text-[ #FFFFFFDB]">
                            Your challenges, your goals, and your ambition become the foundation of
                            everything we create. Your challenges, your goals, and your ambition.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-15 rounded-xl one-team-card">
                        <h3 className="font-poppins font-semibold text-[28px] leading-[1.23] tracking-normal mb-3 text-[ #161616]">One Dream</h3>
                        <p className="font-poppins font-normal text-[16px]  tracking-normal text-[#525252]">
                            Your challenges, your goals, and your ambition become the foundation of
                            everything we create.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-12 rounded-xl one-team-card">
                        <h3 className="font-poppins font-semibold text-[28px] leading-[1.23] tracking-normal mb-3 text-[ #161616]">Together for Tomorrow</h3>
                        <p className="font-poppins font-normal text-[16px]  tracking-normal text-[#525252]">
                            We turn that vision into a roadmap powered by insight, innovation, and
                            measurable action.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TeamDreamSection;
