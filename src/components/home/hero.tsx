import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const Hero = () => {
    return (
        <section className="bg-[#000000] sm:px-32 sm:pt-[9.2rem] sm:pb-[19.1rem]">
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
            </MaxContainer>
        </section>
    );
}

export default Hero;