"use client";
import { useRouter } from "next/navigation";
// import ThemeSwitch from "./components/themeSwitch";

export default function Navbar() {
    const router = useRouter();

    return (
        <nav className="flex fixed w-max left-1/2 -translate-x-1/2 md:translate-x-0
                        md:left-0 md:ml-20 lg:ml-32 xl:ml-40 top-6 tall:top-24 px-10 py-4">
            <div className="navbar-nav flex p-2">
                <button type="button" className="nav-link tracking-[0.2em]" onClick={() => router.push('/')}>
                    首頁
                </button>
                <button type="button" className="nav-link tracking-[0.2em]" onClick={() => router.push('/memory')}>
                    紀念與感謝
                </button>
                <button type="button" className="nav-link tracking-[0.2em]" onClick={() => router.push('/team')}>
                    參賽隊伍
                </button>
                <button type="button" className="nav-link tracking-[0.2em]" onClick={() => router.push('/qna')}>
                    Q & A
                </button>
            </div>
        </nav>
    );
}