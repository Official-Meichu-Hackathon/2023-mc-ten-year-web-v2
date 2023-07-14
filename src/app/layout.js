import "./globals.scss";
import Navbar from "./navbar";
import Footer from "./footer";
import { Space_Grotesk, Noto_Sans_TC } from "next/font/google";

// FontAwesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const spaceGrotesk = Space_Grotesk({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
    style: "normal",
	display: "swap",
	variable: "--font-space-grotesk",
});

const notoSansTC = Noto_Sans_TC({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
    style: "normal",
	display: "swap",
	variable: "--font-noto-sans-tc",
});

export const metadata = {
    title: {
        default: "梅竹黑客松成果存放平台",
        template: "%s | 成果存放平台",
    },
	description: "Meichu Hackathon 10y Anniversary Web",
	image: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
            <head>
                <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
                <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
                {/* // TODO: Transfer to next/font/google */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&family=Noto+Sans+TC:wght@300;400;700&display=swap" />
            </head>
			<body className={`${spaceGrotesk.variable} ${notoSansTC.variable}
                             grid grid-rows-[1fr_auto] md:grid-rows-[auto_1fr_auto] min-h-screen min-h-[100dvh] scroll-smooth
                             text-sm md:text-base
                             text-primary bg-primary`}>
                <Navbar />
                {children}
                <Footer />
            </body>
		</html>
	);
}
