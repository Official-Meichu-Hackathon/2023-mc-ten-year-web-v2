export default function AboutUs() {
    return (
        <div>
            <header className="mb-16">
                <iframe width="640" height="360"
                        src="https://www.youtube.com/embed/kPPvNrtvhJs"
                        title="【2020 梅竹黑客松】激發你的潛能！梅竹黑客松是什麼？競賽過程全紀錄！"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                ></iframe>
            </header>
            <main>
                <article className="grid gap-y-16">
                    <section>
                        <h2 className="bracket-md mb-8">什麼是梅竹黑客松?</h2>
                        <div className="grid gap-y-4 p-12 rounded-[4rem] bg-secondary">
                            <p>
                                梅竹黑客松可以拆成「梅竹」跟「黑客松」兩個部分。
                            </p>
                            <p>「梅竹」二字分別代表清大與交大，表示我們的團隊是由清交兩校的學生組成。</p>
                            <p>
                            而「黑客松」（Hackathon）則為 Hack + Marathon 的組合字。此處的 Hack 並非指網路攻擊的駭客，而是一種探索式的程式編寫過程，更廣義地來說，我們稱之為黑客精神，意即崇尚自由、熱衷於解決問題的人。只要勇於挑戰並專注於所做之事，不論任何職業，都可以稱作是一位黑客！
                            </p>
                            <p>
                            Marathon 則是強調持久與耐力的馬拉松，所以黑客松的原意即為程式設計馬拉松，發展至今已演變成不同專業背景的人共同組隊，在有限的時間內，發揮創意將腦海中的構想與藍圖實現，並實作出最小可行性產品（MVP, minimum viable product）的過程。
                            </p>
                            <p>
                            此外，黑客松並不是以利益為導向的競賽，而是讓參賽者本著設計思考的概念，利用有限資源解決問題的活動，其中特別重視創新、效率與團隊合作，注重交流大於競爭的核心價值也使得黑客松更像是讓參賽者相互切磋的同樂會。
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="bracket-md">歷史沿革</h2>
                    </section>

                    <section>
                        <h2 className="bracket-md">年度回顧</h2>
                    </section>
                </article>
            </main>
        </div>
    );
}