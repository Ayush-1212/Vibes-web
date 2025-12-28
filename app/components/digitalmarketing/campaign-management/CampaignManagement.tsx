"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import AboutSection from '../../common/AboutUs/AboutSection';
import WhyChooseUsSection from "@/app/components/common/WhyChooseUsSection/WhyChooseUsSection";
import WhyChooseUs from '@/app/components/common/why-choose-us/WhyChooseUs';
import OurBlogs from '../../blogs/blogs';
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";
import HeroSection from '../../common/HeroSection/HeroSection';

const CampaignManagement = () => {
  const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/assests/img/campaign-management/campaign-management-banner.jpg"
        title={
          <>
            Campaign <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Management</span>
          </>
        }
        description="End-to-end campaign management that transforms strategy into action, ensuring consistent execution, measurable reach, and lasting brand impact across digital and on-ground platforms"
      />
      <AboutSection
        badgeText="Services"
        heading="Campaign Execution That "
        highlightText="Drives Engagement"
        description=" From audience discovery to on-ground activation, campaigns are designed, managed, and optimized to deliver visibility, relevance, and results across multiple touchpoints."
        mainImage="/assests/img/performance-marketing/pm-overview-left-img.png"
        features={[
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>Influencer Marketing</>,
            subtitle: "Strategic influencer collaborations that amplify brand narratives through credible voices, targeted communities, and performance-driven partnerships aligned with campaign goals."
          },
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>Event Marketing</>,
            subtitle: "Concept-to-closure event execution that creates immersive brand experiences, drives audience participation, and strengthens brand recall through seamless planning and promotion."
          },
          // {
          //   icon: "/assests/img/web-development/built-way-icon-1.png",
          //   title: <>Google Ads</>,
          //   subtitle: ""
          // },
          // {
          //   icon: "/assests/img/web-development/built-way-icon-1.png",
          //   title: <>LinkedIn Ads</>,
          //   subtitle: ""
          // },
        ]}
      />
      {/* <WhyChooseUsSection
        badgeText="Growth Strategy"
        heading={
          <>
            How Brands  <br />
            <span className="highlight relative w-fit font-semibold">Move Forward?</span>
          </>
        }
        description="Focused branding strategies designed to strengthen identity, build trust, and drive long-term progress."
        cards={[
          {
            title: "Mission-Driven Strategy",
            desc: " Marketing initiatives aligned closely with business objectives to ensure every campaign supports long-term growth.",
            dark: true,
          },
          {
            title: "Performance-First Approach",
            desc: "Every decision guided by data, focusing on conversions, ROI, and measurable outcomes rather than vanity metrics.",
            dark: false,
          },
          {
            title: "Smart Audience Targeting",
            desc: "Advanced segmentation and intent-based targeting to reach the right audience at the right stage of the funnel.",
            dark: false,
          },
          {
            title: "Transparent Performance Reporting",
            desc: "Clear, actionable reporting with complete visibility into spend, performance, and optimization insights.",
            dark: true,
          },
        ]}
      /> */}
      {/* <WhyChooseUs
        backgroundImage="/assests/img/technology-details/common-casestudy-bg.jpg"
        heading="Vibes Performance "
        highlightText="Advantage"
        description="A results-focused model blending strategy, data, creativity, and transparency to drive consistent growth"
        centerText={`Why Brands,\nTrust Vibes?`}
        slides={[
          {
            title: "Results-Driven Execution",
            desc: "Campaigns built around clear KPIs, conversions, and ROI, ensuring every marketing effort delivers measurable business impact.",
          },
          {
            title: "Data, Strategy & Creativity Combined",
            desc: "Performance insights, audience intelligence, and compelling creatives work together to maximize efficiency and scale.",
          },
          {
            title: "Complete Transparency & Accountability",
            desc: "Clear reporting, real-time performance tracking, and optimization insights provide full visibility into outcomes and spend.",
          },
          {
            title: "Results-Driven Execution",
            desc: "Campaigns built around clear KPIs, conversions, and ROI, ensuring every marketing effort delivers measurable business impact.",
          },

        ]}
      /> */}
      <OurBlogs />
      <SuccessStory
        title="Plan Your Campaign"
        subtitle="Build campaigns that connect, engage, and perform across every channel."
        buttonText="Let’s Connect"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact")}
      />

    </div>
  )
}

export default CampaignManagement