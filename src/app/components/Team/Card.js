import Image from "next/image";
import Link from "next/link";


export function CardV({ img, title, contents, moreInfo, link, group, award }) {
    return(
        <div className="card max-h-29rem aspect-3/4 team-card-shadow max-w-screen-lg rounded-[2rem] snap-center">
            <Image
                src={img}
                alt="Ref image"
                className="max-h-17.5rem aspect-3/2 max-w-full card-rounded object-cover"
                priority
            />
            <div className="px-6 py-8 h-10rem">
                <h2 className="w-fit pb-4 overflow-hidden">{title}</h2>
                <div className="max-h-full">
                    {contents.map((content, index) => (
                        <p key={index} className="">
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