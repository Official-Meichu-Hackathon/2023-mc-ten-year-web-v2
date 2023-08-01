import React from 'react';

export default function Dialog({ selectedQuestion, closePopup }) {
  return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 w-4/5 h-4/5">
          <button className="float-right" onClick={closePopup}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.10017 0.5L0.507812 4.09236L2.34221 5.92675L6.87724 10.5382L2.34221 15.0732L0.507812 16.8312L4.10017 20.5L5.93457 18.6656L10.546 14.0541L15.0811 18.6656L16.839 20.5L20.5078 16.8312L18.6734 15.0732L14.062 10.5382L18.6734 5.92675L20.5078 4.09236L16.839 0.5L15.0811 2.3344L10.546 6.86943L5.93457 2.3344L4.10017 0.5Z" fill="black"/>
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