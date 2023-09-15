export const metadata = {
    title: "歷年作品",
    // TODO: Decide description
    description: "歷年作品",
}

export default function TeamsLayout({ children }) {
    return (
        <div className="grid">
            {children}
        </div>
    );
}