import Image from "next/image";
import Link from "next/link";

export function CardV({ img, title, contents, moreInfo, link, group, award }) {
    return(
        <div className="card banner-filter frost-25 grid gap-6 place-content-center max-w-screen-lg content-stretch rounded-[4rem] snap-center">
            <div className="max-h-full aspect-4/3 relative">
                <Image
                    src={img}
                    alt="Ref image"
                    className="h-full m-0 p-0 card-rounded object-cover"
                    priority
                />
                <div className="flex pl-6 space-x-36">
                    <div className="absolute bottom-4 card-tag-1 px-4 py-1 rounded-[4rem]">{group}</div> {/* 使用 absolute 定位，將標籤放在圖片上方 */}
                    <div className="absolute bottom-4 card-tag-2 px-4 py-1 rounded-[4rem]">{award}</div> {/* 使用 absolute 定位，將標籤放在圖片上方 */}
                </div>
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
                    <Link href={link} className="place-self-end text-accent">
                        {moreInfo}
                    </Link>
                )}
            </div>
        </div>
    );
}