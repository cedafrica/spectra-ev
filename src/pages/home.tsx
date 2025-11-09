import Hero from '../components/home/hero';
import BuiltOnExcellence from '@/components/home/built-on-excellence';
import PremiumSolution from '@/components/home/premium-solution';
import WhySpecialAVL from '@/components/home/why-special-avl';
import TrustedByLeaders from '@/components/home/trusted-by-leaders';
import ReadTheLatestNews from '@/components/home/Read-the-Latest-News';

const Home = () => {
    return (
        <>
            <Hero />
            <BuiltOnExcellence />
            <PremiumSolution />
            <WhySpecialAVL />
            <TrustedByLeaders />
            <ReadTheLatestNews />
        </>
    );
}
 
export default Home;