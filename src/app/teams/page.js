"use client";
import Filter from "../components/teampage/filter";
import { CardV } from "../components/teampage/Card";
import refImg from "../../../public/img/Ref.png";

// useSWR
import useSWR from "swr";



export default function Teampage() {
	return (
		<div>
			<header className="mb-4">
				<div className="flex items-center justify-between">
					<h1 className="bracket-md justify-center">歷年作品</h1>
				</div>
			</header>
			<main>
                <CardSec />
			</main>
		</div>
	);
}

function CardSec() {
	const team = [
		{
			id: 1,
			title: "隊伍名稱的地方，可能名字超級長就會變到第二行或直接不見之類的",
			img: refImg,
			group: "2022 創客組",
			contents: [
				"這邊是隊伍的敘述，不知道要打甚麼。",
			],
			award: "冠軍",
		},
		{
			id: 2,
			title: "隊伍名稱",
			img: refImg,
			group: "2022 創客組",
			contents: [
				"這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好",
			],
			award: "冠軍",
		},
		{
			id: 3,
			title: "隊伍名稱的地方",
			img: refImg,
			group: "2022 創客組",
			contents: [
				"這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好",
			],
			award: "冠軍",
		},
		{
			id: 4,
			title: "隊伍名稱的地方，可能名字",
			img: refImg,
			contents: [
				"這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好",
			],
			group: "2022 創客組",
			award: "亞軍",
		},
		{
			id: 5,
			title: "隊伍名稱的地方，可能名字超級長就",
			img: refImg,
			group: "2022 創客組",
			contents: [
				"這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好",
			],
			award: "冠軍",
		},
		{
			id: 6,
			title: "隊伍名稱的地方，可能名字超級長就會變到第",
			img: refImg,
			contents: [
				"這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。",
			],
			group: "2022 創客組",
			award: "季軍",
		},
	];

	return (
		<div>
			<Filter checkBoxNames={checkBoxNames} />

			<div className="grid gap-14 py-16 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 items-center justify-center justify-items-center">
				{team.map((item) => (
					<CardV
						key={item.id}
						img={item.img}
						title={item.title}
						contents={item.contents} // 這裡的 contents 可能需要根據你的需求更改
					/>
				))}
			</div>
		</div>
	);
}

const checkBoxNames = [
	{ id: 0, name: "年份  ", data: [2021, 2022, 2023, 2024] },
	{
		id: 1,
		name: "組別  ",
		data: ["黑客組", "創客組", "交流組", "團體組", "創客交流組"],
	},
	{ id: 2, name: "得獎作品", data: ["冠軍"] },
];
