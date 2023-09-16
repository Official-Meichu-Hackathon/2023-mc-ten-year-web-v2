import { useEffect } from "react";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Dialog({ selectedQuestion, closePopup }) {
	const handleOutsideClick = (event) => {
		if (event.target === event.currentTarget) {
			closePopup();
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === "Escape") {
			closePopup();
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyPress);
		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, []);

	return (
		<div className="fixed grid inset-0 place-content-center bg-black bg-opacity-75 z-20" onClick={handleOutsideClick}>
			<div className="grid grid-rows-[auto_1fr] w-[min(80vw,_64rem)] min-w-[200px] p-8 bg-primary rounded-[2rem]">
                <div className="justify-self-end">
					<button className="h-8 p-1 aspect-square" onClick={closePopup}>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</div>
				<div className="flex flex-col justify-center items-center gap-5 text-center">
                    <span className="text-3xl text-primary-gradient font-bold text-center">
                        Q: {selectedQuestion.question}
                    </span>
					<div className="overflow-auto h-64">
						{selectedQuestion.answers.map((answer, index) => (
							<p key={index}>{answer}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
