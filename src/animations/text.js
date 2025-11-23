import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IO } from "./observe";

gsap.registerPlugin(ScrollTrigger);


export const split = () => {
    const textStagger = document.querySelectorAll("[data-animation-id = 'text-fade-up']")
    const p = document.querySelectorAll("[data-animation='paragraph']");
    const H = document.querySelectorAll("[data-animation='header']");


    textStagger.forEach((item) => {
        const text = new SplitType(item).lines
        text.forEach((word) => {

            gsap.to((word.querySelectorAll(".char")), {
                y: "-30",
                delay: 1,
                opacity: "0",
                duration: ".5",
                ease: "ease-in",
                stagger: {
                    each: ".05",
                },
                scrollTrigger: {
                    scrub: true,
                },
            });
        })
    })


    p.forEach((item) => {
        new SplitType(item, { types: "lines, words", })

        gsap.set(item.querySelectorAll(".word"), {
            yPercent: 105,
            opacity: 0,
            rotateX: 50,
            transformStyle: "preserve-3d",
        });

        IO(item, { threshold: 0.8 }).then(() => {
            const elem = item.querySelectorAll(".word");
            gsap.to(elem, {
                yPercent: 0,
                opacity: 1,
                rotateX: 0,
                stagger: elem.length > 100 ? 0.02 : 0.03,
                duration: elem.length > 100 ? 0.65 : 0.75,
                ease: "easeOut",
            });

        });
    })

    H.forEach((item) => {
        const Text = new SplitType(item).lines
        Text.forEach((item) => {
            gsap.set(item.querySelectorAll(".char"), {
                opacity: 0,
                yPercent: 100,
                transformStyle: "preserve-3d",
            });
            IO(item, {
                threshold: 1,
            }).then(() => {
                const elem = item.querySelectorAll(".char");
                gsap.to(elem, {
                    opacity: 1,
                    yPercent: 0,
                    stagger: elem.length > 100 ? 0.01 : 0.02,
                    duration: elem.length > 100 ? 0.5 : 0.6,
                    ease: "easeOut",
                });
            });
        })
    });
}