// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function SearchBar() {
    // TODO: Service: Search
    function handleSubmit() {

    }

    return (
        <div className="flex items-center h-[1.5em] px-4 py-6 nue-pressed-25 pill">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-3" />
            <form onSubmit={handleSubmit}>
                <input id="team-search" type="text" className="outline-none bg-transparent mr-1 h-fit items-center"/>
            </form>
        </div>
    );
}

export function Post() {
    function redirectToURL(url) {
        window.open(url, '_blank');
    };

    return (
        <button className="hidden md:block btn-nue-25 px-5 py-3 pill"
                onClick={() => redirectToURL("https://youtu.be/dQw4w9WgXcQ")}>
            <span className="text-accent font-bold">投稿</span>
        </button>
    );
}