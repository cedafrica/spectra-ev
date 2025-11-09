import MaxContainer from "../common/max-container";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const PremiumSolution = () => {
    const Solutions = [
        {
            name: "Video & Projection",
            text: "From large-scale LED walls to ultra-high-definition projection, we deliver stunning visual experiences that captivate audiences and enhance engagement.",
            link: '',
            image: "/video_projection.png",
        },
        {
            name: "Audio Systems",
            text: "Our expertly tuned sound systems bring unparalleled clarity to worship halls, stadiums, and event venues, ensuring every voice and note is heard as intended.",
            link: "",
            image: "/audio_system.png",
        },
        {
            name: "Lighting Solutions",
            text: "Lighting is more than illumination—it’s an experience. Our intelligent lighting solutions set the mood, enhance performances, and create unforgettable atmospheres.",
            link: "",
            image: "/lightning_solution.png",
        },

    ]
    return (
        <section className="bg-white pt-[8.1rem]">
            <h2 className="text-center font-semibold sm:text-[4rem]">Premium Solutions</h2>
            <p className="text-center mx-auto sm:text-[2rem] max-w-[55.8rem]">Comprehensive audiovisual services backed by global partnerships and local expertise</p>

            <MaxContainer className="mt-[6.2rem] w-full">
                {
                    Solutions.map((solution, index) => {
                        const isEven = (index + 1) % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="grid w-full  border sm:grid-cols-2  items-center border-b"
                                data-isOdd={!isEven ? "true" : "false"}
                            >
                                <div 
                                    className={`self-center max-w-220 ${isEven ? 'order-2 pl-16' : 'order-1 pl-32'}`}>
                                    <h2 className="text-[9rem] sm:font-bold leading-40">{solution.name}</h2>
                                    <p className="text-[2.2rem] sm:mt-[2.8rem]">{solution.text}</p>
                                    <Button className="px-8 sm:mt-10 bg-transparent border border-black rounded-4xl text-[1.2rem] text-black py-6" asChild>
                                        <Link to={""}>Learn More</Link>
                                    </Button>
                                </div>

                                <img
                                    src={solution.image}
                                    alt=""
                                    className={`${isEven ? 'order-1' : 'order-2'}`}
                                />
                            </div>
                        );
                    })
                }
            </MaxContainer>
        </section>
    );
}

export default PremiumSolution;