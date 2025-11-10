import { useRef } from "react";
import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { MoveRight, ArrowRight, ArrowLeft } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"

const Hero = () => {
    const carouselApiRef = useRef<CarouselApi>(undefined);

    const scrollPrev = () => {
        carouselApiRef.current?.scrollPrev();
    };

    const scrollNext = () => {
        carouselApiRef.current?.scrollNext();
    };

    return (
        <section className="bg-[#000000]">
            <Carousel setApi={(api) => (carouselApiRef.current = api)}>
                <CarouselContent>
                    <CarouselItem>
                        <div className="bg-[url('/hero.png')] sm:px-32 sm:pt-[9.2rem] sm:pb-[19.1rem]">
                            <MaxContainer>
                                <div className="max-w-230 w-full">
                                    <h1 className="text-white text-[9.6rem] leading-38 font-bold">Welcome to Spectra AVL</h1>
                                    <p className="text-[#FFFFFF] mt-[2.4rem] text-[2rem]">Spectra AVL delivers world-class audio, video, and lighting (AVL) solutions to the local market. Through our strong partnership with Audio Technology, we blend global innovation with local expertise to redefine immersive sound and visual experiences.</p>
                                    <Button className="sm:text-[1.6rem] border px-8! py-8! rounded-[3rem] border-white mt-[1.8rem] bg-transparent text-white hover:bg-primary/90">
                                        Schedule Consultation
                                        <MoveRight className="size-[1.9rem]" />
                                    </Button>

                                    <img
                                        src="/cedia.png"
                                        alt="CEDIA"
                                        className="mt-18 w-[22.6rem] h-auto"
                                    />

                                </div>
                                <div className="flex w-fit ml-auto mt-[4.1rem] gap-[1.6rem]">
                                    <Button
                                        variant="outline"
                                        className="rounded-full cursor-pointer hover:bg-transparent bg-transparent border-white size-[5.8rem]"
                                        onClick={scrollPrev}
                                    >
                                        <ArrowLeft
                                            className="size-[2.1rem] text-white"
                                        />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full cursor-pointer hover:bg-transparent bg-transparent border-white size-[5.8rem]"
                                        onClick={scrollNext}
                                    >
                                        <ArrowRight
                                            className="size-[2.1rem] text-white"
                                        />
                                    </Button>
                                </div>
                            </MaxContainer>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="bg-[url('/hero.png')] sm:px-32 sm:pt-[9.2rem] sm:pb-[19.1rem]">
                            <MaxContainer>
                                <div className= "w-full">
                                    <h1 className="text-white text-[9.6rem] leading-38 font-bold max-w-350">Powering the Pulse of Every Crowd.</h1>
                                    <p className="text-[#FFFFFF] max-w-210 mt-[2.4rem] text-[2rem]">From breathtaking LED displays to stadium-wide soundscapes, we create immersive experiences that captivate audiences and amplify energy.</p>
                                    <Button className="sm:text-[1.6rem] border px-8! py-8! rounded-[3rem] border-white mt-[1.8rem] bg-transparent text-white hover:bg-primary/90">
                                        Schedule Consultation
                                        <MoveRight className="size-[1.9rem]" />
                                    </Button>

                                    <img
                                        src="/cedia.png"
                                        alt="CEDIA"
                                        className="mt-18 w-[22.6rem] h-auto"
                                    />

                                </div>
                                <div className="flex w-fit ml-auto mt-[4.1rem] gap-[1.6rem]">
                                    <Button
                                        variant="outline"
                                        className="rounded-full cursor-pointer hover:bg-transparent bg-transparent border-white size-[5.8rem]"
                                        onClick={scrollPrev}
                                    >
                                        <ArrowLeft
                                            className="size-[2.1rem] text-white"
                                        />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full cursor-pointer hover:bg-transparent bg-transparent border-white size-[5.8rem]"
                                        onClick={scrollNext}
                                    >
                                        <ArrowRight
                                            className="size-[2.1rem] text-white"
                                        />
                                    </Button>
                                </div>
                            </MaxContainer>
                        </div>
                    </CarouselItem>
                     <CarouselItem>
                        <div className="bg-[url('/hero.png')] sm:px-32 sm:pt-[9.2rem] sm:pb-[19.1rem]">
                            <MaxContainer>
                                <div className= "w-full">
                                    <h1 className="text-white text-[9.6rem] leading-38 font-bold max-w-350">Where Technology Meets Spectacle.</h1>
                                    <p className="text-[#FFFFFF] max-w-210 mt-[2.4rem] text-[2rem]">Delivering seamless AV integration for conferences, concerts, and mega-events, ensuring flawless execution and unforgettable moments.</p>
                                    <Button className="sm:text-[1.6rem] border px-8! py-8! rounded-[3rem] border-white mt-[1.8rem] bg-transparent text-white hover:bg-primary/90">
                                        Schedule Consultation
                                        <MoveRight className="size-[1.9rem]" />
                                    </Button>

                                    <img
                                        src="/cedia.png"
                                        alt="CEDIA"
                                        className="mt-18 w-[22.6rem] h-auto"
                                    />

                                </div>
                                <div className="flex w-fit ml-auto mt-[4.1rem] gap-[1.6rem]">
                                    <Button
                                        variant="outline"
                                        className="rounded-full cursor-pointer hover:bg-transparent bg-transparent border-white size-[5.8rem]"
                                        onClick={scrollPrev}
                                    >
                                        <ArrowLeft
                                            className="size-[2.1rem] text-white"
                                        />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full cursor-pointer hover:bg-transparent bg-transparent border-white size-[5.8rem]"
                                        onClick={scrollNext}
                                    >
                                        <ArrowRight
                                            className="size-[2.1rem] text-white"
                                        />
                                    </Button>
                                </div>
                            </MaxContainer>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
    );
}

export default Hero;