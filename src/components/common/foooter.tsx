import MaxContainer from "./max-container";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer
            className="bg-black text-white px-32 pt-[6.7rem] pb-[12.1rem]"
        >
            <MaxContainer className="flex justify-between">
                <div className="">
                    <img
                        src="/spectra-logo.svg"
                        alt="logo"
                        className="w-[27.2rem]"
                    />
                    <p className="text-[2rem] max-w-[35.1rem]">We are the curators of immersive audiovisual experiences, specializing in large-scale sound, video, and lighting solutions.</p>
                </div>
                <div className="w-fit">
                    <h2 className="font-semibold text-[2rem] mb-4">Quick Links</h2>
                    <ul className="flex flex-col gap-2">
                        {
                            [
                                {
                                    name: "Home",
                                    link: "#"
                                },
                                {
                                    name: "About Us",
                                    link: "#"
                                },
                                {
                                    name: "Services",
                                    link: "#"
                                },
                                {
                                    name: "Projects",
                                    link: "#"
                                },
                                {
                                    name: "Brands",
                                    link: "#"
                                },
                                {
                                    name: "Contact",
                                    link: "#"
                                }
                            ].map((item, index) => {
                                return (
                                    <li
                                        className=""
                                        key={index}
                                    >
                                        <Link
                                            to={item.link}
                                            className="text-[1.8rem] font-normal"
                                        >{item.name}</Link>

                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="w-fit">
                    <h2 className="font-semibold text-[2rem] mb-4">Our Servces</h2>
                    <ul className="flex flex-col gap-2">
                        {
                            [
                                "Video & Projection",
                                "Audio Systems",
                                "Lighting Solutions"
                            ].map((item, index) => {
                                return (
                                    <p className="text-[1.8rem] font-normal" key={index}>{item}</p>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="font-semibold w-fit text-[2rem] mb-4">
                    <h2 className="">Get in Touch</h2>
                    <Link className="underline font-normal text-[1.8rem]" to={"#"}>projects@savl.pro</Link>
                </div>
            </MaxContainer>
        </footer>
    );
}

export default Footer;