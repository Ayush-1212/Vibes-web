"use client";
import OurBlogs from '@/app/components/blogs/blogs'
import MarqueeTabsSlider from '@/app/components/clients/clients'
import SuccessStory from '@/app/components/technology-details/success-story/SuccessStory'
import TechSolutions from '@/app/components/technology-details/tech-solutions/TechSolutions'
import TechnologyCaseStudies from '@/app/components/technology-details/technology-case-studies/TechnologyCaseStudies'
import TechnologyDetailsHero from '@/app/components/technology-details/technology-details-hero/TechnologyDetailsHero'
import React from 'react'
import { useRouter } from "next/navigation";



const page = () => {
    const router = useRouter();
    return (
        <div>
            <TechnologyDetailsHero />
            <TechSolutions />
            <TechnologyCaseStudies />
            <OurBlogs />
            <MarqueeTabsSlider />
           <SuccessStory
            title="Let’s Build Something Powerful"
            subtitle="Scalable digital solutions tailored for you"
            buttonText="Talk to Experts"
            arrowImage="/assests/img/technology-details/arrow.png"
            className="bg-black"
            onButtonClick={() => router.push("/contact")}
            />
        </div>
    )
}

export default page
