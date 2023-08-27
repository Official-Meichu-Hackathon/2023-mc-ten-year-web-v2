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
import { faL } from '@fortawesome/free-solid-svg-icons';

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



export default function Filter({checkBoxNames, isMobile, checkBoxTitles}) {
  const [s2021, set2021] = useState(false);
  const [s2022, set2022] = useState(false);
  const [s2023, set2023] = useState(false);
  const [s2024, set2024] = useState(false);
  const [toggleViewMode, setToggleViewMode] = useState(false);
  const [filterViewMode, setFilterViewMode] = useState(false);
  const [creatorGroup, setCreatorGroup] = useState(false);
  const [awardworks, setAwardworks] = useState(false);
  const [groupGroup, setGroupGroup] = useState(false);
  const [hackerGroup, setHackerGroup] = useState(false);
  const [communicationGroup, setCommunicationGroup] = useState(false);
  const [hackerCreatorGroup, setHackerCreatorGroup] = useState(false);
  const [other, setOther] = useState(false);
  const checkBoxes = 
  [
    [
      {SetState: set2021,
      State: s2021
      },
      {SetState: set2022,
        State: s2022
      },
      {SetState: set2023,
        State: s2023
      },
      {SetState: set2024,
        State: s2024
      }

    ],
    [
      {SetState: setHackerGroup,
      State: hackerGroup
      },
      {SetState: setCreatorGroup,
        State: creatorGroup
      },
      {SetState: setCommunicationGroup,
        State: communicationGroup
      },
      {SetState: setHackerCreatorGroup,
        State: hackerCreatorGroup
      },
      {SetState: setGroupGroup,
        State: groupGroup
      }

    ],
    [
      {SetState: setAwardworks,
        State: awardworks
      }
    ]

  ]

  const handleReset = () => {
    setFilterViewMode(false);
    setCreatorGroup(false);
    setAwardworks(false);
    setCommunicationGroup(false);
    setGroupGroup(false);
    setHackerCreatorGroup(false);
    setHackerGroup(false);

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
       
          <div className = "flex-col flex border border-red-200 ">
            {checkBoxNames && toggleViewMode &&
              <div className='flex-col border border-green-600'>
                
                {isMobile ? (
                  <>

                      {
                        checkBoxNames.map((group, groupIndex) => {
                          return (
                            <div key={`group-${groupIndex}` }  className="flex space-x-6">
                             &nbsp;&nbsp;{group.name}&nbsp;&nbsp;
                              {group.data.map((item, index) => {
                                return (
                                  <>
                                  
                                  <CheckBoxItem
                                  key={`group-${groupIndex}-${index}`}
                                  checkBoxSetState={checkBoxes[groupIndex][index].SetState}
                                  checkBoxState={checkBoxes[groupIndex][index].State}
                                  checkBoxName={item}
                                  //filterViewMode = {filterViewMode}
                                />
                                </>
                                );
                              })}
                            </div>
                          );
                        })
                        
                      }
                    
                  </>
                ) : (
                  <>
                  {
                    checkBoxNames.map((group, groupIndex) => 
                       (
                        <div key={`group-${groupIndex}`} className="flex space-x-6">
                          &nbsp;&nbsp;{group.name}&nbsp;&nbsp;
                          {group.data.map((item, index) => {
                            return (
                              <>
                              
                              <CheckBoxItem
                              key={`group-${groupIndex}-${index}`}
                              checkBoxSetState={checkBoxes[groupIndex][index].SetState}
                              checkBoxState={checkBoxes[groupIndex][index].State}
                              checkBoxName={item}
                              //filterViewMode = {filterViewMode}
                            />
                            </>
                            );
                          })}
                        </div>
                        )
                      )
                  }
                  </>  
                )
              }

              </div>
            }
            

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
    </div>
    
  );






/*
<>
{toggleViewMode && (
  <>
    
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
    </>
  )
}
</>
*/
checkBoxNames.map((group, groupIndex) => {
  return (
    <div key={`group-${groupIndex}`}>
      {group.map((item, index) => {
        return (
          <CheckBoxItem
          key={`group-${groupIndex}-${index}`}
          checkBoxSetState={checkBoxes[groupIndex][index].SetState}
          checkBoxState={checkBoxes[groupIndex][index].State}
          checkBoxName={item.name}
          //filterViewMode = {filterViewMode}
        />
        );
      })}
    </div>
  );
})};
