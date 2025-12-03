"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const counters = [
    { value: 8, label: "Average period of client collaboration (years)" },
    { value: 50, label: "Team Members" },
    { value: 500, label: "Clients Served" },
    { value: 15, label: "Years of Operation" },
    { value: 700, label: "Projects Delivered" },
];

const galleryImages = [
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
    "/assests/img/home/miles-bg-1.png",
];

export default function MilestoneSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setStartCount(true),
            { threshold: 0.3 }
        );
        sectionRef.current && observer.observe(sectionRef.current);
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full section-gap overflow-hidden">

            <Image
                src="/assests/img/home/together-bg.jpg"
                fill
                alt="main-bg"
                priority
                className="absolute inset-0 object-cover z-0"
            />

            <div className="absolute z-99 inset-0 grid grid-cols-14 grid-rows-5 gap-0 pointer-events-none">
                {galleryImages.map((src, index) => (
                    <div
                        key={index}
                        className="relative w-full h-full pointer-events-auto"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <Image
                            src={src}
                            alt="hover-img"
                            fill
                            className={`object-cover transition-opacity duration-[900ms] ease-out
    ${activeIndex === index ? "opacity-60" : "opacity-0 delay-[400ms]"}
  `}
                        />
                    </div>
                ))}
            </div>

            <div className="relative z-40 max-w-6xl mx-auto text-center px-6">
                <h3 className="font-poppins font-medium text-[48px] leading-[123%] tracking-normal"><span className="highlight relative z-9 w-fit">Milestone</span> Metrics</h3>

                <p className="text-lg text-[#4b5563] max-w-2xl mx-auto mb-16">
                    A showcase of achievements and performance benchmarks that reflect our growth and expertise.
                </p>

                <div className="grid grid-cols-5 gap-10">
                    {counters.map((item, idx) => (
                        <CounterBox key={idx} value={item.value} label={item.label} animate={startCount} />
                    ))}
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/20 z-30"></div>
        </section>
    );
}

function CounterBox({ value, label, animate }: { value: number; label: string; animate: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!animate) return;
        let current = 0;
        const speed = value > 300 ? 6 : 2;
        const timer = setInterval(() => {
            current += speed;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(current);
            }
        }, 20);
    }, [animate, value]);

    return (
        <div className="flex flex-col items-center text-center">
            <p className="text-[55px] font-bold text-[#204667] leading-none">{count}+</p>
            <p className="text-sm text-[#324256] mt-3 max-w-[170px] leading-snug">{label}</p>
        </div>
    );
}
