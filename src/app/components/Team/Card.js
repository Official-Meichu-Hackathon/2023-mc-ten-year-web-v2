import Image from "next/image";
import Link from "next/link";

export function CardV({ img, title, contents, moreInfo, link, group, award }) {
    return(
        <div className="card team-card-shadow frost-25 grid gap-6 place-content-center max-w-screen-lg content-stretch rounded-[2rem] snap-center">
            <div className="max-h-280px aspect-4/3 relative">
                <Image
                    src={img}
                    alt="Ref image"
                    className="h-full m-0 p-0 card-rounded object-cover"
                    priority
                />
            </div>
            <div className="grid max-h-fit p-4 gap-y-8">
                <h2 className="w-fit ">{title}</h2>
                <div className="grid gap-y-4 min-w-[20ch]">
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