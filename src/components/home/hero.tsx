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
            <Carousel 
                setApi={(api) => (carouselApiRef.current = api)}

                opts={{
                    loop: true
                }}

            >
                <CarouselContent>
                    <CarouselItem>
                        <div className="sm:bg-[url('/hero.png')] bg-[url('/bg-2.png')] sm:px-32 px-10 pt-8 sm:pt-[9.2rem] sm:pb-[19.1rem] pb-8">
                            <MaxContainer>
                                <div className="max-w-230 w-full">
                                    <h1 className="text-white text-[3.2rem] leading-[120%] sm:text-[9.6rem] font-bold">Welcome to Spectra AVL</h1>
                                    <p className="text-[#FFFFFF] mt-[2.4rem] text-[1.4rem] sm:text-[2rem]">Spectra AVL delivers world-class audio, video, and lighting (AVL) solutions to the local market. Through our strong partnership with Audio Technology, we blend global innovation with local expertise to redefine immersive sound and visual experiences.</p>
                                    <Button className="sm:text-[1.6rem] text-[1.2rem] border px-8! py-8! rounded-[3rem] border-white mt-[1.8rem] bg-transparent text-white hover:bg-primary/90 sm:w-fit w-full">
                                        Schedule Consultation
                                        <MoveRight className="size-[1.9rem]" />
                                    </Button>

                                    <img
                                        src="/cedia.png"
                                        alt="CEDIA"
                                        className="sm:mt-18 mt-12 sm:w-[22.6rem] w-[15.1rem] h-auto"
                                    />

                                </div>
                                <div className="flex w-fit ml-auto mt-2 sm:mt-[4.1rem] gap-[1.6rem]">
                                    <Button
                                        variant="outline"
                                        className="rounded-full cursor-pointer bg-transparent border-white hover:[&_svg]:text-black hover:bg-white size-[3.8rem] sm:size-[5.8rem]"
                                        onClick={scrollPrev}
                                    >
                                        <ArrowLeft
                                            className="sm:size-[2.1rem] size-[1.4rem] text-white"
                                        />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full cursor-pointer hover:[&_svg]:text-black hover:bg-white bg-transparent border-white  size-[3.8rem] sm:size-[5.8rem]"
                                        onClick={scrollNext}
                                    >
                                        <ArrowRight
                                            className="sm:size-[2.1rem] size-[1.4rem] text-white"
                                        />
                                    </Button>
                                </div>
                            </MaxContainer>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="sm:bg-[url('/bg-2.png')] bg-[url('/bg-2.png')] bg-no-repeat bg-cover sm:px-32 px-10 pt-8 sm:pt-[9.2rem] sm:pb-[19.1rem]">
                            <MaxContainer>
                                <div className="max-w-350 w-full">
                                    <h1 className="text-white text-[3.2rem] leading-[120%] sm:text-[9.6rem] font-bold">Powering the Pulse of Every Crowd.</h1>
                                    <p className="text-[#FFFFFF] mt-[2.4rem] w-[65%] text-[1.4rem] sm:text-[2rem]">From breathtaking LED displays to stadium-wide soundscapes, we create immersive experiences that captivate audiences and amplify energy.</p>
                                    <Button className="sm:text-[1.6rem] text-[1.2rem] border px-8! py-8! rounded-[3rem] border-white mt-[1.8rem] bg-transparent hover:bg-white text-white  sm:w-fit w-full">
                                        Schedule Consultation
                                        <MoveRight className="size-[1.9rem]" />
                                    </Button>

                                    <img
                                        src="/cedia.png"
                                        alt="CEDIA"
                                        className="sm:mt-18 mt-12 sm:w-[22.6rem] w-[15.1rem] h-auto"
                                    />

                                </div>
                                <div className="flex w-fit ml-auto mt-2 sm:mt-[4.1rem] gap-[1.6rem]">
                                    <Button
                                        variant="outline"
                                        className="rounded-full cursor-pointer hover:[&_svg]:text-black hover:bg-white bg-transparent border-white size-[3.8rem] sm:size-[5.8rem]"
                                        onClick={scrollPrev}
                                    >
                                        <ArrowLeft
                                            className="sm:size-[2.1rem] size-[1.4rem] text-white"
                                        />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full cursor-pointer hover:[&_svg]:text-black hover:bg-white bg-transparent border-white  size-[3.8rem] sm:size-[5.8rem]"
                                        onClick={scrollNext}
                                    >
                                        <ArrowRight
                                            className="sm:size-[2.1rem] size-[1.4rem] text-white"
                                        />
                                    </Button>
                                </div>
                            </MaxContainer>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="sm:bg-[url('/bg-3-sm.png')] bg-[url('/bg-3.png')] bg-cover bg-no-repeat sm:px-32 px-10 pt-8 sm:pt-[9.2rem] sm:pb-[19.1rem]">
                            <MaxContainer>
                                <div className="max-w-350 w-full">
                                    <h1 className="text-white text-[3.2rem] leading-[120%] sm:text-[9.6rem] font-bold">Powering the Pulse of Every Crowd.</h1>
                                    <p className="text-[#FFFFFF] mt-[2.4rem] text-[1.4rem] sm:w-[65%] sm:text-[2rem]">From breathtaking LED displays to stadium-wide soundscapes, we create immersive experiences that captivate audiences and amplify energy.</p>
                                    <Button className="sm:text-[1.6rem] text-[1.2rem] border px-8! py-8! rounded-[3rem] border-white mt-[1.8rem] bg-transparent text-white hover:bg-primary/90 sm:w-fit w-full">
                                        Schedule Consultation
                                        <MoveRight className="size-[1.9rem]" />
                                    </Button>

                                    <img
                                        src="/cedia.png"
                                        alt="CEDIA"
                                        className="sm:mt-18 mt-12 sm:w-[22.6rem] w-[15.1rem] h-auto"
                                    />

                                </div>
                                <div className="flex w-fit ml-auto mt-2 sm:mt-[4.1rem] gap-[1.6rem]">
                                    <Button
                                        variant="outline"
                                        className="rounded-full cursor-pointer hover:[&_svg]:text-black hover:bg-white bg-transparent border-white size-[3.8rem] sm:size-[5.8rem]"
                                        onClick={scrollPrev}
                                    >
                                        <ArrowLeft
                                            className="sm:size-[2.1rem] size-[1.4rem] text-white"
                                        />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="rounded-full cursor-pointer hover:[&_svg]:text-black hover:bg-white bg-transparent border-white  size-[3.8rem] sm:size-[5.8rem]"
                                        onClick={scrollNext}
                                    >
                                        <ArrowRight
                                            className="sm:size-[2.1rem] size-[1.4rem] text-white"
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