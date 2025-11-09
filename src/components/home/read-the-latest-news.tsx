import MaxContainer from "../common/max-container";
import {
    UserRound,
    Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const ReadTheLatestNews = () => {
    const News = [
        {
            image: "/dance.png",
            name: "Stephen",
            date: "January 27th, 2025",
            description: "We are proud to announce that Infiled has entrusted us as their official partner for LED installation.",
            title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
            link: "#"
        },
        {
            image: "/concert.png",
            name: "Stephen",
            date: "January 27th, 2025",
            title: "Spectra AVL X Audio Technology",
            description: "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
            link: ""
        },
        {
            image: "/concert.png",
            name: "Stephen",
            date: "January 27th, 2025",
            title: "Spectra AVL X Audio Technology",
            description: "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
            link: "#"
        },

    ]
    return (
        <section className="sm:pt-24 sm:pb-[5.9rem] sm:px-32">
            <h2 className="text-center text-[3.8rem]">Read The Latest News</h2>
            <p className="text-center mx-auto text-[2rem] max-w-[47.1rem]">Stay Updated with Today’s Top Stories</p>

            <MaxContainer
                className="grid grid-cols-3 gap-8 mt-[5.8rem]"
            >
                {
                    News.map((item, index) => {
                        return (
                            <div
                                className="max-w-160 w-full"
                                key={index}
                            >
                                <img
                                    src={item.image}
                                    alt="logo"
                                />
                                <div className="p-[2.3rem] flex flex-col bg-[#F5F5F5]">
                                    <div className="flex items-center justify-between">
                                        <p className="">
                                            <UserRound className="inline-block mr-2" />
                                            <span className="text-[1.5rem]">{item.name}</span>
                                        </p>

                                        <p className="">
                                            <Calendar className="inline-block mr-2" />
                                            <span className="text-[1.5rem]">{item.date}</span>
                                        </p>
                                    </div>
                                    <h3 className="text-[2rem] font-semibold w-[85%] my-8">{item.title}</h3>
                                    <p className="text-[1.8rem]">{item.description}</p>

                                    <Button
                                     asChild
                                     variant={"ghost"}
                                     className="ml-auto mt-[1.7rem] w-fit text-[1.6rem]"
                                    >
                                        <Link to={item.link}>Read More</Link>
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                }
            </MaxContainer>
        </section>
    );
}

export default ReadTheLatestNews;