//filter
import React from 'react';
import { useState } from 'react';
import "./local.scss";
import "../../globals.scss"
import Image from "next/image";
import filterThree from "../../../../public/img/Team/filter-three.svg";
import filterOpen from "../../../../public/img/Team/filter-open.svg";
import filterClose from "../../../../public/img/Team/filter-close.svg";
import check from "../../../../public/img/Team/check.svg";
import checkbox from "../../../../public/img/Team/checkbox.svg";
import checkboxFill from "../../../../public/img/Team/checkbox-fill.svg";

export function CheckBoxItem({ checkBoxSetState, checkBoxState, checkBoxName, filterViewMode}) {
  return (
      <div>
          <div className="flex space-x-4 items-center">
              <div>
                <button 
                  className="flex items-center justify-center ml-1 mt-2 mb-2"
                  onClick={() => {checkBoxSetState(!checkBoxState)}}
                  style={{ position: 'relative' }}
                  >
                  {checkBoxState ? (
                    <>
                      <Image src={checkboxFill} alt="checkbox-fill" width={25} height={27}/>
                      <Image src={check} alt="check" width={19} height={15} style={{ position: 'absolute', zIndex: 1, left: '0.1875rem', top: '0.375rem' }}/>
                      &nbsp;&nbsp;{checkBoxName}&nbsp;&nbsp;
                    </>
                  ) : (
                    <>
                      <Image src={checkbox} alt="checkbox" width={25} height={27}/>
                      &nbsp;&nbsp;{checkBoxName}&nbsp;&nbsp;
                  </>
                  
                  )
                }
              </button>
            </div>
          </div>
    </div>
  );
}



export default function Filter({checkBoxNames, isMobile}) {

  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [filterViewMode, setFilterViewMode] = useState(false);
  const [year, setYear] = useState('');
  const [rank, setRank] = useState('');
  const [creatorGroup, setCreatorGroup] = useState(false);
  const [competitionContent, setCompetitionContent] = useState(false);
  const [registrationRelated, setRegistrationRelated] = useState(false);
  const [other, setOther] = useState(false);
  const checkBoxes = [
    {SetState: setCreatorGroup,
     State: creatorGroup
    },
    {SetState: setCompetitionContent,
      State: competitionContent
    },
    {SetState: setRegistrationRelated,
      State: registrationRelated
    },
    {SetState: setOther,
      State: other
    },
  ];
  const handleReset = () => {
    setFilterViewMode(false);
    setCreatorGroup(false);
    setCompetitionContent(false);
    setRegistrationRelated(false);
    setOther(false);
  };

  return (
  
    <div className="flex-basis-100">

      <button
        className="flex items-center justify-center w-28 h-12 font-bold text-black bg-slate-150 mt-3 mb-3"
        onClick={() => { setToggleViewMode(!toggleViewMode) }}
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
        )}
      </button>

      <div className="flex-col">

        <div className=" flex-row ">


          
        <div className = "flex-col border border-red-600">
            {checkBoxNames && toggleViewMode &&
              (
                <>
                {isMobile ? (
                  <>

                      {checkBoxNames.map( (item, index) => (
                        <CheckBoxItem
                          key={index}
                          checkBoxSetState={checkBoxes[index].SetState}
                          checkBoxState={checkBoxes[index].State}
                          checkBoxName={i}
                          checkTitle={item.name}
                          filterViewMode = {filterViewMode}
                        />
                      ))}
                    
                  </>
                ) : (
                  checkBoxNames.map( (item, index) => {
                    return (
                      <CheckBoxItem
                        key={index}
                        checkBoxSetState={checkBoxes[index].SetState}
                        checkBoxState={checkBoxes[index].State}
                        checkBoxName={item.name}
                        //filterViewMode = {filterViewMode}
                      />
                    );
                    })
                )} 
                </>  
              )
            }
          </div>


          
          <div className = "flex-col border border-red-600">
            {checkBoxNames && toggleViewMode &&
              (
                <>
                {isMobile ? (
                  <>

                      {checkBoxNames.map( (item, index) => (
                        <CheckBoxItem
                          key={index}
                          checkBoxSetState={checkBoxes[index].SetState}
                          checkBoxState={checkBoxes[index].State}
                          checkBoxName={item.name}
                          filterViewMode = {filterViewMode}
                        />
                      ))}
                    
                  </>
                ) : (
                  checkBoxNames.map( (item, index) => {
                    return (
                      <CheckBoxItem
                        key={index}
                        checkBoxSetState={checkBoxes[index].SetState}
                        checkBoxState={checkBoxes[index].State}
                        checkBoxName={item.name}
                        //filterViewMode = {filterViewMode}
                      />
                    );
                    })
                )} 
                </>  
              )
            }
          </div>
        </div>

            {toggleViewMode &&
            (
              <button className="font-medium ml-1 mt-2 mb-2 text-[#B580FF]" onClick={handleReset}>
                <u>重設</u>
              </button>
            )
            }
      </div>

   </div>
    
  );
}





