import Image from "next/image"
import Link from "next/link";

export function Topic({img, company_name, topic_name, topic_intro, downloadFile, url, fileName}){
    return (
        <div className="h-76 w-10/12  border-gray-400 bg-gray-200 nue-concave frost-25 md:flex p-8 gap-6 aspect-1/4 rounded-[4rem]">
            <div className="h-1/3 w-1/3 aspect-4 / 3">
                <Image
                    src={img}
                    alt="Ref image"
                    className="w-auto h-auto rounded-[2rem] object-cover"
                    priority
                />
            </div>
            <div className="grid max-h-fit">
                <h2 className="text-primary-gradient text-left w-fit">{company_name}</h2>
                <div className="text-base grid leading-8 min-w-[20ch]">
                    <text>主題：{topic_name}</text>
                    <text className="whitespace-pre-line">說明：{topic_intro}</text> 
                    
                </div>
                {(downloadFile !== "") && (
                    <Link className="flex justify-end pr-4 underline text-blue-400" href={url} download={fileName} >下載.pdf</Link>
                )}
            </div>
        </div>
    );
}

