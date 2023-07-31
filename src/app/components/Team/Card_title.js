"use client";
import Image from "next/image";
import Link from "next/link";
import mailIcon from "../../../../public/img/email-outline.svg";
import githubIcon from "../../../../public/img/github.svg";
import close from "../../../../public/img/close.svg";
import eyeIcon from "../../../../public/img/eye-outline.svg";
import msgIcon from "../../../../public/img/message-outline.svg";

export function Card_title({title, group, name, mail, github, tags, view, msg}){
    return(
        <div className="">
            <div className="bg-card-1 px-16 py-12 pb-6">
                <div className="flex justify-between">
                    <h1>{ title }</h1>
                    <Image src={ close } alt="close" width={30} height={30} />
                </div>
                <p className="text-title">{ group } ｜ { name }</p>
                <div className="space-y-1">
                    <div className="flex">
                        <Image src={ mailIcon } alt="Mail Icon" width={20.83} height={16.67} />
                        <p className="pl-2 text-tag">{ mail }</p>
                    </div>
                    <div className="flex">
                        <Image src={ githubIcon } alt="GitHub Icon" width={20.83} height={16.67} />
                        <p className="pl-2 text-tag">{ github }</p>
                    </div>
                </div>
            </div>
            <div className="bg-card-2 px-16 py-4 flex justify-between items-center">
                <div className="flex space-x-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-primary">
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4">
                    <div className="flex">
                        <Image src={ eyeIcon } alt="eye Icon" width={20.83} height={16.67} />
                        <p className="pl-2 text-tag">{ view }</p>
                    </div>
                    <div className="flex">
                        <Image src={ msgIcon } alt="Message Icon" width={20.83} height={16.67} />
                        <p className="pl-2 text-tag">{ msg }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}