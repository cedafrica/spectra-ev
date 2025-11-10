import MaxContainer from "./max-container";
import Marquee from "react-fast-marquee";

const Brands = () => {
    const logos = [
        { src: 'gtbank.svg', className: '' },
        { src: 'bua.svg', className: '' },
        { src: 'mastercard.svg', className: '' },
        { src: 'pe.svg', className: '' },
        { src: 'vis.svg', className: '' },
        { src: 'boothy.svg', className: '' },
        { src: 'uba.svg', className: '' }
    ]
    
    return ( 
        <section className="sm:py-[5rem]">
            <MaxContainer>
                <div className="relative">
                    {/* Left fade overlay */}
                    <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    
                    {/* Right fade overlay */}
                    <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                    
                    <Marquee speed={50} direction="left" autoFill={true}>
                        {
                            logos.map((logo, index) => {
                                return (
                                    <img
                                        src={`/${logo.src}`}
                                        alt=""
                                        key={index}
                                        className={`ml-[2.1rem] ${logo.className}`}
                                    />
                                )
                            })
                        }
                    </Marquee>
                </div>
            </MaxContainer>
        </section>
     );
}
 
export default Brands;