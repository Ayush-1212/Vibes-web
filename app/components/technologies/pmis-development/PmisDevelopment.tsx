"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import PmisDevelopmentHero from './pmis-development-hero/PmisDevelopmentHero'
import WhyChooseUs from '@/app/components/common/why-choose-us/WhyChooseUs';
import WhyChooseSection from '../../common/WhyChooseSection/WhyChooseSection';
import TechnologyStackSection from '../../common/TechnologyStackSection/TechnologyStackSection';
import SuccessStory from '../../technology-details/success-story/SuccessStory'

const PmisDevelopment = () => {
  const router = useRouter();
  return (
    <div>
      <PmisDevelopmentHero />

      <WhyChooseUs
        backgroundImage="/assests/img/technology-details/common-casestudy-bg.jpg"
        heading="Enabling PMIS Across"
        highlightText="Governance & Execution"
        description="Vibes designs and delivers PMIS platforms structured for complex, multi-agency project environments."
        centerText={`PMIS for,\nMulti-Agency Delivery`}
        slides={[
          {
            title: "Governing Agency (Super Admin)",
            desc: "Vibes configures centralized control for policy oversight, approvals, compliance tracking, and strategic reporting.",
          },
          {
            title: "Consulting Agency (PMC)",
            desc: " Vibes enables planning, monitoring, and coordination workflows through structured dashboards, review mechanisms, and performance insights.",
          },
          {
            title: "Implementation Agency(s) (EPC)",
            desc: " Vibes supports multi-agency execution with task tracking, progress updates, and field-level data capture within a unified platform.",
          },
          {
            title: "Governing Agency (Super Admin)",
            desc: "Vibes configures centralized control for policy oversight, approvals, compliance tracking, and strategic reporting.",
          },

        ]}
      />

      <WhyChooseSection
        badgeText="Monitoring Tools"
        heading={
          <>
            <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">PMIS Modules</span> That<br /> Enable Governance
          </>
        }
        description="PMIS solutions by Vibes are built with scalable, role-driven modules that support efficient project governance, monitoring, and execution across complex ecosystems."
        items={[
          {
            title: "PMIS Portal Enhancement",
            desc: "Optimized portals designed for usability, performance, and secure multi-stakeholder access.",
            icon: "/assests/img/web-development/why-choose-icon2.png",
          },
          {
            title: "Dashboard Design & Analytics",
            desc: "Insight-driven dashboards delivering real-time project status, performance metrics, and actionable analytics.",
            icon: "/assests/img/web-development/why-choose-icon1.png",
          },
          {
            title: "User Flow & Functional Architecture",
            desc: "Structured workflows and system architecture ensuring clarity, compliance, and seamless navigation across roles.",
            icon: "/assests/img/web-development/why-choose-icon3.png",
          },
          {
            title: "Data Visualization",
            desc: "Interactive visual representations that simplify complex project data, highlight trends, and enable faster, insight-led governance decisions.",
            icon: "/assests/img/web-development/why-choose-icon4.png",
          },
        ]}
      />

      <TechnologyStackSection
        badgeText="Government Projects"
        heading={
          <>
            Proven Public Sector<br /><span className="highlight relative z-9">Deployments</span>
          </>
        }
        description="Delivered large-scale, mission-critical digital solutions in collaboration with PwC and EY, supporting transparency, governance, and data-driven decision-making across key government initiatives."
        topLogos={[
          "/assests/img/web-development/php-logo.png",
          "/assests/img/web-development/react-logo.png",
          "/assests/img/web-development/github-logo.png",
          "/assests/img/web-development/css-logo.png",
          "/assests/img/web-development/node-logo.png",
          "/assests/img/web-development/html-logo.png",
          "/assests/img/web-development/bootstrap-logo.png",
        ]}
        bottomLogos={[
          "/assests/img/web-development/shopify-logo.png",
          "/assests/img/web-development/postgresql-logo.png",
          "/assests/img/web-development/wordpress-logo.png",
          "/assests/img/web-development/mysql-logo.png",
          "/assests/img/web-development/ci-4-logo.png",
          "/assests/img/web-development/mongodb-logo.png",
        ]}
      />
      <SuccessStory
        title="Digital Control. Real-Time Visibility."
        subtitle="PMIS platforms designed to manage scale, complexity, and accountability across large-impact projects."
        buttonText="Let’s Connect"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact")}
      />

    </div>
  )
}

export default PmisDevelopment