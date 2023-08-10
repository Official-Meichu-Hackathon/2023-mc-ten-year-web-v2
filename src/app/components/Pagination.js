import React from 'react';
import Image from "next/image";
import leftArrow from "../../../public/img/QApage/left-arrow.svg";
import rightArrow from "../../../public/img/QApage/right-arrow.svg";
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
          <Image src={leftArrow} alt="left-arrow" width={24} height={24}/>
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
          <Image src={rightArrow} alt="right-arrow" width={24} height={24}/>
        </button>
      </div>
  );
}
