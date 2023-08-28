"use client";
import Image from "next/image";
import Link from "next/link";
import mailIcon from "../../../../public/img/Team/email-outline.svg";
import githubIcon from "../../../../public/img/Team/github.svg";
import eyeIcon from "../../../../public/img/Team/eye-outline.svg";
import msgIcon from "../../../../public/img/Team/message-outline.svg";
import "./local.scss";
import "../../globals.scss"

export function Card_title({ title, group, name, mail, github, tags, view, msg }) {
    return (
        <div className="">
            <div className="bg-card-1 md:px-16 px-8 py-12 pb-6">
                <div className="flex justify-between items-start">
                    <h1 className="hidden md:block">{title}</h1>
                    <h2 className="block md:hidden">{title}</h2>
                    {/* <Image src={ close } alt="close" width={30} height={30} className="pt-4"/> */}
                </div>
                <p className="text-title">{group} ｜ {name}</p>
                <div className="space-y-1">
                    <div className="flex">
                        <a href={`mailto:${ mail }`} className="flex items-center">
                            <Image src={mailIcon} alt="Mail Icon" width={20.83} height={16.67} />
                            <p className="pl-2 text-tag">{mail}</p>
                        </a>
                    </div>
                    <div className="flex">
                        <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Image src={githubIcon} alt="GitHub Icon" width={20.83} height={16.67} />
                            <p className="pl-2 text-tag">{github}</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-card-2 md:px-16 px-8 py-4 flex justify-between items-center">
                <div className="flex space-x-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-primary">
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="hidden md:block">
                    <div className="flex space-x-4">
                        <div className="flex">
                            <Image src={eyeIcon} alt="eye Icon" width={20.83} height={16.67} />
                            <p className="pl-2 text-tag">{view}</p>
                        </div>
                        <div className="flex">
                            <Image src={msgIcon} alt="Message Icon" width={20.83} height={16.67} />
                            <p className="pl-2 text-tag">{msg}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}