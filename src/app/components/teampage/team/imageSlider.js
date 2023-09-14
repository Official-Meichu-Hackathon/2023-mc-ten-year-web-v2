//slides
import { useState } from "react";
import Image from "next/image";
import teamphoto1 from "../../../../../public/img/Team/teamphoto1.jpg";
import teamphoto2 from "../../../../../public/img/Team/teamphoto2.webp";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";



export function ImageSlider({ closePopup, openPopup }) {
	const slides = [
		{
			path: teamphoto1,
		},
		{
			path: teamphoto2,
		},
		{
			path: teamphoto1,
		},
		{
			path: teamphoto2,
		},
		{
			path: teamphoto1,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className="wrapper-section">
			<h2 className="hidden md:block whitespace-nowrap">
				隊伍簡報
			</h2>
			<div className="relative h-full w-full ">
				<Image
					src={slides[currentIndex].path}
					alt="msg Icon"
					className="h-full w-full object-cover"
                    quality={100}
                    priority
				/>

				{/*pop up button for viewing picture*/}
				<div className="absolute -bottom-4 md:bottom-6 right-6 flex items-end gap-x-4 [&_>_*]:shadow-md">
					<button className="flex justify-center items-center w-9 h-9 bg-primary pill" onClick={() => openPopup()}>
                        <FontAwesomeIcon icon={faExpand} />
                    </button>

					<div className="flex items-center gap-x-2 h-9 p-2 bg-primary pill">
						{/* Left Arrow */}
						<button className="p-2" onClick={prevSlide}>
							<FontAwesomeIcon icon={faCaretLeft} />
						</button>

						{/* Current Slide Index */}
						<span className="text-lg font-bold flex-shrink-0 w-[1rem] text-center">
							{currentIndex + 1}
						</span>

						{/* Right Arrow */}
						<button className="p-2" onClick={nextSlide}>
                            <FontAwesomeIcon icon={faCaretRight} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
