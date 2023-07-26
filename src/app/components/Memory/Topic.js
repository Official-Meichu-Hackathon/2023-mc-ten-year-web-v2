import Image from "next/image"

export const Download = "下載.pdf";

export function Topic({img, company_name, topic_name, topic_intro, downloadFile, file}){
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
            <div className="grid max-h-fit"
            >
                <h2 className="text-primary-gradient text-left w-fit">{company_name}</h2>
                <div className="grid gap-y-4 min-w-[20ch]">
                    <p>主題：{topic_name}</p>
                    <p className="whitespace-pre-line">說明：{topic_intro}</p> 
                    
                </div>
                {(downloadFile !== "") && (
                    <a className="flex justify-end" download="down.png" href={file} >下載.pdf</a>
                )}
            </div>
        </div>
    );
}