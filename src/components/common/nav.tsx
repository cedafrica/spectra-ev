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
        <nav className="bg-[#000000] px-32 py-4">
            <MaxContainer
                className="flex justify-between items-center"
            >
                <img
                    src="/spectra-logo.svg"
                    alt="logo"
                    className="w-60 h-auto"
                />

                <ul className="flex gap-[3.2rem]">
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