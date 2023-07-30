import React from 'react';

export default function Dialog({ selectedQuestion, closePopup }) {
  return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 w-4/5 h-4/5">
          <button className="float-right" onClick={closePopup}>
            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" height="18">
              <path d="M10.586 9L16 3.586 14.586 2 9 7.586 3.586 2 2 3.586 7.586 9 2 14.414 3.586 16 9 10.414l5.414 5.586 1.586-1.586L10.586 9z" />
            </svg>
          </button>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-primary-gradient mb-5">Q: {selectedQuestion.question}</h2>
            <div>
              {selectedQuestion.answers.map((answer, index) => (
                  <p key={index}>{answer}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
