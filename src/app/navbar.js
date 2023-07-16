"use client";
import Link from "next/link";
import { useState, useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import useScrollPos from "./components/useScrollPos";

function useNavbarEffect() {
    const breakpoint = 768;
    const pathname = usePathname();
    // TODO: Handle resize once on start
    const [windowWidth, setWindowWidth] = useState(0);
    const [expanded, setExpanded] = useState(windowWidth >= breakpoint);

    // Determine screenMd and expanded on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    // Expand/collapse navbar when screen size LTBP/STBP
    useLayoutEffect(() => {
        const isScreenMd = windowWidth >= breakpoint;
        setExpanded(isScreenMd);
    }, [windowWidth]);

    // Collapse navbar on pathname change && screen size smaller than breakpoint
    useEffect(() => {
        if (windowWidth < breakpoint) {
            setExpanded(false);
        }
    }, [pathname, windowWidth]);

    return { expanded, setExpanded, screenMd: windowWidth >= breakpoint };
}

export default function Navbar() {
    const active = (useScrollPos() >= 100);
    const {expanded, setExpanded, screenMd} = useNavbarEffect();
    const links = [
        ["首頁", "/"],
        ["關於我們", "/about"],
        ["歷年作品", "/works"],
        ["Q & A", "/qna"],
    ];

    function toggleNav() {
        setExpanded(!expanded);
    };

    return (
        <>
            <button onClick={toggleNav} aria-controls="primary-navbar" aria-expanded={expanded}
                    className="fixed top-5 right-5 aspect-square text-lg z-20
                               block md:hidden">
                <span className="sr-only">MENU</span>
                {!expanded ? (<FontAwesomeIcon icon={faBars} />) : (<FontAwesomeIcon icon={faTimes} />)}
            </button>
            <nav id="primary-navbar" data-visible={expanded}
                 className={`${(active || (!screenMd && expanded)) ? "nue-concave frost-50" : ""}
                            ${(!expanded) ? "h-0 p-0 opacity-0" : "h-auto p-6 opacity-100"}
                            grid fixed w-screen h-fit text-info z-10 overflow-hidden transition-shadow ease-in-out
                            md:sticky md:top-0 md:mt-[min(10vh,_6rem)]`}>
                
                <ul className="navbar-nav flex flex-wrap gap-x-[4.5em] gap-y-[2.5em] p-2
                                flex-col justify-self-center
                                md:flex-row md:justify-self-start
                                md:ml-20 lg:ml-32 xl:ml-40"
                                >
                    <NavLinks links={links} />
                </ul>
            </nav>
        </>
    );
}

function NavLinks({links}) {
    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="text-center">
                    <Link
                        href={link[1]}
                        className="nav-link max-w-fit hover:after:opacity-100">
                        {link[0]}
                    </Link>
                </li>
            ))}
        </>
    );
}