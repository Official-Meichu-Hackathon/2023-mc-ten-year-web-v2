"use client";
import { useEffect, useState } from "react";

const useScrollPos = () => {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const updatePos = () => {
            setScrollPos(window.scrollY);
        }
        window.addEventListener("scroll", updatePos);
        updatePos();
        return () => window.removeEventListener("scroll", updatePos);
    }, []);

    return scrollPos;
};

export default useScrollPos;