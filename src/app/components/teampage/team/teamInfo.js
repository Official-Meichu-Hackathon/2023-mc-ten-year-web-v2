"use client";
import "@/app/scss/team.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ImageSlider } from "./imageSlider";
import { TeamTitle } from "./teamTitle";
import { ProjectIntro } from "./projectIntro";
import { CommentBoard } from "./commentBoard";
import teamphoto2 from "../../../../../public/img/Team/teamphoto2.webp"



export default function TeamInfo({ onClose, title, group, name, mail, github, tags, view, msg, descrip, comments }) {

    const [openCard, setOpenCard] = useState(false);

    const openPopup = () => {
        setOpenCard(true);
        console.log({ openCard });
    };

    const closePopup = () => {
        setOpenCard(false);
    };

    const handleOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            console.log("outside clicked");
            onClose();
        }
    };

    const handleSlideOutsideClick = (event) => {
        if (event.target === event.currentTarget) {
            console.log("outside clicked");
            closePopup();
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
            if (openCard) {
                closePopup();
            } else {
                onClose();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-20" onClick={handleOutsideClick}>
			<div className="fixed inset-0 md:right-1/5 bg-primary overflow-y-scroll">
				<div className="md:hidden w-full h-fit bg-secondary">
                    <ImageSlider openPopup={openPopup} closePopup={closePopup} />
				</div>
				
				<TeamTitle title={title} group={group} names={name}
						   mail={mail} github={github} tags={tags}
						   view={view} msg={msg} onClose={onClose} />

                <article className="wrapper-padding-sm grid gap-y-18 py-12">
                    <ProjectIntro descrip={descrip} />
                    <section className="hidden md:block w-full h-fit">
                        <ImageSlider openPopup={openPopup} closePopup={closePopup} />
                    </section>
                </article>
                
                <div className="pt-4 mt-[3rem]">
					<CommentBoard comments={comments} />
				</div>
			</div>

            {openCard && (
                <div className="fixed grid inset-0 place-content-center bg-black bg-opacity-75 z-1 isolate" onClick={handleSlideOutsideClick}>
                    <Image
                        src={teamphoto2}
                        alt="close"
                        className="object-contain md:scale-[80%]"
                        quality={100}
                        priority
                    />
                </div>
            )}
		</div>
    );
}
