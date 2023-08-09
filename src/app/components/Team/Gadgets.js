import Image from "next/image";
import Search from "../../../../public/img/Search.svg"

export function Search_bar(){
    return(
        <div className="max-h-[5rem] max-w-[25rem] rounded-[4rem] search-shadow p-6">
            <div className="flex flex-row space-x-4">
                <Image
                    src={Search}
                    alt="Search icon"
                    className=""
                    priority
                />
                <input
                    type="text"
                    className="flex-grow outline-none bg-primary text-2xl"
                />
            </div>
        </div>
    );
}

export function Post() {
    return(
        <div className="hidden md:block max-h-[5rem] max-w-[9rem] rounded-[4rem] nue-concave py-4 w-full">
            <h2 className="mx-auto my-auto text-accent">投稿</h2>
        </div>
    );
}