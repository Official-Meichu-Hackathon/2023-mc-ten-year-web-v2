import React from 'react';
import {useState} from 'react';
import Image from "next/image";
import filterThree from "../../../../public/img/QApage/filter-three.svg";
import filterOpen from "../../../../public/img/QApage/filter-open.svg";
import filterClose from "../../../../public/img/QApage/filter-close.svg";
import check from "../../../../public/img/QApage/check.svg";
import checkbox from "../../../../public/img/QApage/checkbox.svg";
import checkboxFill from "../../../../public/img/QApage/checkbox-fill.svg";

export default function Filter() {
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [filterViewMode, setFilterViewMode] = useState(false);
  const [creatorGroup, setCreatorGroup] = useState(false);
  const [competitionContent, setCompetitionContent] = useState(false);
  const [registrationRelated, setRegistrationRelated] = useState(false);
  const [other, setOther] = useState(false);
  const handleReset = () => {
    setFilterViewMode(false);
    setCreatorGroup(false);
    setCompetitionContent(false);
    setRegistrationRelated(false);
    setOther(false);
  };

  return (
      <div className="flex-basis: 100%">
        <button
            className="flex items-center justify-center w-28 h-12 font-bold text-black mt-3 mb-3"
            //rounded-full hover:bg-blue-700
            onClick={() => {setToggleViewMode(!toggleViewMode)}}
        >
          {toggleViewMode ? (
              <>
                <Image src={filterThree} alt="filter-three" width={26} height={22}/>
                <span className="ml-2 mr-2">篩選</span>
                <Image src={filterClose} alt="filter-close" width={24} height={14}/>
              </>
          ) : (
              <>
                <Image src={filterThree} alt="filter-three" width={26} height={22}/>
                <span className="ml-2 mr-2">篩選</span>
                <Image src={filterOpen} alt="filter-open" width={24} height={14}/>
              </>
          )
          }
        </button>

        {toggleViewMode && (
        <>
          <div style={{ display: 'flex' }}>
            <button 
              className="flex items-center justify-center ml-1 mt-2 mb-2"
              onClick={() => {setFilterViewMode(!filterViewMode)}}
              style={{ position: 'relative' }}
            >
              {filterViewMode ? (
                <>
                  <Image src={checkboxFill} alt="checkbox-fill" width={25} height={27}/>
                  <Image src={check} alt="check" width={19} height={15} style={{ position: 'absolute', zIndex: 1, left: '0.1875rem', top: '0.375rem' }}/>
                  &nbsp;&nbsp;2022
                </>
                
              ) : (
                <>
                  <Image src={checkbox} alt="checkbox" width={25} height={27}/>
                  &nbsp;&nbsp;2022
                </>
                
              )
              }
            </button>

            <div style={{ flex: 0.01 }}></div>

            <button 
            className="flex items-center justify-center ml-1 mt-2 mb-2"
            onClick={() => setCreatorGroup(!creatorGroup)}
            style={{ position: 'relative' }}
            >
              {creatorGroup ? (
                <>
                  <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
                  </svg>
                  <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', zIndex: 1, left: '3px', top: '6px' }}>
                    <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
                  </svg>
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
            
            <div style={{ flex: 0.01 }}></div>

            <button 
            className="flex items-center justify-center ml-1 mt-2 mb-2"
            onClick={() => setCompetitionContent(!competitionContent)}
            style={{ position: 'relative' }}
            >
              {competitionContent ? (
                <>
                  <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
                  </svg>
                  <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', zIndex: 1, left: '3px', top: '6px' }}>
                    <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
                  </svg>
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
            <div style={{ flex: 0.01 }}></div>

            <button 
            className="flex items-center justify-center ml-1 mt-2 mb-2"
            onClick={() => setRegistrationRelated(!registrationRelated)}
            style={{ position: 'relative' }}
            >
              {registrationRelated ? (
                <>
                  <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
                  </svg>
                  <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', zIndex: 1, left: '3px', top: '6px' }}>
                    <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
                  </svg>
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
            <div style={{ flex: 0.01 }}></div>

            <button 
            className="flex items-center justify-center ml-1 mt-2 mb-2"
            onClick={() => setOther(!other)}
            style={{ position: 'relative' }}
            >
              {other ? (
                <>
                  <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="23" height="25" rx="6" fill="#B580FF" stroke="#464A53" stroke-width="2"/>
                  </svg>
                  <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', zIndex: 1, left: '3px', top: '6px' }}>
                    <path d="M6.3758 12.1912L2.76122 8.2875C2.56645 8.07715 2.30229 7.95897 2.02684 7.95897C1.7514 7.95897 1.48724 8.07715 1.29247 8.2875C1.0977 8.49785 0.988281 8.78314 0.988281 9.08062C0.988281 9.22792 1.01514 9.37377 1.06734 9.50986C1.11953 9.64594 1.19603 9.76959 1.29247 9.87374L5.64664 14.5762C6.05289 15.015 6.70914 15.015 7.11539 14.5762L18.1362 2.67375C18.331 2.4634 18.4404 2.1781 18.4404 1.88062C18.4404 1.58314 18.331 1.29785 18.1362 1.0875C17.9415 0.877146 17.6773 0.758972 17.4018 0.758972C17.1264 0.758972 16.8622 0.877146 16.6675 1.0875L6.3758 12.1912Z" fill="#464A53"/>
                  </svg>
                  &nbsp;&nbsp;其他
                </>
                
              ) : (
                <>
                  <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="23" height="25" rx="6" fill="#EBECF2" stroke="#464A53" stroke-width="2"/>
                  </svg>
                  &nbsp;&nbsp;其他
                </>
                
              )
              }            
            </button>
          </div>



          <button className="font-medium ml-1 mt-2 mb-2 text-[#B580FF]" onClick={handleReset}>
            <u>重設</u>     
          </button>
        </>
        )}
      </div>
  );
}

