// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";



export default function Pagination({ totalPages, currentPage, setCurrentPage, className }) {
	function handlePageChange(pageNum) {
		if (1 <= pageNum && pageNum <= totalPages) {
			setCurrentPage(pageNum);
            // console.log("Page", pageNum)
		}
	};

	return (
		<div className={`${className} flex gap-3 justify-center font-light`}>
			<button className="px-2 disabled:text-gray-300" disabled={currentPage === 1}
				    onClick={() => handlePageChange(currentPage - 1)}>
				<FontAwesomeIcon icon={faCaretLeft} />
			</button>

			<div className="flex items-center gap-2 [&_>_*]:px-2">
                {[currentPage - 1, currentPage, currentPage + 1].map((num) =>
                    (1 <= num && num <= totalPages) ? (
                        <button key={num} className={`${currentPage === num ? "font-bold" : ""}`}
                              onClick={() => handlePageChange(num)}>
                            {num}
                        </button>
                    ) : null
                )}  
            </div>

			<button className="px-2 disabled:text-gray-300" disabled={currentPage === totalPages}
				    onClick={() => handlePageChange(currentPage + 1)}>
				<FontAwesomeIcon icon={faCaretRight} />
			</button>
		</div>
	);
}
