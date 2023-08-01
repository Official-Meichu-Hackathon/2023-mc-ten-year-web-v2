import Image from "next/image";

export function CommentItem({ name, date, content, head }) {
    return (
        <div>
            <div className="flex space-x-4 items-center">
                <div>
                    <Image
                        src={head}
                        alt="head"
                        width={35}
                        height={35}
                        className="rounded-full"
                        priority
                    />
                </div>
                <p className="text-primary text-comment">{name} • {date}</p>
            </div>
            <p className="text-discrip">{content}</p>
      </div>
    );
}

export function Board({ comments }) {
    return(
        <div className="pu-8 pl-8 pr-8">
            <div className="banner-filter content-stretch bg-card-1 p-8 flex flex-col card-rounded min-h-screen">
                <div className="select-none">　</div>
                <div className="flex space-x-32">
                    <div className="text-sec-title whitespace-nowrap mr-8">　留言板</div>
                    <div className="ml-16 space-y-8">
                        <div className="flex-grow text-board">立即留言...</div>
                        <div className="space-y-8">
                        {comments.map((comment) => (
                            <CommentItem
                                key={comment.id}
                                name={comment.name}
                                date={comment.date}
                                content={comment.content}
                                head={comment.head}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-grow bg-card-1"></div>
            </div>
        </div>
        
    );   
}