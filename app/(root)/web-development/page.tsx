import WebDevelopmentAbout from '@/app/components/web-development/web-development-about/WebDevelopmentAbout'
import WebDevelopmentHero from '@/app/components/web-development/web-development-hero/WebDevelopmentHero'
import WebDevelopmentWorkflow from '@/app/components/web-development/web-development-workflow/WebDevelopmentWorkflow'
import WhyChooseVibes from '@/app/components/web-development/why-choose-vibes/WhyChooseVibes'
import React from 'react'

const page = () => {
    return (
        <div>
            <WebDevelopmentHero />
            <WebDevelopmentAbout />
            <WebDevelopmentWorkflow />
            <WhyChooseVibes />
        </div>
    )
}

export default page