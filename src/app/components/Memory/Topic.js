import Image from "next/image"
import Link from "next/link";
import { useState, useEffect } from "react";

function Mobile({img, company_name, topic_name, topic_intro, downloadFile, url, fileName}){

    return(
        <div className="h-[165px] w-[326px] border-gray-400 bg-gray-200 nue-concave relative p-6 gap-6 aspect-1/4 rounded-[4rem] md:flex ">
            <h2 className="h-[20px] w-[261px] absolute left-[50px] top-[20px] text-primary-gradient text-[16px]">{company_name}</h2>
            <div className="h-[85px] w-[85px] absolute top-[51px]">
                <Image
                    src={img}
                    alt="Ref image"
                    className="w-auto h-auto  rounded-[2rem] object-cover"
                    priority
                />
            </div>
            <div className="">
                
                <div className="text-base grid text-[12px] h-[40px] absolute left-[113px] top-[63px] w-[176px]">
                    <text>主題：{topic_name}</text>
                </div>
                {(downloadFile !== "") && (
                    <Link className="flex absolute top-[120px] left-[250px] justify-end underline text-blue-400" href={url} download={fileName} >下載.pdf</Link>
                )}
            </div>
        </div>

    );
}

function PC({img, company_name, topic_name, topic_intro, downloadFile, url, fileName}) {
    return (
        <div className="h-auto w-auto border-gray-400 bg-gray-200 nue-concave p-6 gap-6 aspect-1/4 rounded-[4rem] md:flex sm:flex">
            <div className="h-1/3 w-1/3 aspect-4/3">
                <Image
                    src={img}
                    alt="Ref image"
                    className="w-auto h-auto rounded-[2rem] object-cover"
                    priority
                />
            </div>
            <div className="relative grid max-h-fit ">
                <h2 className="text-primary-gradient text-left w-fit">{company_name}</h2>
                <div className="text-base grid leading-8 min-w-[20ch]">
                    <text>主題：{topic_name}</text>
                    <text className="whitespace-pre-line">說明：{topic_intro}</text> 

                </div>
                {(downloadFile !== "") && (
                    <Link className="flex absolute bottom-0 right-0 justify-end underline text-blue-400" href={url} download={fileName} >下載.pdf</Link>
                )}
            </div>
        </div>
    );
}

const useRWD=()=>{
    const [mobile,setMobile]=useState("PC");

    const handleRWD=()=>{
        if(window.innerWidth>768)
            setMobile("PC");
        else
            setMobile("mobile");
    }

    useEffect(()=>{
    
        window.addEventListener('resize',handleRWD);
        handleRWD(); 
        
        return(()=>{
            window.removeEventListener('resize',handleRWD);
        })
    },[]);

    return mobile;
}

export function Topic({img, company_name, topic_name, topic_intro, downloadFile, url, fileName}){
    const device=useRWD();
    if (device==="PC") {
        return (
            <PC img={img} company_name={company_name} topic_name={topic_name} topic_intro={topic_intro} downloadFile={downloadFile} url={url} fileName={fileName}> </PC>
        );
    }
    else {
        return (
            <Mobile img={img} company_name={company_name} topic_name={topic_name} topic_intro={topic_intro} downloadFile={downloadFile} url={url} fileName={fileName}> </Mobile>
            
        );
    } 

}

