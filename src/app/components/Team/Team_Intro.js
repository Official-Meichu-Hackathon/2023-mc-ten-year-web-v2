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

    const handleOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            console.log("ouside clicked");
            onClose();
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50 duration-500 ease-out transition-all inset-0" onClick={handleOutsideClick}>
            <div className="fixed top-0 left-0 md:w-4/5 w-full h-fit bg-black bg-opacity-50 flex items-center justify-start overflow-auto z-50 duration-500 ease-out transition-all inset-0" style={{ position: 'fixed', top: 0 }}>
                <div className="w-full bg-primary overflow-y-auto">
                    <button className="float-right mt-16 mr-16" onClick={onClose}>
                        <Image src={close} alt="close" width={30} height={30} className="" />
                    </button>
                    <div className="">
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