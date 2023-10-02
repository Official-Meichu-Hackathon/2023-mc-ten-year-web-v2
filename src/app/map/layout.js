import "@/app/scss/map.scss";
import localFont from "next/font/local";

// Google Fonts
const sourceHansSerifTW = localFont({
    src: [
        {
            path: "../font/SourceHanSerifTW_R.otf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../font/SourceHanSerifTW_B.otf",
            weight: "700",
            style: "normal"
        }
    ],
    display: "swap",
	variable: "--font-source-hans-serif-tw",
});

// Metadata
const title = "場地圖";
const description = "在這個頁面中，我們會展示梅竹黑客松的場地圖。";
const baseUrl = process.env.URL.endsWith("/") ? process.env.URL.slice(0, -1) : process.env.URL;
const url = `${baseUrl}/map`;
export const metadata = {
    title: {
        default: title,
        template: "%s 梅竹黑客松場地圖",
    },
    description,
    openGraph: {
        title,
        description,
        url,
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
    },
}

export default function MapLayout({ children }) {
    return (
        <div className={`${sourceHansSerifTW.variable} grid place-items-center px-8 py-16 bg-map overflow-scroll`}>
            {children}
        </div>
    );
}