"use client";
import React from 'react';
import { Card_title } from "./Card_title";
import { Project_Intro } from "./Project_Intro";
import { Board } from "./Comments";
import { useState, useEffect } from 'react';
import close from "../../../../public/img/close.svg";

export default function Team_Intro({ onClose, title, group, name, mail, github, tags, view, msg, discrip, comments }) {
    const [popupTop, setPopupTop] = useState('50vh');
    const toolbarHeight = window.outerHeight - window.innerHeight;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="fixed top-0 left-0 md:w-4/5 w-full h-fit bg-black bg-opacity-50 flex items-center justify-start" style={{ position: 'fixed', top: toolbarHeight }}>
                {/* 彈出視窗內容 */}
                <div className="w-full bg-primary overflow-y-auto">
                    {/* <button className="float-right" onClick={onClose}>
                        <Image src={close} alt="close" width={30} height={30} className="pt-4" />
                    </button> */}
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