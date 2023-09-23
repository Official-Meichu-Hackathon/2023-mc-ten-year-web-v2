// Metadata
const title = "關於我們";
const description = "在這個頁面中，我們會介紹梅竹黑客松的競賽精神與意義，簡單總結過去各年度的活動內容、賽制與工作人員，並以時間軸的方式呈現每年的特點或制度創新。";
const baseUrl = process.env.URL.endsWith("/") ? process.env.URL.slice(0, -1) : process.env.URL;
const url = `${baseUrl}/about`;
export const metadata = {
    title: {
        default: title,
        template: "關於 %s 梅竹黑客松",
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

export default function AboutUsLayout({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}