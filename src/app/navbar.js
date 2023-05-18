"use client";
import { useState, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
// import ThemeSwitch from "./components/themeSwitch";
import useScrollPos from "./components/useScrollPos";

function useNavbarEffect() {
    const breakpoint = 768;
    const storedExpanded = localStorage.getItem("expanded");
    const initialExpanded = (storedExpanded !== null ? Boolean(storedExpanded) : window.innerWidth >= breakpoint);
    const [expanded, setExpanded] = useState(initialExpanded);

    useLayoutEffect(() => {
        const handleResize = () => {
            const state = (window.innerWidth >= breakpoint);
            setExpanded(window.innerWidth >= breakpoint);
        };

        // Run once to determine then add to listener
        handleResize();
        window.addEventListener("resize", handleResize);
        

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    // ? Saves {expanded} on change
    useLayoutEffect(() => {
        localStorage.setItem("expanded", expanded.toString());
    }, [expanded]);

    return {expanded, setExpanded};
}

export default function Navbar() {
    const active = (useScrollPos() >= 100);
    const {expanded, setExpanded} = useNavbarEffect();
    const links = [
        ["首頁", "/"],
        ["紀念與感謝", "/memory"],
        ["參賽隊伍", "/team"],
        ["Q & A", "/qna"],
    ];

    const toggleNav = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <button onClick={toggleNav} aria-controls="primary-navbar" aria-expanded={expanded}
                    className="fixed top-5 right-5 aspect-square w-6 bg-red-700 z-20
                               block md:hidden">
                <span className="sr-only">MENU</span>
            </button>
            <nav id="primary-navbar" data-visible={expanded}
                 className={`${active ? "nue-concave frost-50 " : "bg-transparent"} ${(!expanded) ? "-translate-y-full" : ""} grid w-screen h-fit p-6 text-[0.875em] z-10 transition-colors
                            sticky top-0 md:mt-[min(10vh,_6rem)]`}>
                
                <ul className="navbar-nav flex flex-wrap p-2  gap-x-[4.5em] gap-y-[2.5em]
                                flex-col justify-self-center
                                md:flex-row md:justify-self-start
                                md:ml-20 lg:ml-32 xl:ml-40"
                                >
                    <NavLinks links={links} handleEffect={useNavbarEffect} />
                </ul>
                {/* <ThemeSwitch /> */}
            </nav>
        </>
    );
}

function NavLinks({links, handleEffect}) {
    const router = useRouter();
    const currentPath = router.asPath;
    // const {expanded, setExpanded} = handleEffect();
    const handleClick = (e, path) => {
        e.preventDefault();
        router.push(path);
    }

    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="text-center">
                    <a
                        href={link[1]}
                        onClick={(e) => handleClick(e, link[1])}
                        className="nav-link max-w-fit hover:after:opacity-100">
                        {link[0]}
                    </a>
                </li>
            ))}
        </>
    );
}