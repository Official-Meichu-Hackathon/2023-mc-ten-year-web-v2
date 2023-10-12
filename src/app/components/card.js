import "@/app/scss/card.scss"
import Image from "next/image";
import Link from "next/link";

// Markdown
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const viewMore = "查看更多";



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
            {/* // TODO: \n problems */}
            <div className="whitespace-pre-line">
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