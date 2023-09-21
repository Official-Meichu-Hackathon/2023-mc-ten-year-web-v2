import "@/app/scss/qna.scss"
import { useState } from "react";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";



export default function Qcard({ data }) {
	const [expanded, setExpanded] = useState(false);

    function toggleQcard() {
        setExpanded(prevExpanded => !prevExpanded);
    }

	return (
		<div id={"q" + data.id} className="toggle-list">
            <div className="flex items-center justify-between gap-4 mb-4">
                <span className={`${!expanded ? "line-clamp-2 sm:line-clamp-1" : ""} toggle-list-title font-medium`}>
                    <span className="text-primary-gradient font-bold">Ｑ: </span>
                    {data.question}
                </span>
                <button title="Toggle toggle list" onClick={toggleQcard} aria-controls={"q" + data.id + "-content"} aria-expanded={expanded}
                        className={`${expanded ? "-rotate-90" : ""} btn-icon self-start transition-transform`}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            </div>
            
            <div id={"q" + data.id + "-content"} className="toggle-list-content" aria-hidden={!expanded} role="region">
                <p className="whitespace-pre-line">{data.answer}</p>
            </div>
        </div>
	);
}