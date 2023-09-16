//slides
import { useState, useEffect } from "react";
import Image from "next/image";
import teamphoto1 from "../../../../../public/img/Team/teamphoto1.jpg";
import teamphoto2 from "../../../../../public/img/Team/teamphoto2.webp";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";



// TODO: Pass in real sliders
export function ImageSlider() {
    const [openImg, setOpenImg] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    function openPopup() {
        document.documentElement.classList.add("overflow-y-hidden");
        setOpenImg(true);
    };

    function closePopup() {
        document.documentElement.classList.remove("overflow-y-hidden");
        setOpenImg(false);
    };

    function handleOutsideClick(e) {
        if (e.target === e.currentTarget) {
            console.log(" BG clicked, close image popup");
            closePopup();
        }
    };

    function handleKeyDown(e) {
        if (e.key === "Escape" && openImg) {
            console.log(e.key, ": close image popup");
            closePopup();
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    })
	
	function prevSlide() {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	function nextSlide() {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	function goToSlide(slideIndex) {
		setCurrentIndex(slideIndex);
	};



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

	return (
		<>
            <div className="relative h-full w-full ">
                <Image
                    src={slides[currentIndex].path}
                    alt="msg Icon"
                    className="h-full w-full object-cover"
                    quality={100}
                    priority
                />

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
            {openImg && (
                <div className="fixed grid inset-0 place-content-center bg-black bg-opacity-75 z-20" onClick={handleOutsideClick}>
                    <Image
                        src={teamphoto2}
                        alt="close"
                        className="object-contain md:scale-[80%]"
                        quality={100}
                        priority
                    />
                </div>
            )}
        </>
	);
}
