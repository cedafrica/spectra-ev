const Hero = () => {
    return ( 
        <section className="flex bg-[url('/contact-hero.png')] bg-cover bg-no-repeat px-10 sm:px-32 flex-col items-center z justify-center text-white sm:h-[min(100vh,960px)] h-[28.4rem]">
            <h1 className="sm:text-[8.1rem] text-[3.2rem] text-center font-bold">Let's Connect</h1>
            <p className="sm:text-[2rem] text-[1.6rem] max-w-400 w-full font-normal">Ready to transform your space with premium audiovisual solutions? Get in touch today.</p>
            <img 
                src="/cedia.png" 
                alt="cedia" 
                className="sm:w-[19.6rem] w-[14.1rem] sm:mt-8" 
            />
        </section>
     );
}
 
export default Hero;