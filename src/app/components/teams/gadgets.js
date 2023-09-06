// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function SearchBar() {
    // TODO: Service: Search
    function handleSubmit() {

    }

    return (
        <div className="flex items-center h-[1.5em] px-4 py-6 nue-pressed-50 pill">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-3" />
            <form onSubmit={handleSubmit}>
                <input type="text" className="outline-none bg-transparent mr-1 h-fit items-center"/>
            </form>
        </div>
    );
}

export function Post() {
    function redirectToURL(url) {
        window.open(url, '_blank');
    };

    return (
        <button className="hidden lg:block px-6 py-4 nue-concave-50 pill"
                onClick={() => redirectToURL("https://youtu.be/dQw4w9WgXcQ")}>
            <span className="text-accent font-bold">投稿</span>
        </button>
    );
}