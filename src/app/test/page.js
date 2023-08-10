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
import { Comment_Card } from "../components/Team/Comment_card";


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
    const [isPopupOpenCommentCard, setisPopupOpenCommentCard] = useState(false);
    const openPopupComment = () => {
        setisPopupOpenCommentCard(true);
        console.log("Closing popup...");
        document.body.style.overflow = 'hidden';
      };
    
      const closePopupCommentCard = () => {
        console.log("Closing popup...");
        setisPopupOpenCommentCard(!isPopupOpen);
        console.log({isPopupOpenCommentCard});
        document.body.style.overflow = 'auto';
      };

    return (
        <section ref={ref}>
            {/* 這是slider */}
            
                <h1>hello new slider</h1>
            <div>
                {/* <ImageSlider></ImageSlider> */}
                <ImageSlider
                />

                
            </div>

            <div>

            <button onClick={openPopupComment}>nice</button>
            {
                isPopupOpenCommentCard && (
                <Comment_Card
                isPopupOpenCommentCard={isPopupOpenCommentCard}
                onClose={closePopupCommentCard}
                ></Comment_Card>

            )
            }
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