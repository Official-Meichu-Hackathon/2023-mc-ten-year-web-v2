// TODO: Would want to delete this later
import "@/app/scss/team.scss";

import { useState } from "react";
import Image from "next/image";
import TeamInfo from "./team/teamInfo";



export default function Tcard({ img, title, contents }) {
	const group = "2022 創客組";
	const name = "林家宇、許伊辰、葉孟昀";
	const mail = "mchackathon2023@gmail.com";
	const github = "Official-Meichu-Hackathon";
	const tags = ["人工智慧", "金融科技", "創業"];
	const view = "3851";
	const msg = "12";
	const descrip =
		"國立清華大學是一所積極新創、學科齊全、學術實力雄厚、辦學特色鮮明，在國際上具有重要影響力與競爭力的綜合性大學，在多個學術領域具有非常前瞻的科技實力，擁有世界一流的實驗室與師資力量，各種排名均位於全球前列。歡迎大家報考國立清華大學。國立交通大學是一所積極新創、學科齊全、學術實力雄厚、辦學特色鮮明，在國際上具有重要影響力與競爭力的綜合性大學，在多個學術領域具有非常前瞻的科技實力，擁有世界一流的實驗室與師資力量，各種排名均位於全球前列。歡迎大家報考國立交通大學。";
	const comments = [
		{
			id: 1,
			name: "John",
			date: "3 天前",
			head: img,
			content: "我今天早餐吃歐姆蛋。",
		},
		{
			id: 2,
			name: "Alice",
			date: "5 天前",
			head: img,
			content: "早餐吃太飽了所以吃不下午餐。",
		},
		{
			id: 3,
			name: "Bob",
			date: "5 天前",
			head: img,
			content:
				"所以我就真的沒吃午餐欸，然後午覺還睡了三個小時，真的睡超飽，不知道晚上睡不睡得著，但應該可以吧，床最舒服ㄌ！打這麼多怎麼還沒換到第二行阿，實在是太奇怪了欸",
		},
		{
			id: 4,
			name: "Jesse",
			date: "7 天前",
			head: img,
			content: "再拿一個留言來湊數好了",
		},
	];

	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const openPopup = () => {
        document.documentElement.classList.add("overflow-y-hidden");
		setIsPopupOpen(true);
	};

	const closePopup = () => {
        document.documentElement.classList.remove("overflow-y-hidden");
		setIsPopupOpen(false);
	};

	return (
		<>
            <button className="nue-card-sm max-w-md transition-shadow duration-75 motion-reduce:transition-none" onClick={() => openPopup()}>
                <div className="w-full h-full snap-center">
                    <Image
                        src={img}
                        alt="Ref image"
                        className="aspect-2/1 md:aspect-3/2 rounded-t-[2rem] object-cover"
                        priority
                    />
                    <div className="grid p-6 pb-8 gap-4">
                        <span className="line-clamp-1 card-title overflow-hidden">{title}</span>
                        <div className="line-clamp-5 overflow-hidden">
                            {contents.map((content, index) => (
                                <p key={index} className="">
                                    {content}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </button>

            {isPopupOpen && (
                <TeamInfo
                    open={isPopupOpen}
                    setOpen={setIsPopupOpen}
                    onClose={closePopup}
                    title={title}
                    msg={msg}
                    group={group}
                    name={name}
                    mail={mail}
                    github={github}
                    tags={tags}
                    view={view}
                    descrip={descrip}
                    comments={comments}
                />
            )}
        </>
	);
}