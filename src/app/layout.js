import "./globals.scss";
import Navbar from "./navbar";
import Footer from "./footer";
import { Space_Grotesk, Noto_Sans_TC } from "next/font/google";

// FontAwesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Next/Font/Google
const spaceGrotesk = Space_Grotesk({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
    style: "normal",
	display: "swap",
	variable: "--font-space-grotesk",
});
const notoSansTC = Noto_Sans_TC({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
    style: "normal",
	display: "swap",
	variable: "--font-noto-sans-tc",
});

// Metadata
export const metadata = {
    title: {
        default: "梅竹黑客松成果存放平台",
        template: "%s | 成果存放平台",
    },
	description: "在梅竹黑客松邁向十週年之際，我們決定以一個嶄新的方式，紀念過去十年走過的足跡。透過存放往年的優秀作品，我們能夠回顧並學習，同時讓未來的參與者能夠在此找尋與迸發創意。",
	image: "",
    themeColor: "black",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
            <head>
                <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
                <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
                {/* // TODO: Resolve CJK fonts not being loaded */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&display=swap" />
            </head>
			<body className={`${spaceGrotesk.variable} ${notoSansTC.variable}
                             grid grid-rows-[1fr_auto] md:grid-rows-[auto_1fr_auto] 
                              min-h-[100svh] scroll-smooth
                             text-sm md:text-base 2xl:text-lg
                             text-primary bg-primary`}>
                <Navbar />
                {children}
                <Footer />
            </body>
		</html>
	);
}
