import Hero from "@/components/services/hero";
import Solutions from "@/components/common/services";
import Brands from "@/components/common/brands";
import OurProcess from "@/components/services/our-process";

const Services = () => {
    return (
        <>
            <Hero />
            <div className="px-10">
                <Solutions />
            </div>
            <OurProcess />
            <Brands />
        </>
    );
}

export default Services;