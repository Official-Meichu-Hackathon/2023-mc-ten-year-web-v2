"use client";
import "@/app/scss/team.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ImageSlider } from "./imageSlider";
import { TeamTitle } from "./teamTitle";
import { ProjectIntro } from "./projectIntro";
import { CommentBoard } from "./commentBoard";
import teamphoto from "../../../../../public/img/Team/teamphoto.png"



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
        <div className="fixed inset-0 bg-black bg-opacity-75 z-40" onClick={handleOutsideClick}>
			<div className="fixed inset-0 md:right-1/5 bg-primary overflow-y-scroll">
				<div className="md:hidden h-[60vw] md:h-[45vw] w-full bg-primary">
					<div className="h-full">
						{<ImageSlider openPopup={openPopup} closePopup={closePopup} />}
					</div>
				</div>
				
				<TeamTitle title={title} group={group} name={name}
						   mail={mail} github={github} tags={tags}
						   view={view} msg={msg} onClose={onClose}/>

                <article className="wrapper-padding-sm grid gap-y-18 py-12">
                    <ProjectIntro descrip={descrip} />
                    {/* // TODO: Why h-[45vw] ? */}
                    <section className="hidden md:block w-full">
                        <div className="h-full">
                            <ImageSlider openPopup={openPopup} closePopup={closePopup} />
                        </div>
                    </section>
                </article>

				<div>
					{openCard && (
						<div className="fixed grid inset-0 place-content-center bg-black bg-opacity-75" onClick={handleSlideOutsideClick}>
							<Image
								src={teamphoto}
								alt="close"
								width={900}
								height={900}
								className="w-[85.5vw] h-[48.09375vw]"
							/>
						</div>
					)}
				</div>

				<div className="pt-4 mt-[3rem]">
					<CommentBoard comments={comments} />
				</div>
			</div>
		</div>
    );
}