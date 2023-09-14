import { useEffect, useState } from "react";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";



export default function AddComment({ closePopup }) {
	const [inputValue, setInputValue] = useState("");
	const [textareaValue, setTextareaValue] = useState("");

	const handleOutsideClick = (event) => {
		if (event.target === event.currentTarget) {
			closePopup();
		}
	};

	const handleFormSubmit = () => {
		setInputValue("");
		setTextareaValue("");
		closePopup();
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
		<div className="fixed grid inset-0 place-content-center bg-black bg-opacity-75 z-50" onClick={handleOutsideClick}>
			<div className="grid grid-rows-[auto_1fr] w-[min(80vw,_32rem)] h-[min(50vh,_37rem)] p-8 bg-primary rounded-[2rem]">
				<div className="justify-self-end">
					<button className="h-8 p-1 aspect-square" onClick={closePopup}>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</div>
				<div className="grid grid-rows-[auto_1fr_auto] gap-y-6">
                    <div className="input-group">
                        <label for="username" className="font-bold">
                            <span><FontAwesomeIcon icon={faUser} className="mr-2" />暱稱</span>
                        </label>
                        <input id="username" type="text" value={inputValue} className="p-2 bg-transparent rounded-lg"
                               onChange={(e) => setInputValue(e.target.value)}/>
                    </div>

					<div className="input-group">
						<label for="comment" className="font-bold">
                            <span><FontAwesomeIcon icon={faMessage} className="mr-2" />留言內容</span>
                        </label>
                        <textarea id="comment" type="text" value={textareaValue} className="block resize-none p-2 bg-transparent rounded-lg"
                                  onChange={(e) => setTextareaValue(e.target.value)}/>
					</div>
					
					<button className="justify-self-center px-4 py-2 btn-nue-25 pill font-bold text-accent" onClick={handleFormSubmit}>
                        送出
					</button>
				</div>
			</div>
		</div>
	);
}