"use client";
import { ImageSlider } from "../components/Team/Slides";
import Filter from "../components/Team/Filter";
//works.js

const checkBoxNames = [
    { name:"2022" ,
      id: 1
    },
    { name:"創客組" ,
    id: 1
    },
    { name:"報名相關" ,
    id: 1
    },
    { name:"其他" ,
    id: 1
    }
  ]

export default function Team() {
    return (
        <div>
            
            <header className= "relative">
                <h1 className="bracket-md absolute top-1/2  transform -translate-y-1/2 z-10" style={{left: "4rem"}}>Teams</h1>
                <ImageSlider/> 
            </header>

            <div>
                <Filter
                checkBoxNames={checkBoxNames}
                ></Filter> 
            </div>
            <main>

                <div>
                    
                </div>
            
            </main>
        </div>
    );
}
