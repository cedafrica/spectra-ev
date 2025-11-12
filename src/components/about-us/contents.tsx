import MaxContainer from "../common/max-container";

const Content = () => {
    const contents = [
        {
            header: "Vision",
            paragraph: "To be Africa's most trusted audiovisual integration partner, setting the standard for technical excellence, innovation, and customer service across stadiums, corporate spaces, and worship centers."
        },
        {
            header: "Mission",
            paragraph: "To deliver world-class audiovisual solutions that transform spaces and create unforgettable experiences. We empower our clients with technology that amplifies their message and engages their audiences at scale."
        }
    ]
    return (
        <section className="">
            <MaxContainer className="">
                <div className="grid sm:grid-cols-2 px-10 sm:px-0 py-[4.1rem] items-center sm:py-0">
                    <img
                        src="/concert-about.png"
                        alt="about"
                        className="order-2 mt-[3.2rem] sm:mt-0 sm:order-1"
                    />
                    <div className="sm:pr-32 order-1 sm:order-2 sm:pl-[3.8rem]">
                        {
                            contents.map((content) => (
                                <div
                                    key={content.header}
                                    className="mt-10 sm:mt-20 bg-[#F5F5F5] sm:p-[3.8rem] flex flex-col px-[2.1rem] py-[3.6rem] gap-4 sm:gap-8"
                                >
                                    <h2 className="sm:text-[2.5rem] text-[2rem] font-bold">{content.header}</h2>
                                    <p className="sm:text-[1.8rem] text-[1.6rem]">{content.paragraph}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </MaxContainer>
            <div className="bg-black text-white sm:px-32 py-13 sm:py-0 px-10">
                <MaxContainer className="grid sm:grid-cols-2">
                    <div className="flex flex-col justify-center ">
                        <h2 className="font-bold sm:text-center text-start sm:text-[4.8rem] text-[2rem]">We are Architects of AV</h2>
                        <p className="sm:text-[2rem] text-[1.4rem] mt-6 sm:mt-0">At Spectra AVL, we are redefining the audio, video, and lighting (AVL) landscape in Nigeria. With our strategic partnership with Audio Technology, we bring together world-class innovation and local expertise, delivering premium AVL solutions tailored to Nigeria’s unique need.
                            With Audio Technology bringing onboard a legacy spanning 31+ years, a team of 100+ design and engineering specialists, and over 4,500+ successfully completed projects, we are at the forefront of creating immersive and high-performance AVL experiences.</p>
                    </div>

                    <img
                        src="/okparaji.png"
                        alt="colors"
                        className="sm:w-full mt-[3.1rem] sm:mt-0"
                    />
                </MaxContainer>
            </div>
        </section>
    );
}

export default Content;