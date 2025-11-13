const Hero = () => {
    return ( 
        <section className="flex bg-[url('/service-hero.png')] bg-cover bg-no-repeat px-10 sm:px-32 flex-col items-center text-center justify-center text-white sm:h-[min(100vh,960px)] h-[28.4rem]">
            <h1 className="sm:text-[8.1rem] text-[3.2rem] text-center font-bold">Premium AV Solutions</h1>
            <p className="sm:text-[2rem] text-[1.6rem] max-w-250 w-full font-normal">Comprehensive audiovisual services backed by global partnerships and unmatched local expertise</p>
            <img 
                src="/cedia.png" 
                alt="cedia" 
                className="sm:w-[19.6rem] w-[14.1rem] sm:mt-8" 
            />
        </section>
     );
}
 
export default Hero;