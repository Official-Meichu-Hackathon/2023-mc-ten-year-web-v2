"use client";
import { RecoilRoot, atom } from "recoil";
import { useRecoilWindowWidth } from "./useExternal";

export const windowWidth = atom({
    key: "windowWidth",
    default: undefined,
})



export default function RecoilContextProvider({ children }) {
    return (
        <RecoilRoot>
            <RecoilInitializer>
                {children}
            </RecoilInitializer>
        </RecoilRoot>
    );
}

function RecoilInitializer({ children }) {
    useRecoilWindowWidth();
    return children;
}   