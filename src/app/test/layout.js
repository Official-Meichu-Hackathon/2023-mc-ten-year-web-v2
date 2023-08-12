export const metadata = {
    title: "測試功能",
    description: "在這個頁面之中，可以測試頁面功能",
}

export default function TestLayout({ children }) {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}