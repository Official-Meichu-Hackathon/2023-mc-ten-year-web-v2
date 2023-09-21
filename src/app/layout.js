import "@/app/scss/global.scss";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import RecoilContextProvider from "./utils/recoilProvider";
import Navbar from "./navbar";
import Footer from "./footer";

// FontAwesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Google Fonts
const spaceGrotesk = Space_Grotesk({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
    style: "normal",
	display: "swap",
	variable: "--font-space-grotesk",
});
const notoSansTC = localFont({
    src: "./font/NotoSansTC_VF.ttf",
    display: "swap",
	variable: "--font-noto-sans-tc",
});

// Metadata
const title = "梅竹黑客松成果存放平台";
const description = "在梅竹黑客松邁向十週年之際，我們決定以一個嶄新的方式，紀念過去十年走過的足跡。透過存放往年的優秀作品，我們能夠回顧並學習，同時讓未來的參與者能夠在此找尋與迸發創意。";
const url = process.env.URL.endsWith("/") ? process.env.URL.slice(0, -1) : process.env.URL;
export const metadata = {
    metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
    title: {
        default: title,
        template: "%s | 成果存放平台",
    },
	description,
    description,
    openGraph: {
        title,
        description,
        url,
        locale: "zh-TW",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        creator: "@ritmo_v0",
        creatorId: "904003428262723584",
    },
    themeColor: "white",
};



export default function RootLayout({ children }) {
    return (
		<html lang="en">
            <head>
                <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
                <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
            </head>
			<body className={`${spaceGrotesk.variable} ${notoSansTC.variable}
                             min-h-svh scroll-smooth
                             text-sm md:text-base
                             text-primary bg-primary`}>
                <RecoilContextProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </RecoilContextProvider>
                <Analytics />
            </body>
		</html>
	);
}