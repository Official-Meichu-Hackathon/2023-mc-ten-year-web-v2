

import React from 'react';
import { useState } from 'react';

export default function Filter() {
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [filterViewMode, setFilterViewMode] = useState(false);
  const [year, setYear] = useState('');
  const [rank, setRank] = useState('');
  const [creatorGroup, setCreatorGroup] = useState(false);
  const [competitionContent, setCompetitionContent] = useState(false);
  const [registrationRelated, setRegistrationRelated] = useState(false);
  const [other, setOther] = useState(false);

  return (
    <div className="flex-basis-100">
      <button
        className="flex items-center justify-center w-28 h-12 font-bold text-black bg-slate-150 mt-3 mb-3"
        onClick={() => { setToggleViewMode(!toggleViewMode) }}
      >
        {toggleViewMode ? (
          <>
            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.194824 0V3.15638H25.4459V0H0.194824ZM0.194824 9.37446V12.5308H25.4459V9.37446H0.194824ZM0.194824 18.8436V22H25.4459V18.8436H0.194824Z"
                fill="black" />
            </svg>
            <span className="ml-2 mr-2">篩選</span>
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM13.5 3V2L10.5 2V3L13.5 3Z"
                fill="black" />
            </svg>
          </>
        ) : (
          <>
            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.194824 0V3.15638H25.4459V0H0.194824ZM0.194824 9.37446V12.5308H25.4459V9.37446H0.194824ZM0.194824 18.8436V22H25.4459V18.8436H0.194824Z"
                fill="black" />
            </svg>
            <span className="ml-2 mr-2">篩選</span>
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807611 21.0711 0.807611 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L10.9393 13.0607ZM13.5 12V11H10.5V12H13.5Z"
                fill="black" />
            </svg>
          </>
        )}
      </button>

      {toggleViewMode && (
        <>
          <div>
            <input
              type="text"
              placeholder="年份"
              value={year}
              onChange={e => {
                if (!isNaN(e.target.value)) {
                  setYear(e.target.value);
                }
              }}
              className=" border-2 border-black w-35 h-9 px-2.5 rounded-xl text-lg text-[#464A53] bg-[#EBECF2] shadow-[5px 5px 15px #BCBDC2, -5px -5px 15px #FFFFFF] outline-none"
            />

            <input
              type="text"
              placeholder="名次"
              value={rank}
              onChange={(e) => {
                if (!isNaN(e.target.value)) {
                  setRank(e.target.value);
                }
              }}
              className=" md:ml-2 ml-4  border-2 border-black w-35 h-9 px-2.5 rounded-xl text-lg text-[#464A53] bg-[#EBECF2] shadow-[5px 5px 15px #BCBDC2, -5px -5px 15px #FFFFFF] outline-none"
            />

          </div>
<div className="flex">

            <button 
      className="flex items-center justify-center ml-1 mt-2 mb-2"
      onClick={() => {setFilterViewMode(!filterViewMode)}}
      >
      {filterViewMode ? (
        <>
          <div style={{ position: 'absolute', zIndex: 1 }}>
          <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
          </svg>
          </div>
          <div style={{ position: 'absolute', zIndex: 2 }}>
          <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
          </svg>
          </div>
      
          &nbsp;&nbsp;2022
          
          
      </>
      
      ) : (
        <>
      <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="23" height="25" rx="6" fill="#EBECF2" stroke="#464A53" stroke-width="2"/>
      </svg>
      &nbsp;&nbsp;2022
      </>
      
      )
    }
      </button>



      {/*創客組 */}
      <div style={{ flex: 0.01 }}></div>
      <button 
      className="flex items-center justify-center ml-1 mt-2 mb-2"
      onClick={() => setCreatorGroup(!creatorGroup)}
      >
      {creatorGroup ? (
        <>
          <div style={{ position: 'absolute', zIndex: 1 }}>
          <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
          </svg>
          </div>
          <div style={{ position: 'absolute', zIndex: 2 }}>
          <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
          </svg>
          </div>
      
          &nbsp;&nbsp;創客組              
      </>
      
      ) : (
        <>
      <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="23" height="25" rx="6" fill="#EBECF2" stroke="#464A53" stroke-width="2"/>
      </svg>
      &nbsp;&nbsp;創客組
      </>
      
      )
    }            
      </button>
      {/*競賽內容 */}
      <div style={{ flex: 0.01 }}></div>

      <button 
      className="flex items-center justify-center ml-1 mt-2 mb-2"
      onClick={() => setCompetitionContent(!competitionContent)}
      >
      {competitionContent ? (
        <>
          <div style={{ position: 'absolute', zIndex: 1 }}>
          <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
          </svg>
          </div>
          <div style={{ position: 'absolute', zIndex: 2 }}>
          <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
          </svg>
          </div>
      
          &nbsp;&nbsp;競賽內容             
      </>
      
      ) : (
        <>
      <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="23" height="25" rx="6" fill="#EBECF2" stroke="#464A53" stroke-width="2"/>
      </svg>
      &nbsp;&nbsp;競賽內容
      </>
      
      )
    }            
      </button>

      {/*報名相關 */}
      <button 
      className="flex items-center justify-center ml-1 mt-2 mb-2"
      onClick={() => setRegistrationRelated(!registrationRelated)}
      >
      {registrationRelated ? (
        <>
          <div style={{ position: 'absolute', zIndex: 1 }}>
          <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
          </svg>
          </div>
          <div style={{ position: 'absolute', zIndex: 2 }}>
          <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
          </svg>
          </div>
      
          &nbsp;&nbsp;報名相關            
      </>
      
      ) : (
        <>
      <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="23" height="25" rx="6" fill="#EBECF2" stroke="#464A53" stroke-width="2"/>
      </svg>
      &nbsp;&nbsp;報名相關
      </>
      
      )
    }            
      </button>


      {/*其他 */}
      <button 
      className="flex items-center justify-start ml-1 mt-2 mb-2"
      onClick={() => setOther(!other)}
      >
      {other ? (
        <>
          <div style={{ position: 'absolute', zIndex: 1 }}>
          <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
          </svg>
          </div>
          <div style={{ position: 'absolute', zIndex: 2 }}>
          <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
          </svg>
          </div>
      
          <span style={{ marginLeft: '20px' }}>其他</span>            
      </>
      
      ) : (
        <>
      <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="23" height="25" rx="6" fill="#EBECF2" stroke="#464A53" stroke-width="2"/>
      </svg>
      <span style={{ marginLeft: '8px' }}>其他</span>  
      </>
      
      )
    }            
      </button>
  </div>

          <button className="font-medium ml-1 mt-2 mb-2 text-[#B580FF]">
            <u>重設</u>
          </button>
        </>
      )}
    </div>
  );
}

