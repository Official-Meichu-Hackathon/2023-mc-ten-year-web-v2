"use client";
import "@/app/scss/navbar.scss"
import { useState, useEffect, useLayoutEffect } from "react";
import { useRecoilValue } from "recoil";
import { windowWidth, windowHeight } from "@/app/utils/recoilProvider";
import { breakpointMD } from "@/app/utils/resolutions";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useScrollPos from "./utils/useScrollPos";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"



const navbarBP = breakpointMD;
function useNavbarEffect(width, height) {
    const pathname = usePathname();
    const [ expanded, setExpanded ] = useState(width >= navbarBP && height >= navbarBP);

    // Expand/collapse navbar when screen size LTBP/STBP
    useLayoutEffect(() => {
        const state = (width >= navbarBP && height >= navbarBP);
        setExpanded(state);
    }, [width, height]);

    // Collapse navbar on pathname change && STBP
    useEffect(() => {
        if (width < navbarBP || height < navbarBP) {
            setExpanded(false);
        }
    }, [pathname, width, height]);

    return { expanded, setExpanded };
}

export default function Navbar() {
    const width = useRecoilValue(windowWidth);
    const height = useRecoilValue(windowHeight);
    const { expanded, setExpanded } = useNavbarEffect(width, height);
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

    function isHeightMd() {
        return (height < navbarBP);
    }

    function toggleNav() {
        setExpanded(!expanded);
    };

    return (
        <nav id="primary-navbar" data-visible={expanded}
             className={`${(active || (expanded && (isHeightMd() || !isScreenMd()))) ? "nue-concave-50 frost-50" : ""}
                         md:top-0 md:mt-[min(10vh,_6rem)] compact:mt-0 z-10`}>
            <button onClick={toggleNav} aria-controls="primary-navbar" aria-expanded={expanded}
                    className="self-end text-lg">
                <span className="sr-only">MENU</span>
                {!expanded ? (<FontAwesomeIcon icon={faBars} />) : (<FontAwesomeIcon icon={faTimes} />)}
            </button>
            <ul className="navbar-nav md:ml-20 lg:ml-32 xl:ml-40 compact:ml-0">
                <NavLinks links={links} expanded={expanded} setExpanded={setExpanded} />
            </ul>
        </nav>
    );
}

function NavLinks({ links, expanded, setExpanded }) {
    const width = useRecoilValue(windowWidth);
    const height = useRecoilValue(windowHeight);

    function handleClick() {
        if (expanded && (width < navbarBP || height < navbarBP)) {
            setExpanded(false);
        }
    }

    return (
        <>
            {links.map((link, index) => (
                <li key={index} className="text-center">
                    <Link href={link[1]} tabIndex={expanded ? 0 : -1} onClick={handleClick}
                          className="nav-link max-w-fit text-fineprint font-light hover:after:opacity-100">
                        {link[0]}
                    </Link>
                </li>
            ))}
        </>
    );
}