import Image from "next/image";
import Link from "next/link";


export function CardV({img, title, contents, moreInfo, link}) {
  return (
      <div className="card max-h-[32rem] aspect-3/4 team-card-shadow max-w-screen-lg rounded-[2rem] snap-center">
        <Image
            src={img}
            alt="Ref image"
            className="aspect-3/2 max-h-[20rem] card-rounded object-cover h-[16rem]" /*具體的高度你再看要多少 rem*/
            priority
        />
        <div className="px-6 py-8 h-[15rem] overflow-hidden">
          <div className="overflow-hidden">
            <div className="w-fit team-title pb-4 h-[2.2rem]">{title}</div>
          </div>
          <div className="h-full max-h-[8.5rem] pt-4">
            <div className="line-clamp-4">
              {contents.map((content, index) => (
                  <p key={index} className="">
                    {content}
                  </p>
              ))}
            </div>
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
