import MaxContainer from "./max-container";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const toggleNav = () => {
        setOpen(!open);
    };

    // Close nav when route changes
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (open) {
            document.body.style.position = "fixed";
        } else {
            document.body.style.position = "static";
        }
    }, [open]);

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
            href: "/services",
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
                    className="sm:w-60 relative z-10 w-[8.7rem] h-auto"
                />

                <ul
                    className="flex flex-col sm:flex-row fixed sm:static inset-0 sm:bg-transparent bg-black px-10 sm:px-0 pt-40 sm:pt-0 gap-[1.4rem] sm:gap-[3.2rem] data-[open=true]:translate-x-0 sm:translate-x-0 data-[open=false]:translate-x-full  transition-all sm:data-[open=false]:translate-x-0 z-2 duration-500 ease-out"
                    data-open={open}
                >
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
                <div
                    className={`overflow-hidden transition-all duration-500 ease-out flex flex-col items-center justify-between h-[1.7rem] relative z-20 sm:hidden ${open ? "w-12" : "w-10"
                        }`}
                    onClick={toggleNav}
                >
                    <div
                        className={`h-[.18rem] bg-white w-full origin-right transition-all duration-500 ease-out ${open ? "-rotate-45 w-[2.7rem]" : ""
                            }`}
                    ></div>
                    <div
                        className={`h-[.18rem] bg-white w-full origin-right transition-all duration-500 ease-out ${open ? "translate-x-32 translate-y-31" : ""
                            }`}
                    ></div>
                    <div
                        className={`h-[.18rem] bg-white w-full origin-right transition-all duration-500 ease-out ${open ? "rotate-45 w-[2.7rem]" : ""
                            }`}
                    ></div>
                </div>
            </MaxContainer>
        </nav>
    );
}

export default Nav;