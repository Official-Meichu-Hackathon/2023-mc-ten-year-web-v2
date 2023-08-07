import Image from "next/image";
import Link from "next/link";


export function CardV({img, title, contents, moreInfo, link}) {
  return (
      <div className="card max-h-[32rem] aspect-3/4 team-card-shadow max-w-screen-lg rounded-[2rem] snap-center">
        <Image
            src={img}
            alt="Ref image"
            className="max-h-[20rem] aspect-3/2 max-h-full card-rounded object-cover"
            priority
        />
        <div className="px-6 py-8 h-[15rem] overflow-hidden text-ellipsis">
          <div className="overflow-hidden">
            <div className="w-fit team-title pb-4 whitespace-nowrap text-ellipsis">{title}</div>
          </div>
          <div className="h-full max-h-[5rem] text-ellipsis">
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
