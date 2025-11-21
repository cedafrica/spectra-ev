import MaxContainer from "../common/max-container";
import type { BodyContent } from "@/types"; // or wherever you store types

interface BodyProps {
    contents: BodyContent[];
}

const Body = ({ contents }: BodyProps) => {
    return (
        <section className="sm:px-32 sm:py-25 py-20 px-10">
            <MaxContainer className="flex max-w-[1000px] flex-col sm:gap-8 gap-18">
                {
                    contents.map((content, index) => {
                        return (
                            <div
                                className={`flex flex-col sm:flex-row ${ index % 2 ? "sm:flex-row-reverse" : ""} items-center sm:gap-16 gap-10`}
                                key={index}
                            >
                                <img
                                    src={content.image}
                                    alt=""
                                    className="w-200 rounded-xl"
                                />
                                <div className="sm:w-[55%] ">
                                    <h2 className="text-[2.2rem] font-semibold">{content.title}</h2>

                                    <ul className="list-inside list-disc ">
                                        {
                                            content.items.map((item, itemIndex) => (
                                                <>
                                                    {
                                                        item.bold ? (
                                                            <>
                                                                <li className="text-[1.6rem]" key={itemIndex}>
                                                                    <span className="font-bold">{item.bold}: </span>
                                                                    {item.text}
                                                                </li>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <li className="text-[1.6rem]" key={itemIndex}>
                                                                    {item.text}
                                                                </li>
                                                            </>
                                                        )
                                                    }
                                                </>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </MaxContainer>
        </section>
    );
}

export default Body;