import React from 'react';
import { useEffect, useState } from 'react';
import Image from "next/image";
import close from "../../../../public/img/Team/close.svg";
import account from "../../../../public/img/Team/account.svg";
import msg from "../../../../public/img/Team/message-outline.svg";


export default function Comment_Card({ closePopup }) {

  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };

  const handleFormSubmit = () => {
    // 這裡處理資料提交的邏輯，比如送出到資料庫
    // ...

    // 提交完後清除輸入             
    setInputValue("");
    setTextareaValue("");
    closePopup();
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
      <div className="bg-white py-8 px-12 h-[37rem] w-[32rem] rounded-[2rem] z-50 justify-between">
        <div className="flex justify-end">
          <button className="" onClick={closePopup}>
            <Image src={close} alt="close" width={21} height={21} />
          </button>
        </div>
        <div className="flex flex-col justify-center h-full pb-8">
          <div className="flex py-4">
            <Image src={account} alt="account Icon" width={20.83} height={16.67} />
            <p className="pl-2 text-comment-card pt-1">暱稱</p>
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-transparent ring-2 ring-gray-300 text-md w-full p-2 items-center rounded-[0.5rem]"
          />
          <div className="flex py-4">
            <Image src={msg} alt="msg Icon" width={20.83} height={16.67} />
            <p className="pl-2 text-comment-card">留言內容</p>

          </div>
          <textarea
            type="text"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            className="bg-transparent text-md ring-2 ring-gray-300 w-full h-full p-2 rounded-[0.5rem] block text-left"
          />
          <div className="flex items-center justify-center pt-8">
            <button className="h-[2rem] w-[4rem] rounded-[0.625rem] bg-gray-200 send-shadow"
              onClick={handleFormSubmit}>
              <div className="text-blue-700 items-center justify-center font-bold">送出</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}