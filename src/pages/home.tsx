import Hero from '../components/home/hero';
import BuiltOnExcellence from '@/components/home/built-on-excellence';
import PremiumSolution from '@/components/home/premium-solution';
import WhySpecialAVL from '@/components/home/why-special-avl';
import TrustedByLeaders from '@/components/home/trusted-by-leaders';
import ReadTheLatestNews from '@/components/home/read-the-latest-news';
import Brands from '@/components/common/brands';
import { useEffect } from "react";
import { split } from '@/animations/text.js'


const Home = () => {
    useEffect(() => {
        split()
    }, [])
    return (
        <>
            <Hero />
            <BuiltOnExcellence />
            <PremiumSolution />
            <WhySpecialAVL />
            <TrustedByLeaders />
            <Brands />
            <ReadTheLatestNews />
        </>
    );
}
export default Home;