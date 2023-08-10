import React, {useState} from 'react';
import Dialog from "@/app/components/QApage/Dialog";

export default function Questions({data}) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const openPopup = (question) => {
    setSelectedQuestion(question);
  };

  const closePopup = () => {
    setSelectedQuestion(null);
  };

  return (
      <div className="md-px-8">
        <ul className="grid gap-20 md:grid-cols-2">
          {data.map((q, index) => (
              <li key={index} className="grid gap-y-8 frost-25 p-12 rounded-[4rem]" style= {{background: 'hsla(231, 21%, 94%, 1)', boxShadow: '0.75em 0.75em 1.5em #BCBDC2'}}>
                <div className="flex flex-col justify-center items-center">
                  <div
                      className="text-primary-gradient text-center mb-5 absolute top-8 md-text-4xl text-3xl font-bold">Q: {q.question}</div>
                  <div className="grid gap-y-4 mt-10">
                    {q.answers.map((answer, index) => (
                        <p key={index}>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {answer.length > 80 && selectedQuestion !== q
                              ? answer.slice(0, 75) + '...'
                              : answer}
                        </p>
                    ))}
                    {q.answers.length > 0 && (
                        <button
                            className="mt-2 text-[#B580FF] focus:text-[#B580FF] focus:outline-none"
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
            <Dialog selectedQuestion={selectedQuestion} closePopup={closePopup}/>
        )}
      </div>
  );
}
