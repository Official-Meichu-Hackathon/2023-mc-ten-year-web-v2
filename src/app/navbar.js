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
    const [expanded, setExpanded] = useState(false);

    // Set "expanded" to false after path change, only if navbar become collapsible
    useEffect(() => {
        const state = (window.innerWidth < breakpoint);
        if(state) {
            setExpanded(false);
        }
    }, [pathname]);

    // Determine "expanded" on resize
    useLayoutEffect(() => {
        const handleResize = () => {
            const state = (window.innerWidth < breakpoint);
            if(state) {
                setExpanded(!state);
            } else {
                setExpanded(true);
            }
        };

        // Run once to determine then add to listener
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return {expanded, setExpanded};
}

export default function Navbar() {
    const active = (useScrollPos() >= 100);
    const {expanded, setExpanded} = useNavbarEffect();
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
                    className="fixed top-5 right-5 aspect-square text-base z-20
                               block md:hidden">
                <span className="sr-only">MENU</span>
                {!expanded ? (<FontAwesomeIcon icon={faBars} />) : (<FontAwesomeIcon icon={faTimes} />)}
            </button>
            {/* // TODO: Always nue-concave for screens smaller than md */}
            <nav id="primary-navbar" data-visible={expanded}
                 className={`${active ? "nue-concave frost-50 " : "bg-transparent"} ${(!expanded) ? "hidden" : ""}
                            grid w-screen h-fit p-6 text-info z-10 transition-colors
                            fixed
                            md:sticky md:top-0 md:mt-[min(10vh,_6rem)]`}>
                
                <ul className="navbar-nav flex flex-wrap p-2  gap-x-[4.5em] gap-y-[2.5em]
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