"use client";
import Image from "next/image";

const items = [
  {
    title: "Insight-Led Execution",
    desc: "Smart decisions guide every build, ensuring each solution aligns with goals and delivers real impact.",
    icon: "/assests/img/web-development/why-choose-icon2.png",
  },
  {
    title: "Future-Ready Architecture",
    desc: "Code is crafted for speed, stability, and effortless scaling as your business and demands grow.",
    icon: "/assests/img/web-development/why-choose-icon1.png",
  },
  {
    title: "Delivery You Can Count On",
    desc: "Timelines are honored with precision, ensuring every milestone is met without compromising quality.",
    icon: "/assests/img/web-development/why-choose-icon3.png",
  },
  {
    title: "Continuous Care & Support",
    desc: "Ongoing updates, fixes, and monitoring keep your digital systems secure, smooth, and high-performing.",
    icon: "/assests/img/web-development/why-choose-icon4.png",
  },
];

export default function WhyChooseVibes() {
  return (
    <section className="bg-[#FAF8F3] py-28">
      <div className="container mx-auto px-4">

        {/* HEADING */}
        <h2 className="text-center font-semibold text-[42px] text-[#2B2B2B]">
          <span className="relative inline-block">
            Choose Vibes.
            <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-[#F4BE00]" />
          </span>{" "}
          Choose Certainty.
        </h2>

        <p className="mt-6 text-center max-w-3xl mx-auto text-[#6B6B6B]">
          Vibes delivers high-performing, scalable, secure digital solutions—built
          with precision, expertise, clear communication, and on-time delivery brands trust.
        </p>

        {/* DESKTOP WORKFLOW */}
        <div className="relative mt-24 hidden lg:block bg-union">

            <div className="bg-union">
                <Image
                    src="/assests/img/web-development/Union.png"
                    alt="Banner Image"
                    width={1200}
                    height={300}
                    className="absolute inset-0 w-full h-full z-0"
                    />
            </div>
          {/* SVG FLOW */}
           {/* <svg
            className="absolute inset-0 w-full h-full z-0"
            viewBox="0 0 1200 360"
            preserveAspectRatio="none"
          >
            <path
              d="
                
                M 80 60
                V 10

                H 260
                V 300
                H 460
                V 60
                H 660
                V 300
                H 860
                V 60
                H 1120
              "
              stroke="#7FA58F"
              strokeWidth="2"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg> */}

          {/* CARDS */}
          <div className="relative z-10 grid grid-cols-4 rounded-[40px]">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="px-10 py-14 h-[300px] flex flex-col items-center text-center"
                >
                  {isEven ? (
                    <>
                      {/* ICON */}
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="mb-6"
                      />

                      {/* TITLE */}
                      <h3 className="font-semibold text-[18px] text-[#2B2B2B] mb-3">
                        {item.title}
                      </h3>

                      {/* DESC */}
                      <p className="text-[14px] leading-[160%] text-[#6B6B6B]">
                        {item.desc}
                      </p>
                    </>
                  ) : (
                    <>
                      {/* DESC */}
                      <p className="text-[14px] leading-[160%] text-[#6B6B6B] mb-4">
                        {item.desc}
                      </p>

                      {/* TITLE */}
                      <h3 className="font-semibold text-[18px] text-[#2B2B2B] mb-4">
                        {item.title}
                      </h3>

                      {/* ICON */}
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={60}
                        height={60}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE */}
        <div className="grid grid-cols-1 gap-6 mt-16 lg:hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-2 border-[#7FA58F] rounded-[24px] px-8 py-10 text-center"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={42}
                height={42}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#6B6B6B]">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
