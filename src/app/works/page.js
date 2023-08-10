"use client";
import { ImageSlider } from "../components/Team/Slides";
import Filter from "../components/Team/Filter";
//works.js
export default function Team() {
    return (
        <div>
            
            <header className= "relative">
                <h1 className="bracket-md absolute top-1/2  transform -translate-y-1/2 z-10" style={{left: "4rem"}}>Teams</h1>
                <ImageSlider/> 
            </header>

            <div>
                <Filter></Filter> 
            </div>
            <main>

                <div>
                    
                </div>
            
            </main>
        </div>
    );
}
