import Image from "next/image";
import Search from "../../../../public/img/Team/Search.svg"
import React from 'react';

export function Search_bar() {
    return (
        <div className="flex max-h-[2rem] max-w-[8.6rem] md:max-h-[5rem] md:max-w-[25rem] rounded-[4rem] search-shadow md:p-8 p-3 items-center">
            <Image
                src={Search}
                alt="Search icon"
                className="w-[0.8rem] h-[0.8rem] md:w-auto md:h-auto"
                priority
            />
            <input
                type="text"
                className="outline-none bg-transparent md:text-3xl text-xs pl-1 md:pl-6 pr-4 md:max-w-[19.5rem] max-w-[7rem] h-fit items-center"
            />
        </div>
    );
}

export function Post() {
    const redirectToURL = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div className="hidden md:block">
            <button
                onClick={() => redirectToURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')}
                className="max-h-[5rem] max-w-[9rem] rounded-[4rem] nue-concave py-4 w-full"
            >
                <h2 className="mx-auto my-auto text-accent items-center justify-center">投稿</h2>
            </button>
        </div>
    );
}