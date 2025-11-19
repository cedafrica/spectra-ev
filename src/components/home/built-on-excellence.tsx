import CustomButton from "../common/custom-button";
import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";

const BuiltOnExcellence = () => {
    const partners = [
        {
            name: "Top-Tier Brands",
            text: "We work with leading global brands to deliver premium AVL quality.",
            image: "/medal.svg"
        },
        {
            name: "Global Partners",
            text: "Our global network ensures seamless, cutting-edge solutions.",
            image: "/global.svg"
        },
        {
            name: "Expert Local Team",
            text: "Skilled local experts bring world-class results to every project.",
            image: "/team.svg"
        },

    ]

    const projects = [
        {
            no: "500+",
            text: "Projects Completed"
        },
        {
            no: "15+",
            text: "Years of Experience",
        },
        {
            no: "100+",
            text: "Global Partners",
        },
        {
            no: "98%",
            text: "Clients Satisfaction"
        }
    ]

    return (
        <section className="sm:px-32 px-9 pt-[2.9rem] sm:pt-[8.6rem] bg-white">
            <MaxContainer>
                <h2 className="font-semibold sm:w-full w-[70%] sm:text-[3rem] text-[2rem] max-w-160">Built on Excellence, Driven by Partnership</h2>

                <div className="grid sm:grid-cols-3 gap-[2.4rem] sm:gap-0 mt-20 sm:mt-[6.2rem]">
                    {
                        partners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex sm:flex-row justify-between sm:justify-normal max-w-152 sm:gap-8 gap-9 items-start text-[#000000]"
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="sm:size-28 size-18 h-auto"
                                />
                                <div className="text-left">
                                    <h3 className="text-[2rem] font-semibold">{partner.name}</h3>
                                    <p className="text-[2rem] font-regular">{partner.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex flex-col-reverse mt-15 sm:mt-[18.3rem] sm:flex-row sm:gap-[4.8rem] items-center">
                    <img
                        src="/arch.png"
                        alt=""
                        className="w-full max-w-[58.8rem]"
                    />
                    <div className="flex flex-col">
                        <h2 className="sm:text-[4.6rem] text-[2.8rem] text-center sm:text-start font-semibold max-w-[50.4rem]">Elevating Audiovisual Excellence</h2>
                        <p className="sm:text-[2.2rem] text-[1.8rem] text-center sm:text-start max-w-[52.1rem]">Spectra AVL is redefining Nigeria’s AVL scene with Audio Technology — bringing 31+ years of expertise and 4,500+ projects to deliver world-class, locally tailored solutions.</p>
                        <div className="grid grid-cols-2 gap-[2.1rem] sm:grid-cols-4 mt-[2.1rem] sm:mt-[4.8rem]">
                            {
                                projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="flex sm:flex-row max-w-152 sm:gap-8 sm:items-start flex-col text-[#000000]"
                                    >
                                        <div className="sm:text-left">
                                            <h3 className="sm:text-[3rem] text-[2.5rem] text-center font-extrabold">{project.no}</h3>
                                            <p className="sm:text-[1.6rem] text-[1.4rem] text-center w-[9.1rem] mx-auto font-regular">{project.text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <CustomButton className="text-black border-[1.5px] border-black px-8!">
                            Learn More
                        </CustomButton>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default BuiltOnExcellence;