import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { Outlet } from "react-router-dom";

const Content = () => {

    return (
        <section className="sm:px-32 px-10 sm:py-24">
            <MaxContainer className="max-w-[1050px]">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_30.1rem] gap-12">
                    {/* Left: Outlet replaces featured article and latest articles */}
                    <div className="w-full h-fit">
                        <Outlet />
                    </div>

                    {/* Right: Sidebar with Categories and Newsletter */}
                    <div className="flex flex-col gap-12">
                        {/* Categories Sidebar */}
                        <div className="border shadow bg-[#F5F5F5] pt-6 px-6 sm:pt-[2.8rem] sm:pl-[2.7rem] sm:pr-[4.2rem] pb-8">
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

                        {/* Newsletter Sidebar */}
                        <div className="bg-[#F5F5F5] shadow mb-12 sm:mb-0 sm:px-[1.6rem] p-4 sm:py-[2.6rem] h-fit">
                            <h2 className="sm:text-[2rem] text-[1.8rem] font-bold">Stay Updated</h2>
                            <p className="sm:text-[1.6rem] text-[1.4rem] mt-4">
                                Get the latest insights and industry news delivered to your inbox.
                            </p>

                            <input
                                type="text"
                                className="w-full rounded-4xl h-12 placeholder:text-[1.4rem] pl-4 bg-white mt-[2.4rem]"
                                placeholder="Your e-mail address"
                            />

                            <Button className="w-full sm:mt-[1.6rem] mt-[1.2rem] text-[1.4rem] rounded-4xl py-[1.6rem]">
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