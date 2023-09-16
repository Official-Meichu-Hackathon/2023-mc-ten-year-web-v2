// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function SearchBar() {
    // TODO: Service: Search
    function handleSubmit() {

    }

    return (
        <div className="nue-pressed-25 flex items-center h-[1.5em] max-w-[12rem] md:max-w-none px-4 py-6 pill">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-3" />
            <form onSubmit={handleSubmit}>
                <input id="team-search" type="text" className="outline-none bg-transparent mr-1 h-fit items-center"/>
            </form>
        </div>
    );
}

export function Post() {
    // TODO: Link to real submit form
    return (
        <a href="https://youtu.be/lpiB2wMc49g" target="_blank" rel="noreferrer noopener"
           className="btn-nue-25 hidden md:inline-flex items-center h-[3em] px-5 py-3 py-auto pill">
            <span className="text-accent font-bold">投稿</span>
        </a>
    );
}