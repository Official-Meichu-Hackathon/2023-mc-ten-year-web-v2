export const metadata = {
    title: "歷年作品",
    // TODO: Decide description
    description: "歷年作品",
}

export default function WorksLayout({ children }) {
    return (
        <div className="wrapper my-16">
            {children}
        </div>
    );
}