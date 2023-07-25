import Image from "next/image";
import Link from "next/link";

export const viewMore = "查看更多";

// TODO: Short description causes layout break
export function CardH({ img, title, contents, moreInfo, link }) {
    return(
        <div className="card nue-concave frost-25 grid md:flex p-8 gap-6 place-content-center max-w-screen-md content-stretch rounded-[4rem] snap-center">
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
                    {contents.map((content, index) => (
                        <p key={index}>
                            {content}
                        </p>
                    ))}
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

export function CardV({ img, title, contents, moreInfo, link }) {
    return(
        <div className="card nue-concave frost-25 grid p-8 gap-6 place-content-center max-w-screen-lg content-stretch rounded-[4rem] snap-center">
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
                    {contents.map((content, index) => (
                        <p key={index}>
                            {content}
                        </p>
                    ))}
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