import MaxContainer from "./max-container";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [openApplication, setOpenApplication] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleNav = () => {
        setOpen(!open);
    };

    // Close nav when route changes
    useEffect(() => {
        setOpen(false);
        setOpenApplication(false);
    }, [location.pathname]);

    useEffect(() => {
        if (open) {
            document.body.style.position = "fixed";
        } else {
            document.body.style.position = "static";
        }
    }, [open]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            href: "/projects",
        },
        {
            label: "Partners",
            href: "/partnership",
        },
        {
            label: "Applications",
            href: "/",
            type: "dropdown",
            children: [
                {
                    label: "Houses of Worship",
                    link: "house-of-worship",
                },
                {
                    label: "Cafés & Restaurants",
                    link: "cafes-restaurants"
                },
                {
                    label: "Night Clubs & Lounges ",
                    link: "night-clubs-lounges"
                },
                {
                    label: "Large Congregations ",
                    link: "large-congregations"
                },
                {
                    label: "Hotels & Resorts",
                    link: "hotels-resorts"
                },
                {
                    label: "Auditoriums & Concert Halls",
                    link: "auditoriums-concert-halls"
                },
                {
                    label: "Concerts & Live Events",
                    link: "concerts-live-events"
                },
            ]
        },
        {
            label: "News",
            href: "/news",
        },
        {
            label: "Contact",
            href: "/contact",
        }, 
    ]
    return (
        <nav className={`w-full sm:px-32 px-10 py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/50" : "bg-transparent"
            }`}>
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
                            key={item.label}
                            className="text-white hover:text-white/80 transition-colors"
                        >
                            {
                                item.type === "dropdown" ? (
                                    <>
                                    <Popover open={openApplication} onOpenChange={setOpenApplication}>
                                        <PopoverTrigger className="text-xl font-semibold">
                                            Application
                                            <ChevronDown className="size-6 inline ml-2" />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-fit border shadow mt-8 bg-black/50 flex flex-col text-start">
                                            {
                                                item.children.map((child, index) => {
                                                    return (
                                                        <Button
                                                            key={index}
                                                            className="text-white justify-start bg-transparent hover:bg-black py-6 transition-colors"
                                                            asChild
                                                        >
                                                            <Link
                                                                to={`/application/${child.link}`}
                                                                className="text-xl font-semibold"
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        </Button>
                                                    )
                                                })
                                            }
                                        </PopoverContent>
                                    </Popover>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to={item.href}
                                            className="text-xl font-semibold"
                                        >
                                            {item.label}
                                        </Link>
                                    </>
                                )
                            }
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