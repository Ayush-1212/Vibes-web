"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import AboutSection from '../../common/AboutUs/AboutSection';
import OurBlogs from '../../blogs/blogs';
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";
import HeroSection from '../../common/HeroSection/HeroSection';

const SocialMediaManagement = () => {
  const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/assests/img/campaign-management/campaign-management-banner.jpg"
        title={
          <>
            Social Media <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Management</span>
          </>
        }
        description="Strategic social media management designed to shape perception, strengthen engagement, and create consistent brand value across platforms."
      />
      <AboutSection
        badgeText="Services"
        heading="Strategic Social Media "
        highlightText="Services"
        description=" End-to-end social media solutions focused on planning, storytelling, and performance crafted to align brand objectives with audience behaviour."
        mainImage="/assests/img/performance-marketing/pm-overview-left-img.png"
        features={[
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>Content Creation & Planning</>,
            subtitle: "Purpose-driven content calendars, platform-specific creatives, and messaging frameworks built to maintain consistency, relevance, and brand recall."
          },
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>B2B Social Media Management</>,
            subtitle: "Professional, insight-driven social strategies that position brands as industry leaders, strengthen credibility, and support long-term business growth."
          },

          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>B2C Social Media Management</>,
            subtitle: "Engaging, trend-responsive social storytelling designed to increase visibility, build community, and drive meaningful consumer interaction."
          },
        ]}
      />

      <OurBlogs />
      <SuccessStory
        title="Elevate Your Social Presence"
        subtitle="Create a social media presence that reflects brand value, clarity, and consistency across every platform"
        buttonText="Let’s Connect"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact")}
      />

    </div>
  )
}

export default SocialMediaManagement