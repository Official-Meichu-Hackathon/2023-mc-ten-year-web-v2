//import { Fragment, useState } from 'react'
/*
const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    }
]
*/
import React from 'react';
import {useState} from 'react';

export default function Filter() {
  const [toggleViewMode, setToggleViewMode] = useState(false);
  return (
      <div className="flex-basis: 100%">
        <button
            className="flex items-center justify-center w-28 h-24 font-bold text-black bg-slate-150"
            //rounded-full hover:bg-blue-700
            onClick={() => setToggleViewMode(!toggleViewMode)}
        >
          {toggleViewMode ? (
              <>
                <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M0.194824 0V3.15638H25.4459V0H0.194824ZM0.194824 9.37446V12.5308H25.4459V9.37446H0.194824ZM0.194824 18.8436V22H25.4459V18.8436H0.194824Z"
                      fill="black"/>
                </svg>
                <span className="ml-2 mr-2">篩選</span>
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807611 21.0711 0.807611 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L10.9393 13.0607ZM13.5 12V11H10.5V12H13.5Z"
                      fill="black"/>
                </svg>

              </>
          ) : (
              <>
                <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M0.194824 0V3.15638H25.4459V0H0.194824ZM0.194824 9.37446V12.5308H25.4459V9.37446H0.194824ZM0.194824 18.8436V22H25.4459V18.8436H0.194824Z"
                      fill="black"/>
                </svg>
                <span className="ml-2 mr-2">篩選</span>
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M13.0607 0.93934C12.4749 0.353553 11.5251 0.353553 10.9393 0.93934L1.3934 10.4853C0.807611 11.0711 0.807611 12.0208 1.3934 12.6066C1.97919 13.1924 2.92893 13.1924 3.51472 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.93934ZM13.5 3V2L10.5 2V3L13.5 3Z"
                      fill="black"/>
                </svg>

              </>
          )

          }
        </button>
      </div>
  );
}

