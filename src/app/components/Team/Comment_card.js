import React from "react";

export function Comment_Card({ isPopupOpenCommentCard, onClose }) {
  if (!isPopupOpenCommentCard) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" 
      id="wrapper" 
      onClick={onClose}
    >
      <div className="w-[600px] flex flex-col">
        <button 
          className="text-white text-xl place-self-end" 
          onClick={() => onClose()}
        >
          HELLO WORLD!
        </button>
        
      </div>
    </div>
  );
}
