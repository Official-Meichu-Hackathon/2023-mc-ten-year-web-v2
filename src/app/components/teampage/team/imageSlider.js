//slides
import { useState, useEffect } from "react";
import { setBodyUnscrollable, setBodyScrollable } from "@/app/utils/helper";
import Image from "next/image";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";



export function ImageSlider({ className, slides, contain = false }) {
    const [openImg, setOpenImg] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    function openPopup() {
        setBodyUnscrollable();
        setOpenImg(true);
    };

    function closePopup() {
        setBodyScrollable();
        setOpenImg(false);
    };

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

    function handleOutsideClick(e) {
        if (e.target === e.currentTarget) {
            closePopup();
        }
    };

    function handleKeyDown(e) {
        if (openImg) {
            switch (e.key) {
                case "Escape":
                    closePopup();
                    break;
                case "ArrowLeft":
                    prevSlide();
                    break;
                case "ArrowRight":
                    nextSlide();
                    break;
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    })

	return (
		<>
            <div className={`${className} relative h-full w-full bg-primary aspect-video`}>
                <Image
                    src={slides[currentIndex].img}
                    alt={"img" + currentIndex}
                    className={`h-full w-full object-cover ${contain && "xl:object-contain"}`}
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
                        <span className="text-lg font-bold flex-shrink-0 w-[1rem] text-center select-none">
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
                        src={slides[currentIndex].img}
                        alt={"img" + currentIndex + "_full"}
                        className="object-contain md:scale-[80%]"
                        quality={100}
                        priority
                    />
                </div>
            )}
        </>
	);
}