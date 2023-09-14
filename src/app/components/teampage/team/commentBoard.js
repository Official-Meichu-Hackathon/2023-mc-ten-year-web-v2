import { useState, useEffect } from "react";
import Image from "next/image";

import Pagination from "@/app/components/pagination";
import AddComment from "./addComment";

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

export function CommentBoard({ comments }) {

    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [openCard, setOpenCard] = useState(false);

    const openPopup = () => {
        setOpenCard(true);
    };

    const closePopup = () => {
        setOpenCard(false);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalItems = comments.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentComments = comments.slice(startIndex, endIndex);

    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="pu-8 md:px-8">
            <div className="content-stretch bg-card-1 p-8 flex flex-col md:card-rounded min-h-screen shadow-2xl">
                <div className="select-none">　</div>


                <div className="mt-[2rem]  md:flex space-x-16 lg:space-x-32">
                    <div className="hidden md:block flex text-sec-title whitespace-nowrap mr-8">　留言板</div>
                    <div className="md:hidden flex justify-between ">
                        <div className="text-sec-title">留言板</div>
                        <button className="text-board " onClick={() => openPopup()}>立即留言...</button>
                    </div>
                    <div className="md:ml-16 space-y-8">
                        <button className="hidden md:block text-board" onClick={() => openPopup()}>立即留言...</button>
                        <div className="space-y-8">
                            {!isMobile && currentComments.map((comment) => (
                                <CommentItem
                                    key={comment.id}
                                    name={comment.name}
                                    date={comment.date}
                                    content={comment.content}
                                    head={comment.head}
                                />
                            ))}
                            {isMobile && comments.map((comment) => (
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
                {!isMobile && (<Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={changePage}
                />)}
            </div>
            {openCard && (
                <AddComment closePopup={closePopup} />
            )}
        </div>
    );
}