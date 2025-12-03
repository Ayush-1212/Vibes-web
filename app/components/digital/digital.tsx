import SectionWithSlider from "@/app/components/common/SectionWithSlider/SectionWithSlider";

export default function Digital() {
    return (
        <div>
            
            <SectionWithSlider
                title="Digital"
                highlight=" Marketing"
                description="Turning ideas into intelligent Digital Platforms..."
                tags={["UI/UX Design", "Website Development", "App Design"]}
                buttonText="Explore Tech Solutions"
                images={[
                    "/assests/img/home/slider-img-3.png",
                    "/assests/img/home/slider-img-2.png",
                    "/assests/img/home/slider-img-1.png",
                ]}
                bgColor="bg-green-600"
                reverse={true}
            />
        </div>
    );
}
