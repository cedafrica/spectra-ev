import MaxContainer from "./max-container";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
    return (
<<<<<<< HEAD
        <footer className="bg-black text-white sm:px-32 px-10 pt-20 sm:pt-[6.7rem] pb-[12.1rem]">
  <MaxContainer className="grid grid-cols-2 sm:grid-cols-4 gap-y-[10rem] sm:gap-y-0">

    {/* Logo & Description */}
    <div className="max-w-[36rem]">
      <img
        src="/spectra-logo.svg"
        alt="logo"
        className="sm:w-[20rem] w-56 mb-6"
      />
      <p className="sm:text-[2rem] text-[1.6rem] text-gray-300 leading-relaxed">
        We are the curators of immersive audiovisual experiences, specializing in large-scale sound, video, and lighting solutions.
      </p>
    </div>

    {/* Quick Links */}
    <div className="w-fit justify-self-end sm:justify-self-center">
      <h2 className="font-semibold text-[2rem] mb-6 tracking-wide">Quick Links</h2>
      <ul className="flex flex-col gap-3">
        {[
          { name: "Home", link: "#" },
          { name: "About Us", link: "/about" },
          { name: "Services", link: "#" },
          { name: "Projects", link: "#" },
          { name: "Brands", link: "#" },
          { name: "Contact", link: "#" }
        ].map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className="sm:text-[1.8rem] text-[1.4rem] font-normal text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Our Services */}
    <div className="w-fit">
      <h2 className="font-semibold text-[2rem] mb-6 tracking-wide">Our Services</h2>
      <ul className="flex flex-col gap-3">
        {["Video & Projection", "Audio Systems", "Lighting Solutions"].map((item, index) => (
          <li key={index} className="sm:text-[1.8rem] text-[1.6rem] font-normal text-gray-300 hover:text-white transition-colors duration-300">
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Get in Touch */}
    <div className="w-fit justify-self-end sm:justify-self-center">
      <h2 className="font-semibold text-[2rem] mb-6 tracking-wide">Get in Touch</h2>
      <Link
        to="#"
        className="underline font-normal sm:text-[1.8rem] text-[1.6rem] text-gray-300 hover:text-white flex items-center gap-2 transition-colors duration-300"
      >
        <Mail className="inline-block" />
        projects@savl.pro
      </Link>
    </div>
  </MaxContainer>
</footer>

=======
        <footer
            className="bg-black text-white sm:px-32 px-9 pt-18 sm:pt-[6.7rem] pb-[12.1rem]"
        >
            <MaxContainer className="grid grid-cols-2 sm:grid-cols-4 gap-y-[10.1rem] sm:gap-y-0">
                <div className="">
                    <img
                        src="/spectra-logo.svg"
                        alt="logo"
                        className="sm:w-[20.1rem] w-56"
                    />
                    <p className="sm:text-[2rem] text-[1.6rem] max-w-[35.1rem]">We are the curators of immersive audiovisual experiences, specializing in large-scale sound, video, and lighting solutions.</p>
                </div>
                <div className="w-fit justify-self-end sm:justify-self-center">
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
                                    link: "/about"
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
                                            className="sm:text-[1.8rem] text-[1.4rem] font-normal"
                                        >{item.name}</Link>

                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="w-fit ">
                    <h2 className="font-semibold text-[2rem] mb-4">Our Servces</h2>
                    <ul className="flex flex-col gap-2">
                        {
                            [
                                "Video & Projection",
                                "Audio Systems",
                                "Lighting Solutions"
                            ].map((item, index) => {
                                return (
                                    <p className="sm:text-[1.8rem] text-[1.6rem] font-normal" key={index}>{item}</p>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="font-semibold w-fit  justify-self-end sm:justify-self-center text-[2rem] mb-4">
                    <h2 className="">Get in Touch</h2>
                    <Link
                        className="underline font-normal sm:text-[1.8rem] text-[1.6rem]"
                        to={"#"}
                    >
                        <Mail className="inline-block mr-2" />
                        projects@savl.pro
                    </Link>
                </div>
            </MaxContainer>
        </footer>
>>>>>>> d838eebd4bb3719e9f3a70da88a13366a7291c57
    );
}

export default Footer;