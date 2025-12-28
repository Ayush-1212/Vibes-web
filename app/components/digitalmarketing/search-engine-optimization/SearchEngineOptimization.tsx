"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import AboutSection from '../../common/AboutUs/AboutSection';
import OurBlogs from '../../blogs/blogs';
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";
import HeroSection from '../../common/HeroSection/HeroSection';

const SearchEngineOptimization = () => {
  const router = useRouter();
  return (
    <div>
      <HeroSection
        bgImage="/assests/img/search-engine-optimization/search-engine-optimization-banner.jpg"
        title={
          <>
            Search Engine <br />
            <span className="hero-highlight relative z-9 w-fit font-poppins font-semibold text-[65px] leading-[116%] tracking-normal capitalize text-[#F4BE00]">Optimization</span>
          </>
        }
        description="Strategic SEO built to improve discoverability, search performance, and long-term digital authority across competitive landscapes."
      />
      <AboutSection
        badgeText="SEO Services"
        heading="Comprehensive SEO Built for "
        highlightText="Sustainable Results"
        description="Data-driven optimization frameworks designed to strengthen rankings, improve site health, and convert organic visibility into business impact."
        mainImage="/assests/img/performance-marketing/pm-overview-left-img.png"
        features={[
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>On-Page SEO</>,
            subtitle: "Content, structure, and metadata optimization aligned with search intent to enhance relevance, readability, and ranking performance."
          },
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>Off-Page SEO</>,
            subtitle: "Authority-building strategies focused on credible backlinks, digital PR, and brand trust signals that strengthen domain strength."
          },

          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>Technical SEO</>,
            subtitle: "Performance-led optimization ensures crawlability, site speed, mobile readiness, and indexing efficiency for search engines."
          },
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>LLM Integrations (AI-Led Optimization)</>,
            subtitle: "Search strategies adapted for AI-powered discovery, optimizing content for large language models and next-generation search experiences."
          },
          {
            icon: "/assests/img/web-development/built-way-icon-1.png",
            title: <>Keyword Strategy</>,
            subtitle: "Intent-based keyword frameworks that balance search volume, competition, and conversion potential for sustained organic growth"
          },
        ]}
      />

      <OurBlogs />
      <SuccessStory
        title="Stronger Rankings Start With Smarter SEO"
        subtitle=" Identify gaps, unlock opportunities, and build search visibility that delivers consistent results."
        buttonText="Let’s Connect"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact")}
      />

    </div>
  )
}

export default SearchEngineOptimization