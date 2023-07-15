export const metadata = {
    title: "關於我們",
    description: "在這個頁面中，我們會介紹梅竹黑客松的競賽精神與意義，簡單總結過去各年度的活動內容、賽制與工作人員，並以時間軸的方式呈現每年的特點或制度創新。",
}

export default function AboutUsLayout({ children }) {
    return (
        <div className="wrapper my-16">
            {children}
        </div>
    );
}