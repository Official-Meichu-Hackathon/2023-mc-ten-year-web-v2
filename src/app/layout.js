"use client";
import "./globals.scss";
import Navbar from "./navbar";
import Footer from "./components/footer";
// import { Theme } from "./theme";
// import { ThemeProvider } from "next-themes";
import { Space_Grotesk, Noto_Sans_TC } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-space-grotesk",
});

const notoSansTC = Noto_Sans_TC({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-noto-sans-tc",
});

export const metadata = {
    icons: {
        icon: "/icon.svg",
    },
	title: "梅竹黑客松十週年召集令",
	description: "Meichu Hackathon 10y Anniversary Web",
	image: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
            <head>
            </head>
			{/* <ThemeProvider> */}
                <body className={`${spaceGrotesk.variable} ${notoSansTC.variable} text-sm sm:text-base xl:text-lg`}>
                    <Navbar />
                    {children}
                    <Footer />
                </body>
            {/* </ThemeProvider> */}
		</html>
	);
}
