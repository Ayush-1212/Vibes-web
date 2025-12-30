import AboutHero from '@/app/components/who-we-are/about-hero/AboutHero'
import CelebratingMilestones from '@/app/components/who-we-are/celebrating-milestones/CelebratingMilestones'
import CoreValues from '@/app/components/who-we-are/core-values/CoreValues'
import MissionVision from '@/app/components/who-we-are/mission-vision/MissionVision'
import OurTeam from '@/app/components/who-we-are/our-team/OurTeam'
import TimelineJourney from '@/app/components/who-we-are/timeline-journey/TimelineJourney'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Vibes",
  description: "Learn more about Vibes, our mission, values, and digital expertise.",
};

const page = () => {
    return (
        <div>
            <AboutHero />
            <MissionVision />
            <CoreValues />
            <TimelineJourney />
            <CelebratingMilestones />
            <OurTeam />
        </div>
    )
}

export default page
