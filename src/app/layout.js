"use client";

import "./globals.scss";
import Navbar from "./navbar";
import Footer from "./components/footer";
// import { Theme } from "./theme";
// import { Space_Grotesk, Noto_Sans_TC } from "next/font/google";

// const spaceGrotesk = Space_Grotesk({
// 	weight: ["300", "400", "500", "700"],
// 	subsets: ["latin"],
// 	display: "swap",
// 	variable: "--font-space-grotesk",
// });

// const notoSansTC = Noto_Sans_TC({
// 	weight: ["400", "500", "700"],
// 	subsets: ["latin"],
// 	display: "swap",
// 	variable: "--font-noto-sans-tc",
// });

export const metadata = {
	title: "梅竹黑客松十週年召集令",
	description: "Meichu Hackathon 10y Anniversary Web",
	image: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
            <head>
                {/* TEMP */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap" />
            </head>
            {/* ${spaceGrotesk.variable} ${notoSansTC.variable} */}
			<body className={` text-sm sm:text-base xl:text-lg`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
