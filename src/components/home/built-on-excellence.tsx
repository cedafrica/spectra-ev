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
        <section className="sm:px-32 sm:pt-[8.6rem] bg-white">
            <MaxContainer>
                <h2 className="font-semibold text-[3rem] max-w-160">Built on Excellence, Driven by Partnership</h2>

                <div className="grid grid-cols-3 mt-[6.2rem]">
                    {
                        partners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex sm:flex-row max-w-152 sm:gap-8 sm:items-start flex-col text-[#000000]"
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="size-28rem h-auto"
                                />
                                <div className="text-center sm:text-left">
                                    <h3 className="text-[2rem] font-semibold">{partner.name}</h3>
                                    <p className="text-[2rem] font-regular">{partner.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex flex-col mt-[18.3rem] sm:flex-row sm:gap-[4.8rem] items-center">
                    <img
                        src="/arch.png"
                        alt=""
                        className="w-full max-w-[58.8rem]"
                    />
                    <div className="">
                        <h2 className="text-[4.6rem] font-semibold max-w-[50.4rem]">We are Architects of AV</h2>
                        <p className="text-[2.2rem] max-w-[52.1rem]">Spectra AVL is redefining Nigeria’s AVL scene with Audio Technology — bringing 31+ years of expertise and 4,500+ projects to deliver world-class, locally tailored solutions.</p>
                        <div className="grid grid-cols-4 mt-[4.8rem]">
                            {
                                projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="flex sm:flex-row max-w-152 sm:gap-8 sm:items-start flex-col text-[#000000]"
                                    >
                                        <div className="sm:text-left">
                                            <h3 className="text-[3rem] text-center font-extrabold">{project.no}</h3>
                                            <p className="text-[1.6rem] text-center w-[9.1rem] mx-auto font-regular">{project.text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <Button className="sm:px-8 sm:py-6 text-[1.4rem] bg-transparent sm:mt-8 text-black border rounded-[3rem] border-black">
                            Learn More
                        </Button>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default BuiltOnExcellence;