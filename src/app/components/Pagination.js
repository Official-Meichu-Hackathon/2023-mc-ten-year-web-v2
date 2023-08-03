import React from 'react';

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
      <div className="flex justify-center mt-5">
        <button
            className="mr-3 p-2 cursor-pointer"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 7L9 12L14 17V7Z" fill="black"/>
          </svg>
        </button>

        {[currentPage - 1, currentPage, currentPage + 1].map((pageNumber) => (
            pageNumber >= 1 && pageNumber <= totalPages ? (
                <span
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`mr-2 p-2 cursor-pointer ${currentPage === pageNumber ? 'font-bold' : ''}`}
                >
            {pageNumber}
          </span>
            ) : null
        ))}

        <button
            className="p-2 cursor-pointer text-[#464A53]"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17L15 12L10 7V17Z" fill="black"/>
          </svg>
        </button>
      </div>
  );
}
