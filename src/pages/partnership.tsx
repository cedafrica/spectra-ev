import Hero from "@/components/partnership/hero";
import Content from "@/components/partnership/content";
import { useEffect } from "react";
import { split } from '@/animations/text.js'

const Partnership = () => {
    useEffect(() => {
        split()
    }, [])
    return (
        <>
            <Hero />
            <Content />
        </>
    );
}

export default Partnership;