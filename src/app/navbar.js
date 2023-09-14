"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import { useRecoilWindowWidth } from "./utils/useExternal";
import { RecoilRoot, useRecoilValue } from "recoil";
import { windowWidth } from "@/app/utils/atoms";
import { breakpointMD } from "@/app/utils/resolutions";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useScrollPos from "./utils/useScrollPos";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"



const navbarBP = breakpointMD;
function useNavbarEffect(width) {
    const pathname = usePathname();
    const [ expanded, setExpanded ] = useState(width >= navbarBP);

    // Expand/collapse navbar when screen size LTBP/STBP
    useLayoutEffect(() => {
        const state = (width >= navbarBP);
        setExpanded(state);
    }, [width]);

    // Collapse navbar on pathname change && STBP
    useEffect(() => {
        if (width < navbarBP) {
            setExpanded(false);
        }
    }, [pathname, width]);

    return { expanded, setExpanded };
}

export default function RecoilNavbar() {
    return (
        <RecoilRoot>
            <Navbar />
        </RecoilRoot>
    );
}

function Navbar() {
    useRecoilWindowWidth();
    const width = useRecoilValue(windowWidth);
    const { expanded, setExpanded } = useNavbarEffect(width);
    const active = (useScrollPos() >= 100);
    const links = [
        ["首頁", "/"],
        ["關於我們", "/about"],
        ["歷年作品", "/teams"],
        ["Q & A", "/qna"],
    ];

    function isScreenMd() {
        return (width >= navbarBP);
    }

    function toggleNav() {
        setExpanded(!expanded);
    };

    return (
        <>
            <button onClick={toggleNav} aria-controls="primary-navbar" aria-expanded={expanded}
                    className="fixed top-5 right-5 aspect-square text-lg z-10
                               block md:hidden">
                <span className="sr-only">MENU</span>
                {!expanded ? (<FontAwesomeIcon icon={faBars} />) : (<FontAwesomeIcon icon={faTimes} />)}
            </button>
            <nav id="primary-navbar" data-visible={expanded}
                 className={`${(active || (!isScreenMd() && expanded)) ? "nue-concave-75 frost-50" : ""}
                            ${(!expanded) ? "h-0 p-0 opacity-0" : "h-auto p-6 opacity-100"}
                            grid fixed w-screen h-fit text-fineprint z-10 overflow-hidden transition-shadow ease-in-out
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