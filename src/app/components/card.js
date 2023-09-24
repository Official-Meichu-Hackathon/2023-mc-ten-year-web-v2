import "@/app/scss/card.scss"
import Image from "next/image";
import Link from "next/link";

// Markdown
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const viewMore = "查看更多";

// TODO: Short description causes layout break
export function CardH({ className, img, title, contents, moreInfo, link }) {
    return(
        <div className={`${className} nue-card-md grid md:flex p-8 gap-6 place-content-center max-w-screen-md content-stretch snap-center rounded-[4em]`}>
            <div className="max-h-full aspect-4/3 lg:aspect-4/5">
                <Image
                    src={img}
                    alt="Ref image"
                    className="h-full rounded-[2rem] object-cover"
                    priority
                />
            </div>
            <div className="grid max-h-fit p-4 gap-y-8">
                <h2 className="text-primary-gradient text-center w-fit place-self-center">{title}</h2>
                <div className="grid gap-y-4 min-w-[20ch]">
                    <p className="whitespace-pre-line">
                        {contents}
                    </p>
                </div>
                {(moreInfo !== "") && (
                    <Link href={link} className="place-self-end text-accent">
                        {moreInfo}
                    </Link>
                )}
            </div>
        </div>
    );
}

export function CardV({ className, img, title, contents, moreInfo, link }) {
    return(
        <div className={`${className} nue-card-md grid p-8 gap-6 place-content-center max-w-screen-lg content-stretch snap-center rounded-[4em]`}>
            <div className="max-h-full aspect-4/3">
                <Image
                    src={img}
                    alt="Ref image"
                    className="h-full rounded-[2rem] object-cover"
                    priority
                />
            </div>
            <div className="grid max-h-fit p-4 gap-y-8">
                <h2 className="text-primary-gradient text-center w-fit place-self-center">{title}</h2>
                <div className="grid gap-y-4 min-w-[20ch]">
                    <p className="whitespace-pre-line">
                        {contents}
                    </p>
                </div>
                {(moreInfo !== "") && (
                    <Link href={link} className="place-self-end text-accent">
                        {moreInfo}
                    </Link>
                )}
            </div>
        </div>
    );
}

export function Card({ className, size, nue, children }) {
    return (
        <div className={`${className} ${(size === "sm") ? "card-sm" : "card-md"}
                         ${(nue === "sm") ? "nue-card-sm" : "nue-card-md"}
                         snap-center`}>
            {children}
        </div>
    );
}   

// ? rounded: Whether the image is rounded. Defaults to true.
// ? contain: Whether the image should fit contain. Defaults to "cover".
export function CardImg({ className, img, rounded = true, contain }) {
    return (
        <div className={`${className} card-img`}>
            <Image
                src={img}
                alt="Ref image"
                className={`${contain ? "object-contain" : "object-cover"} ${rounded ? "round" : ""} h-full`}
                priority
            />
        </div>
    );
}

export function CardContent({ className, title, content, moreInfo, link, titleAlign }) {
    return (
        <div className={`${className} card-content`}>
            <span className={`content-title ${titleAlign === "center" ? "justify-self-center" : ""} text-[1.75em]`}>{title}</span>
            <div>
                <ReactMarkdown  remarkPlugins={[remarkGfm, {singleTilde: false}]}
                                components={{ p: ({node, ...props}) => <p>{props.children}</p> }}>
                    {content}
                </ReactMarkdown>
            </div>
            {(moreInfo && moreInfo !== "") && (
                (link.startsWith("https://")) ? (
                    <a href={link} target="_blank" rel="noreferrer noopener" className="more-info">
                        {moreInfo}
                    </a>
                ) : (
                    <Link href={link} className="place-self-end text-accent">
                        {moreInfo}
                    </Link>
                )
            )}
        </div>
    );
}