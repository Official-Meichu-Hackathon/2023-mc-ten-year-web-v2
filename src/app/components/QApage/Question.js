import React, { useState } from 'react';

export default function Questions({ data }) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const openPopup = (question) => {
    setSelectedQuestion(question);
  };

  const closePopup = () => {
    setSelectedQuestion(null);
  };

  return (
      <div>
        <ul className="grid gap-20 md:grid-cols-2">
          {data.map((q, index) => (
              <li key={index} className="grid gap-y-8 nue-concave frost-25 p-12 rounded-[4rem]">
                <h2 className="text-primary-gradient text-center">Q: {q.question}</h2>
                <div className="grid gap-y-4">
                  <ul className="flex list-none">
                    {q.tags.map((tag, index) => (
                        <li
                            key={index}
                            className={`${index !== q.tags.length - 1 ? "mr-3" : ""} p-1 rounded-[0.375em] capitalize bg-secondary`}
                        >
                          {tag}
                        </li>
                    ))}
                  </ul>
                  {q.answers.map((answer, index) => (
                      <p key={index}>
                        {answer.length > 80 && selectedQuestion !== q
                            ? answer.slice(0, 80) + '...'
                            : answer}
                      </p>
                  ))}
                  {q.answers.length > 0 && (
                      <button
                          className="text-primary-gradient mt-2"
                          onClick={() => openPopup(q)}
                      >
                        {selectedQuestion === q ? '收起回答/Collapse' : '查看更多/View more...'}
                      </button>
                  )}
                </div>
              </li>
          ))}
        </ul>

        {selectedQuestion && (
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
        )}
      </div>
  );
}
