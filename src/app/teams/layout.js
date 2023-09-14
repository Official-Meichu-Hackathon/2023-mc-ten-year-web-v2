export const metadata = {
    title: "歷年作品",
    // TODO: Decide description
    description: "歷年作品",
}

export default function TeamsLayout({ children }) {
    return (
        <div className="wrapper my-16 md:my-10">
            {children}
        </div>
    );
}