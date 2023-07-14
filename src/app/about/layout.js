export const metadata = {
    title: "關於我們",
    description: "什麼是梅竹黑客松?",
}

export default function AboutUsLayout({ children }) {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}