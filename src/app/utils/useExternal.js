import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { windowWidth } from "./atoms";



export function useRecoilWindowWidth() {
    const setWindowWidth = useSetRecoilState(windowWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [setWindowWidth])
}