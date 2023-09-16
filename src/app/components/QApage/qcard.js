import { Fragment, useState } from "react";
import Dialog from "@/app/components/QApage/Dialog";

export default function Qcard({ data }) {
	const [selectedQuestion, setSelectedQuestion] = useState(null);

	const openPopup = (question) => {
		setSelectedQuestion(question);
	};

	const closePopup = () => {
		setSelectedQuestion(null);
	};

	return (
		<>
			<div className="nue-card-sm grid place-items-center w-full h-full p-12 gap-y-6 rounded-[4em]">
                <span className="text-3xl text-primary-gradient font-bold text-center">
                    Q: {data.question}
                </span>
                <div className="line-clamp-2">
                    {data.answers.map((answer, index) => (
                        <Fragment key={index}>
                            <p>{answer}</p>
                            {index !== data.answers.length - 1 && <br />}
                        </Fragment>
                    ))}
                </div>
                <button className="text-accent" onClick={() => openPopup(data)}>
                    查看更多 / View more...
                </button>
            </div>

			{selectedQuestion && (
				<Dialog selectedQuestion={selectedQuestion} closePopup={closePopup} />
			)}
		</>
	);
}
