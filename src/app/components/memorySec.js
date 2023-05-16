import Image from "next/image";
import refImg from "../../../public/img/Ref.png";

export default function MemorySec() {
    return (
        <section className="p-16">
            <h2 className="mb-10">Memory Section</h2>
            <div className="card nue-concave frost-25 grid md:flex p-8 gap-6 place-content-center max-w-screen-lg content-stretch">
                <div className="max-h-full">
                    <Image
                        src={refImg}
                        alt="Ref image"
                        className="h-full"
                        priority
                    />
                </div>
                <div className="p-4 gap-y-8 grid max-h-fit">
                    <h2 className="text-primary-gradient text-center w-fit place-self-center">紀念與感謝</h2>
                    <p>
                        　　透過回顧與紀念歷史，我們才能帶著更多經驗與力量走向未來。在這個頁面中，我們會介紹梅竹黑客松的競賽精神與意義，簡單總結過去各年度的活動內容、賽制與工作人員，並以時間軸的方式呈現每年的特點或制度創新。藉由紀錄歷屆活動的內容，檢視相異年度的變革，我們能夠吸取並傳承過去的精髓，同時思索與探尋未來的無限可能。<br />
                        　　透過回顧與紀念歷史，我們才能帶著更多經驗與力量走向未來。在這個頁面中，我們會介紹梅竹黑客松的競賽精神與意義，簡單總結過去各年度的活動內容、賽制與工作人員，並以時間軸的方式呈現每年的特點或制度創新。
                    </p>
                    <span className="place-self-end">查看更多 / View more...</span>
                </div>
            </div>
        </section>
    );
}