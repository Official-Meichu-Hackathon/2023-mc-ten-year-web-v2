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
		<div
			className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-40"
			onClick={handleOutsideClick}
		>
			<div className="bg-white p-8 w-4/5 rounded-[2rem] z-50">
				<div className="flex justify-end">
                    <button className="h-8 p-1 aspect-square" onClick={closePopup}>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</div>
				<div className="flex flex-col justify-center items-center text-center">
					<h2 className="text-primary-gradient mb-5">
						Q: {selectedQuestion.question}
					</h2>
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
