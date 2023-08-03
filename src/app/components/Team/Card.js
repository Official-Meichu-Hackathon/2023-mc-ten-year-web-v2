import Image from "next/image";
import Link from "next/link";

export function CardV({ img, title, contents, moreInfo, link, group, award }) {
    return(
        <div className="card max-h-31.25rem aspect-3/4 team-card-shadow frost-25 grid gap-6 place-content-center max-w-screen-lg content-stretch rounded-[2rem] snap-center">
            <div className="max-h-17.5rem relative">
                <Image
                    src={img}
                    alt="Ref image"
                    className="max-h-17.5rem aspect-3/2 max-w-full card-rounded object-cover"
                    priority
                />
            </div>
            <div className="p-4">
                <h2 className="w-fit ">{title}</h2>
                <div className="">
                    {contents.map((content, index) => (
                        <p key={index}>
                            {content}
                        </p>
                    ))}
                </div>
                {(moreInfo !== "") && (
                    <Link href={link} className="place-self-end text-accent min-w-[20ch]">
                        {moreInfo}
                    </Link>
                )}
            </div>
        </div>
    );
}