import AllNews from "@/components/news/news";
import { useEffect } from "react";
import { split } from '@/animations/text.js'

const News = () => {
        useEffect(() => {
        split()
    }, [])
    return (
        <>
            <AllNews />
        </>
    );
}

export default News;