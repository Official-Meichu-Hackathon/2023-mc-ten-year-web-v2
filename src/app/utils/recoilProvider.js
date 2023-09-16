"use client";
import { RecoilRoot, atom } from "recoil";
import { useRecoilWindowDimension } from "./useExternal";

export const windowWidth = atom({
    key: "windowWidth",
    default: undefined,
})

export const windowHeight = atom({
    key: "windowHeight",
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
    useRecoilWindowDimension();
    return children;
}