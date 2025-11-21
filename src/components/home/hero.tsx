import { useState } from "react";
import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { MoveRight, ArrowRight, ArrowLeft } from "lucide-react";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            title: "Welcome to Spectra AVL",
            description: "Spectra AVL delivers world-class audio, video, and lighting (AVL) solutions",
            maxWidth: "max-w-230"
        },
        {
            title: "Powering the Pulse of Every Crowd.",
            description: "From breathtaking LED displays to stadium-wide soundscapes, we create immersive experiences that captivate audiences and amplify energy.",
            maxWidth: "max-w-350"
        },
        {
            title: "Transforming Spaces with Innovation",
            description: "Cutting-edge technology meets creative excellence to deliver unforgettable audio-visual experiences.",
            maxWidth: "max-w-350"
        }
    ];

    const scrollPrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        
        setTimeout(() => {
            setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }, 300);
    };

    const scrollNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        
        setTimeout(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        }, 300);
    };

    const currentSlideData = slides[currentSlide];

    return (
        <section className="relative bg-[#000000] flex flex-col h-screen sm:h-fit overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 sm:px-32 h-fit px-10 my-auto sm:pt-88 sm:pb-[19.1rem] pb-8">
                <MaxContainer  className="flex flex-col">
                    <div 
                        className={`${currentSlideData.maxWidth} w-full transition-opacity duration-300 ${
                            isAnimating ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                        <h1 className="text-white text-[3.2rem] leading-[120%] sm:text-[5.2rem] font-bold">
                            {currentSlideData.title}
                        </h1>
                        <p className="text-[#FFFFFF] sm:w-[90%] mt-[2.4rem] text-[1.4rem] sm:text-[2rem]">
                            {currentSlideData.description}
                        </p>
                        <Button className="sm:text-[1.6rem] w-fit text-[1.2rem] border px-8! py-8! rounded-[3rem] border-white mt-[1.8rem] bg-transparent text-white hover:bg-white! cursor-pointer hover:text-black! sm:w-fit">
                            Schedule Consultation
                            <MoveRight className="size-[1.9rem]" />
                        </Button>

                        <img
                            src="/cedia.png"
                            alt="CEDIA"
                            className="sm:mt-18 mt-12 sm:w-[22.6rem] w-[15.1rem] h-auto"
                        />
                    </div>

                    <div className="flex w-fit ml-auto mt-32 sm:mt-[4.1rem] gap-[1.6rem]">
                        <Button
                            variant="outline"
                            className="rounded-full cursor-pointer bg-transparent border-white hover:[&_svg]:text-black hover:bg-white size-[3.8rem] sm:size-[5.8rem]"
                            onClick={scrollPrev}
                        >
                            <ArrowLeft
                                className="sm:size-[1.4rem] size-[1.4rem] text-white"
                            />
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full cursor-pointer hover:[&_svg]:text-black hover:bg-white bg-transparent border-white size-[3.8rem] sm:size-[5.8rem]"
                            onClick={scrollNext}
                        >
                            <ArrowRight
                                className="sm:size-[1.4rem] size-[1.4rem] text-white"
                            />
                        </Button>
                    </div>
                </MaxContainer>
            </div>
        </section>
    );
}

export default Hero;