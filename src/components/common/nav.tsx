import MaxContainer from "./max-container";
import { Link } from "react-router-dom";

const Nav = () => {

    const NavItems = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About Us",
            href: "/about",
        },
        {
            label: "Services",
            href: "/contact",
        },
        {
            label: "Projects",
            href: "/blog",
        },
        {
            label: "News",
            href: "/projects",
        },
        {
            label: "Contact",
            href: "/contact",
        },
    ]
    return (
        <nav className="bg-[#000000] w-full sm:px-32 px-10 py-4">
            <MaxContainer
                className="flex justify-between items-center"
            >
                <img
                    src="/spectra-logo.svg"
                    alt="logo"
                    className="sm:w-60 w-[8.7rem] h-auto"
                />

                <ul className="sm:flex hidden gap-[3.2rem]">
                    {NavItems.map((item) => (
                        <li
                            key={item.href}
                            className="text-white hover:text-white/80 transition-colors"
                        >
                            <Link
                                to={item.href}
                                className="text-xl font-semibold"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </MaxContainer>
        </nav>
    );
}

export default Nav;