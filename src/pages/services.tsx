import Hero from "@/components/services/hero";
import Solutions from "@/components/common/services";
import Brands from "@/components/common/brands";
import OurProcess from "@/components/services/our-process";

const Services = () => {
    return (
        <>
            <Hero />
            <div className="px-10 pb-20 sm:pb-0">
                <Solutions />
            </div>
            <OurProcess />
            <Brands />
        </>
    );
}

export default Services;