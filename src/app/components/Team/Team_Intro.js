"use client";
import React from 'react';
import Image from "next/image";
import { Card_title } from "./Card_title";
import { Project_Intro } from "./Project_Intro";
import { Board } from "./Comments";
import { useState } from 'react';
import { useEffect } from 'react';
import close from "../../../../public/img/Team/close.svg";
import "./local.scss";
import "../../globals.scss"

export default function Team_Intro({ onClose, title, group, name, mail, github, tags, view, msg, discrip, comments }) {
    const [popupTop, setPopupTop] = useState('50vh');
    
    useEffect(() => {
        const toolbarHeight = window.scrollY;

        // 設定彈出視窗的位置
        const popupPosition = `${toolbarHeight}px`;
        setPopupTop(popupPosition);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-100000">
            <div className="fixed top-0 left-0 md:w-4/5 w-full h-fit bg-black bg-opacity-50 flex items-center justify-start overflow-auto z-100000" style={{ position: 'fixed', top: 0 }}>
                {/* 彈出視窗內容 */}
                <div className="w-full bg-primary overflow-y-auto">
                    {/* <button onClick={() => {
                        onClose();
                    }} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full">
                        關閉
                    </button> */}
                    <div className="pt-32">
                        <Card_title title={title} group={group} name={name} mail={mail} github={github} tags={tags} view={view} msg={msg} />
                        {/* <Project_Intro discrip={discrip} /> */}
                    </div>
                    <div className="pt-4">
                        <Board comments={comments} />
                    </div>
                </div>
            </div>
        </div>
    );
}