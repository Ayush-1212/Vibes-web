"use client";
import { useRouter } from "next/navigation";
import CorporateBrandingSolution from '@/app/components/branding-details/corporate-branding/corporate-branding-solution/CorporateBrandingSolution'
import CorporateHero from '@/app/components/branding-details/corporate-branding/corporate-hero/CorporateHero'
import CorporateWorkflow from '@/app/components/branding-details/corporate-branding/corporate-workflow/CorporateWorkflow'
import OurBlogs from '../../blogs/blogs'
import SuccessStory from "@/app/components/technology-details/success-story/SuccessStory";

const CorporateBranding = () => {
  const router = useRouter();
  return (
    <div>
      <CorporateHero />
      <CorporateBrandingSolution />
      <CorporateWorkflow />
      <OurBlogs />
      <SuccessStory
        title="Build a Brand That Commands Trust"
        subtitle="Branding designed to deliver clarity, consistency, and credibility across every business touchpoint."
        buttonText="Talk to Experts"
        arrowImage="/assests/img/technology-details/arrow.png"
        className="bg-black"
        onButtonClick={() => router.push("/contact")}
      />
    </div>
  )
}

export default CorporateBranding