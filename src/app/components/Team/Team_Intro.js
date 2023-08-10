"use client";
import React from 'react';
import Image from "next/image";
import { Card_title } from "./Card_title";
import { Project_Intro } from "./Project_Intro";
import { Board } from "./Comments";
import close from "../../../../public/img/Team/close.svg";

export default function Team_Intro({ onClose, title, group, name, mail, github, tags, view, msg, discrip, comments }) {

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-100000">
            <div className="fixed top-0 left-0 md:w-4/5 w-full h-fit bg-black bg-opacity-50 flex items-center justify-start overflow-auto" style={{ position: 'fixed', top: 0 }}>
                {/* 彈出視窗內容 */}
                <div className="w-full bg-primary overflow-y-auto">
                    <button className="float-right mt-16 mr-16" onClick={() => { console.log('Card clicked'); onClose();}}>
                        <Image src={close} alt="close" width={30} height={30} className="" />
                    </button>
                    <div className="">
                        <Card_title title={title} group={group} name={name} mail={mail} github={github} tags={tags} view={view} msg={msg} />
                        <Project_Intro discrip={discrip} />
                    </div>
                    <div className="pt-4">
                        <Board comments={comments} />
                    </div>
                </div>
            </div>
        </div>
    );
}