export const metadata = {
    title: "常見問題",
    description: "在這個頁面之中，我們會將大家的問題一併答覆，你可以根據熱門標籤或是直接搜尋問題關鍵字，解決自己的疑惑。",
}

export default function QnaLayout({ children }) {
    return (
        <div className="wrapper my-16">
            {children}
        </div>
    );
}