"use client";
import { useRouter } from "next/navigation";
// import { Animated } from "react-native";
// import ThemeSwitch from "./components/themeSwitch";
import useScrollPos from "./components/useScrollPos";

export default function Navbar() {
    const router = useRouter();
    const active = (useScrollPos() > 120);

    return (
        <>
            <nav className={`${active ? "nue-concave frost-50 " : "bg-transparent "} hidden sm:grid sticky top-0 w-screen p-6 z-10
                            mt-0 tall:mt-24 transition-shadow`}>
                <div className="navbar-nav flex justify-self-center md:justify-self-start p-2 md:ml-20 lg:ml-32 xl:ml-40">
                    <button type="button" className="nav-link" onClick={() => router.push('/')}>
                        首頁
                    </button>
                    <button type="button" className="nav-link" onClick={() => router.push('/memory')}>
                        紀念與感謝
                    </button>
                    <button type="button" className="nav-link" onClick={() => router.push('/team')}>
                        參賽隊伍
                    </button>
                    <button type="button" className="nav-link" onClick={() => router.push('/qna')}>
                        Q & A
                    </button>
                </div>
            </nav>
        </>
    );
}