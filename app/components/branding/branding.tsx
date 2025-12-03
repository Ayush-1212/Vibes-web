import SectionWithSlider from "@/app/components/common/SectionWithSlider/SectionWithSlider";

export default function Branding() {
    return (
        <div>
            <SectionWithSlider
                title="Branding"
                highlight="& Strategy"
                description="Identity, story, and experience-reimagined..."
                tags={[
                    "Brand Upliftment",
                    "Brand Communication",
                    "Brand Positioning",
                    "Brand Management",
                ]}
                buttonText="Build Your Brand"
                images={[
                    "/assests/img/home/slider-img-2.png",
                    "/assests/img/home/slider-img-3.png",
                    "/assests/img/home/slider-img-1.png",
                ]}
                bgColor="bg-purple-600"
                reverse={false}
            />
        </div>
    );
}