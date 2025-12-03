import SectionWithSlider from "../common/SectionWithSlider/SectionWithSlider";

export default function Technology() {
  return (
    
    <SectionWithSlider
      title="Technology"
      highlight="Solutions"
      description="Turning ideas into intelligent Digital Platforms..."
      tags={["UI/UX Design", "Website Development", "App Design"]}
      buttonText="Explore Tech Solutions"
      images={[
        "/assests/img/home/slider-img-1.png",
        "/assests/img/home/slider-img-2.png",
        "/assests/img/home/slider-img-3.png",
      ]}
      bgColor="bg-blue-600"
      reverse={false}   // slider left text right
    />
  );
}
