"use client";
import Image from "next/image";
import useSWR from "swr";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CardH, CardV, viewMore } from "../components/Team/Card" //
import { Card_title } from "../components/Team/Card_title";
import { Project_Intro } from "../components/Team/Project_Intro";
import { Board } from "../components/Team/Comments";
import { Search_bar, Post } from "../components/Team/Gadgets";
import refImg from "../../../public/img/Ref.png";
import Filter  from "../components/Team/Filter";
import { ImageSlider } from "../components/Team/Slides";



export default function Home() {
    const [cardInView, setCardInView] = useState(false);

    return(
        <div>
            <header>
                <h1 className="md:bracket-md">測試功能</h1>
            </header>
            <main>
                <article className="grid">
                    <CardSec setInView={setCardInView} />
                </article>
            </main>
        </div>
    )
}






function CardSec({ setInView }){
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: 0.5
    });
    useEffect(() => {
        setInView(isInView);
    }, [isInView, setInView]);

    const img = refImg;
    const title = "隊伍名稱的地方，可能名字超級長就會變到第二行或直接不見之類的";
    const contents = ["這邊是隊伍的敘述，不知道要打甚麼。梅竹黑客松好棒好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒好棒。"];
    const group = "2022 創客組";
    const award = " 冠軍 ";

    const name = "林家宇、許伊辰、葉孟昀";
    const mail = "mchackathon2023@gmail.com";
    const github = "teamName/teamProject";
    const tags = ["人工智慧", "金融科技", "創業"];
    const view = "3851";
    const msg = "12";
    const discrip = "國立清華大學是一所積極新創、學科齊全、學術實力雄厚、辦學特色鮮明，在國際上具有重要影響力與競爭力的綜合性大學，在多個學術領域具有非常前瞻的科技實力，擁有世界一流的實驗室與師資力量，各種排名均位於全球前列。歡迎大家報考國立清華大學。國立交通大學是一所積極新創、學科齊全、學術實力雄厚、辦學特色鮮明，在國際上具有重要影響力與競爭力的綜合性大學，在多個學術領域具有非常前瞻的科技實力，擁有世界一流的實驗室與師資力量，各種排名均位於全球前列。歡迎大家報考國立交通大學。";
    const comments = [
        {
          id: 1,
          name: "John",
          date: "3天前",
          head: img,
          content: "我今天早餐吃歐姆蛋。",
        },
        {
          id: 2,
          name: "Alice",
          date: "5天前",
          head: img,
          content: "早餐吃太飽了所以吃不下午餐。",
        },
        {
            id: 3,
            name: "Bob",
            date: "5天前",
            head: img,
            content: "所以我就真的沒吃午餐欸，然後午覺還睡了三個小時，真的睡超飽，不知道晚上睡不睡得著，但應該可以吧，床最舒服ㄌ！打這麼多怎麼還沒換到第二行阿，實在是太奇怪了欸",
          },
          {
            id: 4,
            name: "Jesse",
            date: "7天前",
            head: img,
            content: "再拿一個留言來湊數好了",
          },
      ];
      

    return (
        <section ref={ref}>
            {/* 這是slider */}
            
                <h1>hello new slider</h1>
            <div>
                {/* <ImageSlider></ImageSlider> */}
                <ImageSlider
                />

                
            </div>
   


            <div className="grid gap-14 py-16 md:px-8 mx-10 md:grid-cols-3 sm:grid-cols-1">
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award} />
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
                <CardV img={img} title={title} contents={contents} moreInfo={viewMore} link="/qna" group={group} award={award}/>
            </div>
            <div className="p-4 grid md:grid-cols-3 gap-4 h-[1rem]">
                <div className="">
                    <Search_bar/>
                </div>
                <div className="">
                    <Post />
                </div>
            </div>
            <div className="pt-32">
                <Card_title title={title} group={group} name={name} mail={mail} github={github} tags={tags} view={view} msg={msg}/>
                <Project_Intro discrip={discrip}/>
            </div>
            <div className="pt-4">
                <Board comments={comments}/>
            </div>

            <div>
                <Filter checkBoxNames = {checkBoxNames}/>
            </div>

            <div>
            
            </div>
        </section>
    );
}


const slides = [

    { url: "http://localhost:3000/image-1.jpg", title: "Beach" },
    {url: "http://localhost:3000/image-2.jpg", title: "Boat" },
    { url: "http://Localhost :3000/image-3. jpg" , title: "Forest"},
    { url: "http://localhost: 3000/image-4. jpg", title: "City" },
    {url: "http://Localhost:3000/image-5. jpg", title: "Italy" },

]

const checkBoxNames = [
    {id : 0, name: "2021"},
    {id : 1, name: "2022"},
    {id : 2, name: "2023"},
    {id : 3, name: "2024"}

  ]