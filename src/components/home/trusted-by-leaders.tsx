import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
const TrustedByLeaders = () => {
    const leaders = [
        {
            image: "/ma.png",
            description: "MA Lighting is a leading provider of professional lighting control solutions, renowned for its grandMA consoles and innovative stage lighting technology."
        },
        {
            image: "/crestron.png",
            description: "Crestron is a global leader in automation and control solutions, delivering advanced technologies for smart homes, offices, and AV integration."
        },
        {
            image: "/infiled.png",
            description: "INFILED specializes in high-quality LED display solutions, offering innovative screens for events, retail, broadcasting, and large-scale installations."
        },
    ]
    return (
        <section className="sm:px-32 sm:pt-[6.6rem]">
            <h2 className="text-center text-[3.8rem]">Trusted by Industry Leaders</h2>
            <p className="text-center mx-auto text-[2rem] max-w-[47.1rem]">We partner with the world's most respected audiovisual brands</p>

            <MaxContainer
                className="grid grid-cols-3 sm:mt-32 gap-[2.4rem]" 
            >
                {
                    leaders.map((item, index) => {
                        return (
                            <div
                                className="px-[2.4rem] pt-[3.2rem] pb-[6.8rem] bg-[#F5F5F5] w-full rounded-[.54rem]"
                                key={index}
                            >
                                <img
                                    src={item.image}
                                    alt="logo"
                                />
                                <p className="text-[1.8rem] mt-[7.9rem]">{item.description}</p>
                            </div>
                        )
                    })
                }
            </MaxContainer>
            <div className="flex justify-center mt-[4.1rem] gap-[1.6rem]">
                <Button
                    variant="outline"
                    className="rounded-full border-black size-[5.8rem]" 
                >
                    <ArrowLeft
                        className="size-[2.1rem]" 
                    />
                </Button>
                <Button
                    variant="outline"
                    className="rounded-full border-black size-[5.8rem]" 
                >
                    <ArrowRight
                        className="size-[2.1rem]" 
                    />
                </Button>
            </div>
        </section>
    );
}

export default TrustedByLeaders;