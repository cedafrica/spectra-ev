import MaxContainer from "../common/max-container";
import { Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { Outlet } from "react-router-dom";

const Content = () => {

    return (
        <section className="sm:px-32 px-10 sm:py-24">
            <MaxContainer className="max-w-[900px]">
                {/* Top Section with Featured Article and Categories */}
                <div className="flex gap-12">
                    {/* Left: Featured Article */}
                    <div className="flex-1">
                        <div className="flex">
                            <div className="relative sm:w-[32.1rem] sm:h-[30.1rem] shrink-0">
                                <img
                                    src="/dance.png"
                                    alt="dance"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <span className="text-[1.4rem] absolute left-4 top-4 p-2 bg-[#FFFFFF] rounded-[.4rem]">
                                    Featured
                                </span>
                            </div>

                            <div className="border-[1.5px] flex-1 p-8 bg-[#F5F5F5] border-black">
                                <div className="flex items-center justify-between">
                                    <span className="p-2 text-[1.4rem] text-white shrink-0 bg-[#000000] rounded-[.4rem]">
                                        Industry Insight
                                    </span>

                                    <div className="flex items-center gap-2">
                                        <Calendar className="inline size-[1.6rem]" />
                                        <span className="text-[1.5rem]">March 15, 2025</span>
                                        <span className="text-[1.5rem]">8 mins read</span>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="mt-[1.8rem] text-[2rem] font-bold max-w-[35.1rem]">
                                        The Future of Stadium AV: Trends Reshaping Live Entertainment
                                    </h3>

                                    <p className="text-[1.4rem] mt-4 max-w-[25.2rem]">
                                        Explore how emerging technologies in audio, video, and lighting are transforming the stadium experience for millions of fans worldwide.
                                    </p>

                                    <Button
                                        className="p-0 text-[1.4rem] w-fit underline font-normal mt-12"
                                        variant={"ghost"}
                                    >
                                        Read Full Article
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Categories Sidebar */}
                    <div className="border bg-[#F5F5F5] sm:w-[30.1rem] shrink-0 sm:pt-[2.8rem] sm:pl-[2.7rem] sm:pr-[4.2rem]">
                        <h2 className="text-[2.2rem] font-bold">Categories</h2>
                        <div className="flex gap-2 mt-[2.1rem] flex-col">
                            <div className="flex items-center justify-between">
                                <p className="text-[1.6rem] font-semibold">All Post</p>
                                <p className="text-[1.6rem] font-semibold">(25)</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[1.6rem] font-semibold">Audio Systems</p>
                                <p className="text-[1.6rem] font-semibold">(5)</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[1.6rem] font-semibold">Video Technology</p>
                                <p className="text-[1.6rem] font-semibold">(2)</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[1.6rem] font-semibold">Lighting</p>
                                <p className="text-[1.6rem] font-semibold">(10)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Latest Articles */}

                <div className="sm:mt-28">
                    <h2 className="sm:text-[3rem] font-semibold">Latest Articles</h2>
                    <div className="flex gap-12 sm:mt-12">
                        {/* Left: Articles Grid */}
                        <Outlet />
                        {/* Right: Newsletter Sidebar */}
                        <div className="bg-[#F5F5F5] sm:w-[30.1rem] shrink-0 sm:px-[1.6rem] sm:py-[2.6rem] h-fit">
                            <h2 className="sm:text-[2rem] font-bold">Stay Updated</h2>
                            <p className="sm:text-[1.6rem] mt-4">
                                Get the latest insights and industry news delivered to your inbox.
                            </p>

                            <input
                                type="text"
                                className="w-full rounded-4xl h-12 placeholder:text-[1.4rem] pl-4 bg-white mt-[2.4rem]"
                                placeholder="Your e-mail address"
                            />

                            <Button className="w-full sm:mt-[1.6rem] text-[1.4rem] rounded-4xl py-[1.6rem]">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}



export default Content;