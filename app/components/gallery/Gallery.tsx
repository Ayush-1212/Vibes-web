"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import HeroSection from "../common/InnerPageHero/HeroSection";
import { useGetGalleryQuery } from "@/app/redux/api/galleryApi";

export default function Gallery() {
  const { data, isLoading, error } = useGetGalleryQuery();

  // Bind Fancybox AFTER images are rendered
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Toolbar: { display: ["close"] },
      dragToClose: true,
      infinite: true,
    } as any);

    return () => Fancybox.destroy();
  }, []);

  return (
    <div>
      {/* HERO */}
      <HeroSection
        backgroundImage="/assests/img/culture/culture-banner.jpg"
        title={
          <h1 className="font-poppins font-normal text-[60px] leading-[116%] capitalize text-white">
            Get your Business streamlined for success.
            <br />
            <span className="relative z-10 font-poppins font-semibold text-[65px] text-[#F4BE00]">
              Our Culture
            </span>
          </h1>
        }
        description="We’re ready to turn ideas into meaningful digital experiences—let’s connect and build something impactful together."
      />

      {/* CONTENT */}
      <section className="pb-20 section-gap">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          {/* HEADER */}
          <div className="flex justify-center mb-5">
            <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F4BE00]" />
              <span className="font-poppins font-semibold text-[10px] uppercase text-[#F4BE00]">
                Our Culture
              </span>
            </div>
          </div>

          <h3 className="text-center font-poppins font-medium text-[40px]">
            <span className="font-semibold">Brand Stories</span> in Motion
          </h3>

          <p className="text-[#707070] text-center max-w-2xl mx-auto mb-16 mt-5">
            A curated showcase of visual work that shapes brand perception across
            channels, including social campaigns, identity design, and custom
            website builds.
          </p>

          {/* STATES */}
          {isLoading && (
            <p className="text-center text-lg">Loading gallery...</p>
          )}

          {error && (
            <p className="text-center text-red-500">
              Failed to load gallery
            </p>
          )}

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 gallery-group">
            {data?.gallery?.map((item) => (
              <a
                key={item.gallery_id}
                href={item.name}
                data-fancybox="gallery"
                className="relative overflow-hidden gallery-card shadow-lg"
              >
                <Image
                  src={item.name}
                  alt="Gallery image"
                  width={600}
                  height={400}
                  className="w-full h-[260px] object-cover gallery-image shadow-lg shadow-gray-700/40"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
