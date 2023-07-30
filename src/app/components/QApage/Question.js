import React, { useState } from 'react';
import Dialog from "@/app/components/QApage/Dialog";

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
              <li key={index} className="grid gap-y-8 nue-concave frost-25 p-12 rounded-[4rem] ">
                <div className="flex flex-col justify-center items-center">
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
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {answer.length > 80 && selectedQuestion !== q
                              ? answer.slice(0, 80) + '...'
                              : + answer}
                        </p>
                    ))}
                    {q.answers.length > 0 && (
                        <button
                            className="text-primary-gradient mt-2 text-[#809FFF]"
                            onClick={() => openPopup(q)}
                        >
                          {selectedQuestion === q ? '收起回答/Collapse' : '查看更多/View more...'}
                        </button>
                    )}
                  </div>
                </div>
              </li>
          ))}
        </ul>

        {selectedQuestion && (
            <Dialog selectedQuestion={selectedQuestion} closePopup={closePopup} />
        )}
      </div>
  );
}
