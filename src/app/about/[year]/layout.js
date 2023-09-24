import { fetcher } from "@/app/utils/fetcher";

// Metadata
export async function generateMetadata({ params }) {
    const baseUrl = process.env.URL.endsWith("/") ? process.env.URL.slice(0, -1) : process.env.URL;
    const data = await fetcher(params.year ? `${baseUrl}/api/about/${params.year}` : null);

    const title = params.year;
    const description = data.description;
    const url = `${baseUrl}/about`;

    return {
        title,
        description,
        openGraph: {
            title: "關於 " + title + " 梅竹黑客松",
            description,
            url,
            images: [`/public/img/banner/${params.year}.webp`],
        },
        twitter: {
            card: "summary_large_image",
            title: "關於 " + title + " 梅竹黑客松",
            description,
        },
    }
}

export default function AboutUsLayout({ children }) {
    return children;
}