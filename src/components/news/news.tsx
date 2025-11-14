import { Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const News = () => {
    const news = [
        {
            name: "Audio",
            image: "/dance.png",
            date: "January 27th, 2025",
            time: "8",
            title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
            decription: "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
            link: "#"
        },
        {
            name: "Audio",
            image: "/dance.png",
            date: "January 27th, 2025",
            time: "8",
            title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
            decription: "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
            link: "#"
        },
        {
            name: "Audio",
            image: "/dance.png",
            date: "January 27th, 2025",
            time: "8",
            title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
            decription: "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
            link: "#"
        },
        {
            name: "Audio",
            image: "/dance.png",
            date: "January 27th, 2025",
            time: "8",
            title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
            decription: "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
            link: "#"
        },
    ]

    return (
        <div className="flex-1">
            <div className="grid sm:gap-8 sm:grid-cols-2">
                {
                    news.map((item, index) => {
                        return (
                            <Card
                                {...item}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

const Card = ({ image, name, date, time, title, decription, link }: {
    image: string;
    name: string;
    date: string;
    time: string;
    title: string;
    decription: string;
    link: string;
}) => {
    return (
        <div className="w-full">
            <img
                src={image}
                alt=""
                className="w-full h-auto"
            />
            <div className="bg-[#F5F5F5] flex flex-col border-[1.5px] border-black py-[1.5rem] sm:px-8">
                <div className="flex items-center justify-between">
                    <span className="p-2 text-[1.2rem] rounded-[.3rem] bg-black text-white">{name}</span>
                    <div className="flex gap-2 items-center">
                        <Calendar className="size-[1.4rem]" />
                        <span className="text-[1.2rem]">{date}</span>
                        <span className="text-[1.2rem]">{time} mins read</span>
                    </div>
                </div>
                <h2 className="text-[2rem] mt-2 font-bold">{title}</h2>
                <p className="text-[1.4rem] mt-2">{decription}</p>
                <Button asChild className="ml-auto p-0 text-[1.4rem] sm:mt-[1.5rem]" variant={"ghost"}>
                    <Link to={link}>Read More</Link>
                </Button>
            </div>
        </div>
    )
}

export default News;