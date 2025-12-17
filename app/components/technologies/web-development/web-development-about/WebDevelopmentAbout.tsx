import Image from "next/image";

const WebDevelopmentAbout = () => {
    return (
        <section className="web-development-about-wrapper bg-[#FAF8F3] overflow-hidden section-gap">
            <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT IMAGE SECTION */}
                    <div className="relative">
                        <Image
                            src="/assests/img/web-development/webdevelopment-about-img.png"
                            alt="Dashboard preview"
                            width={650}
                            height={450}
                            className="relative z-10"
                        />

                    </div>

                    {/* RIGHT CONTENT SECTION */}
                    <div>
                        <div className="flex-1">

                            <div className="flex justify-start mb-5">

                                <div className="px-6 py-2 rounded-full border border-[#F4BE00] inline-flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#F4BE00]"></span>
                                    <span className="font-[Poppins] font-semibold text-[10px] leading-[1.23] uppercase text-[#F4BE00]">
                                        ABOUT US
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-poppins font-medium text-[40px] leading-[1.23] tracking-norma]">
                                IT Solutions Engineered<br />for <span className="highlight relative z-9 w-fit font-poppins font-semibold text-[40px] leading-[1.23] tracking-normal">Speed and Scalability </span>
                            </h3>

                            <p className="text-[#525252] mt-5">
                                Vibes develops secure, bespoke web platforms engineered for high performance, scalability, and reliability, supported by refined development and adaptive design.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

                            {/* Feature Item */}
                            <div className="flex items-start gap-4">
                                <div className="w-15 h-15 rounded-full bg-[#466E59] flex items-center justify-center">
                                    <Image
                                        src="/assests/img/web-development/built-way-icon-1.png"
                                        alt="icon"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <p className="font-poppins font-medium text-[18px] leading-[1.2] tracking-normal text-[#525252ED]">
                                    Custom-Coded,<br /> Secure Builds
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-15 h-15 rounded-full bg-[#466E59] flex items-center justify-center">
                                    <Image
                                        src="/assests/img/web-development/built-way-icon-1.png"
                                        alt="icon"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <p className="font-poppins font-medium text-[18px] leading-[1.2] tracking-normal text-[#525252ED]">
                                    High-Speed <br /> Performance
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-15 h-15 rounded-full bg-[#466E59] flex items-center justify-center">
                                    <Image
                                        src="/assests/img/web-development/built-way-icon-1.png"
                                        alt="icon"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <p className="font-poppins font-medium text-[18px] leading-[1.2] tracking-normal text-[#525252ED]">
                                    Scalable <br /> Architecture
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-15 h-15 rounded-full bg-[#466E59] flex items-center justify-center">
                                    <Image
                                        src="/assests/img/web-development/built-way-icon-1.png"
                                        alt="icon"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <p className="font-poppins font-medium text-[18px] leading-[1.2] tracking-normal text-[#525252ED]">
                                    On-Time Project <br /> Delivery
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WebDevelopmentAbout;
