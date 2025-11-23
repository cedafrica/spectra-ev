import Hero from "@/components/our-project/hero";
import Brands from "@/components/common/brands";
import Projects from "@/components/our-project/projects";
import { useEffect } from "react";
import { split } from '@/animations/text.js'

const OurProject = () => {
        useEffect(() => {
            split()
        }, [])
    return (
        <>
            <Hero />
            <Projects />
            <Brands />
        </>
    );
}

export default OurProject;