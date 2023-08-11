import React from 'react';
import { useEffect } from 'react';
import Image from "next/image";
import close from "../../../../public/img/Team/close.svg";
import account from "../../../../public/img/Team/account.svg";

export default function Comment_Card({ closePopup }) {
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      closePopup();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-40" onClick={handleOutsideClick}>
        <div className="bg-white p-8 max-h-[32rem] aspect-5/6 rounded-[2rem] z-50">
          <div className="flex justify-end">
            <button className="" onClick={closePopup}>
              <Image src={close} alt="close" width={21} height={21}/>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            
            
          </div>
        </div>
      </div>
  );
}