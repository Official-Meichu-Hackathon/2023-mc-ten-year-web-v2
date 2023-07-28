import { CardV } from "../card";
import hacker_logo from "../../../../public/img/system_hacker.svg";
import maker_logo from "../../../../public/img/system_maker.svg";



export default function System() {
    const hacker_content = ["我們致力於搭起學生與企業之間的橋樑，學生運用企業資源並發揮潛力回應企業命題，同時企業方更提供實習機會，能讓學生進一步實踐創意發想！而今年我們將由以下七家企業作為引導單位： 台積電、意法半導體、中國信託、ASML、原相科技、恩智浦半導體、Kronos Research 麒點科技"];
    const maker_content = ["由新竹市政府命題，融入新竹居民真實生活情境與議題，鼓勵運用分享、學習與實作，實際的解決問題與提出方案，並促進創作過程人才交流，體現創新創意、數位應用及動手實作、解決問題的黑客精神！"];
    // TODO: 卡的高度不一致
    return (
        <div className="system">
            <h2 className="pb-12">賽制介紹</h2>
            <section className="lg:flex justify-evenly">
                <div className="basis-1/3"><CardV img={hacker_logo} title="黑客組" contents={hacker_content} moreInfo=""/></div>
                <div className="basis-1/3"><CardV img={maker_logo} title="創客交流組" contents={maker_content} moreInfo=""/></div> 
            </section>
        </div>
    )
}