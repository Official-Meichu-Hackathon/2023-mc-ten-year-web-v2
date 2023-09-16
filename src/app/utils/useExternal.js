import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { windowWidth, windowHeight } from "./recoilProvider";



export function useRecoilWindowDimension() {
    const setWindowWidth = useSetRecoilState(windowWidth);
    const setWindowHeight = useSetRecoilState(windowHeight);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [setWindowWidth, setWindowHeight])
}