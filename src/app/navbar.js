"use client";
import Link from "next/link";
import { useState, useEffect, useLayoutEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import useScrollPos from "./utils/useScrollPos";

// useSyncExternalStore to prevent error during hydration
function useWindowWidth() {
    const windowWidth = useSyncExternalStore(onResize, getWindowWidthSnapshot, getServerSnapshot);
    return {
        width: windowWidth
    };
}
function onResize(onChange) {
    window.addEventListener("resize", onChange);
    return () => window.removeEventListener("resize", onChange);
}
function getWindowWidthSnapshot() {
    return window.innerWidth;
}
function getServerSnapshot() {
    return 0;
}

function useNavbarEffect() {
    const breakpoint = 768;
    const pathname = usePathname();
    const { width } = useWindowWidth();
    const [expanded, setExpanded] = useState(width >= breakpoint);

    // Determine screenMd and expanded on resize
    useEffect(() => {
        setExpanded(width >= breakpoint);
    }, [width]);

    // Expand/collapse navbar when screen size LTBP/STBP
    useLayoutEffect(() => {
        const isScreenMd = width >= breakpoint;
        setExpanded(isScreenMd);
    }, [width]);



    // Collapse navbar on pathname change && screen size smaller than breakpoint
    useEffect(() => {
        if (width < breakpoint) {
            setExpanded(false);
        }
    }, [pathname, width]);

    return { expanded, setExpanded, screenMd: width >= breakpoint };
}

export default function Navbar() {
    const active = (useScrollPos() >= 100);
    const {expanded, setExpanded, screenMd} = useNavbarEffect();
    const links = [
        ["首頁", "/"],
        ["關於我們", "/about"],
        ["歷年作品", "/teams"],
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