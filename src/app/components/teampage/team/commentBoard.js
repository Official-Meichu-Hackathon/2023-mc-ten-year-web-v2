import { useState } from "react";
import Image from "next/image";
import AddComment from "./addComment";
import Pagination from "@/app/components/pagination";

// Recoil
import { useRecoilValue } from "recoil";
import { windowWidth } from "@/app/utils/atoms";
import { breakpointMD } from "@/app/utils/resolutions";

// Message Icons
import MetaAnya from "../../../../../public/img/msg-pfp/meta_anya_nani.png";
import MetaHeartEyes from "../../../../../public/img/msg-pfp/meta_heart_eyes.png";
import MetaHoldingBackTears from "../../../../../public/img/msg-pfp/meta_holding_back_tears.png";
import MetaSad from "../../../../../public/img/msg-pfp/meta_sad.png";
import MetaSmileCry from "../../../../../public/img/msg-pfp/meta_smile_cry.png";
import MetaSunglasses from "../../../../../public/img/msg-pfp/meta_sunglasses.png";
import MetaThonk from "../../../../../public/img/msg-pfp/meta_thonk.png";



export function CommentBoard({ comments }) {
    const width = useRecoilValue(windowWidth);

    const [openCard, setOpenCard] = useState(false);
	function openPopup() {
        document.documentElement.classList.add("overflow-y-hidden");
		setOpenCard(true);
	};
	function closePopup() {
        document.documentElement.classList.remove("overflow-y-hidden");
		setOpenCard(false);
	};

    const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;
    const totalItems = comments.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const commentSubset = comments.slice(startIndex, endIndex);

    const commentList = (width >= breakpointMD) ? commentSubset : comments;

	return (
		<div className="md:px-8">
			<div className="bg-title p-8 flex flex-col min-h-[75vh] shadow-2xl rounded-t-[2rem]">
				<div className="mt-[2rem]  md:flex space-x-16 lg:space-x-32">
					<div className="hidden md:block whitespace-nowrap mr-8">
						　留言板
					</div>
					<div className="md:hidden flex justify-between ">
						<div className="text-sec-title">留言板</div>
						<button className="text-board " onClick={() => openPopup()}>
							立即留言...
						</button>
					</div>
					<div className="grid md:ml-16 gap-y-8">
						<button
							className="hidden md:block text-board"
							onClick={() => openPopup()}
						>
							立即留言...
						</button>
						<div className="space-y-8">
							{commentList.map((comment) => (
                                <CommentItem
                                    key={comment.id}
                                    name={comment.name}
                                    date={comment.date}
                                    content={comment.content}
                                    pfp={comment.pfp}
                                />
                            ))}
						</div>
					</div>
				</div>

				<div className="flex-grow bg-card-1"></div>

				<div className="hidden md:block mt-5">
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
			</div>
			{openCard && <AddComment closePopup={closePopup} />}
		</div>
	);
}

export function CommentItem({ pfp, name, date, content }) {
    function getPFP(pfp) {
        switch (pfp) {
            case "anya":
                return MetaAnya;
            case "heart_eyes":
                return MetaHeartEyes;
            case "holding_back_tears":
                return MetaHoldingBackTears;
            case "sad":
                return MetaSad;
            case "smile_cry":
                return MetaSmileCry;
            case "sunglasses":
                return MetaSunglasses;
            case "thonk":
                return MetaThonk;
            case "default":
                return MetaHeartEyes;
            default:
                return MetaHeartEyes;
        }
    }

	return (
		<div className="comment-box">
			<div className="comment-pfp w-12 bg-gradient-primary-30 aspect-square pill">
                <Image
                    src={getPFP(pfp)}
                    alt="head"
                    className=""
                    quality={100}
                />
            </div>
            <span className="comment-name tracking-wide">{name}．{date}</span>
			<p className="comment-content">{content}</p>
		</div>
	);
}