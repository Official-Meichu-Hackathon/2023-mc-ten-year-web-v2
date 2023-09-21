import { useState } from "react";
import { setBodyUnscrollable, setBodyScrollable } from "@/app/utils/helper";
import Image from "next/image";
import AddComment from "./addComment";
import Pagination from "@/app/components/pagination";

// Recoil
import { useRecoilValue } from "recoil";
import { windowWidth } from "@/app/utils/recoilProvider";
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
        setBodyUnscrollable();
		setOpenCard(true);
	};
	function closePopup() {
        setBodyScrollable();
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
		<>
			<div className="flex flex-col justify-between md:min-h-[75vh] px-10 py-8 gap-8
                            bg-title border-t-2 md:border-x-2 border-stone-300 md:rounded-t-[2rem]">
                <div id="comment-board" className="md:px-16 md:py-8">
                    <h2 className="whitespace-nowrap">留言板</h2>
                    <button className="text-xl text-[#5D75BE] font-bold whitespace-nowrap" onClick={() => openPopup()}>
                        立即留言...
                    </button>
                    <div id="comments" className="grid gap-y-8 justify-items-start">
                        {commentList.map((comment) => (
                            <CommentItem key={comment.id} pfp={comment.pfp} name={comment.name}
                                            date={comment.date} content={comment.content}
                            />
                        ))}
                    </div>
                </div>

				<div className="hidden md:block">
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
			</div>
			{openCard && <AddComment closePopup={closePopup} />}
		</>
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
			<div className="comment-pfp w-8 md:w-12 bg-gradient-primary-30 aspect-square pill">
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