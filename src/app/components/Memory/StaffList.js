import { useState, useEffect } from "react";

function Mobile({adm, mrk, prd, dev, act, dsgn, fin}) {
    
    return(
        <div className="">
        
        <div>
            <text className="font-bold">行政部</text>
            <div>
                {adm.map((obj, index) =>{
                    return(index !== 0 ? 
                    (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                })}
            </div>
        </div>

        <div>
            <text className="font-bold ">財務部</text>
            <div>
                {adm.map((obj, index) =>{
                    return(index !== 0 ? 
                    (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                })}
            </div>
        </div>

        <div>
            <text className="font-bold flex justify-start">行銷部</text>
            <div>
                {adm.map((obj, index) =>{
                    return(index !== 0 ? 
                    (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                })}
            </div>
        </div>

        <div>
            <text className="font-bold flex justify-start">設計部</text>
            <div>
                {adm.map((obj, index) =>{
                    return(index !== 0 ? 
                    (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                })}
            </div>
        </div>

        <div>
            <text className="font-bold flex justify-start">公關部</text>
            <div>
                {adm.map((obj, index) =>{
                    return(index !== 0 ? 
                    (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                })}
            </div>
        </div>

        <div>
            <text className="font-bold flex justify-start">開發部</text>
            <div>
                {adm.map((obj, index) =>{
                    return(index !== 0 ? 
                    (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                })}
            </div>
        </div>

        <div>
            <text className="font-bold flex justify-start">活動部</text>
            <div>
                {adm.map((obj, index) =>{
                    return(index !== 0 ? 
                    (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                })}
            </div>
        </div>
    </div>
    );
}

function PC({adm, mrk, prd, dev, act, dsgn, fin}) {
    return(
        <div className="grid grid-cols-2 px-10">
        
            <div>
                <text className="font-bold">行政部</text>
                <div>
                    {adm.map((obj, index) =>{
                        return(index !== 0 ? 
                        (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                    })}
                </div>
            </div>

            <div>
                <text className="font-bold ">財務部</text>
                <div>
                    {adm.map((obj, index) =>{
                        return(index !== 0 ? 
                        (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                    })}
                </div>
            </div>

            <div>
                <text className="font-bold flex ">行銷部</text>
                <div>
                    {adm.map((obj, index) =>{
                        return(index !== 0 ? 
                        (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                    })}
                </div>
            </div>

            <div>
                <text className="font-bold flex justify-start">設計部</text>
                <div>
                    {adm.map((obj, index) =>{
                        return(index !== 0 ? 
                        (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                    })}
                </div>
            </div>

            <div>
                <text className="font-bold flex justify-start">公關部</text>
                <div>
                    {adm.map((obj, index) =>{
                        return(index !== 0 ? 
                        (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                    })}
                </div>
            </div>

            <div>
                <text className="font-bold flex justify-start">開發部</text>
                <div>
                    {adm.map((obj, index) =>{
                        return(index !== 0 ? 
                        (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                    })}
                </div>
            </div>

            <div>
                <text className="font-bold flex justify-start">活動部</text>
                <div>
                    {adm.map((obj, index) =>{
                        return(index !== 0 ? 
                        (<><text key={index}>{" / "}</text><text key={index}>{obj.name}</text></>):(<text key={index}>{obj.name}</text>));
                    })}
                </div>
            </div>
        </div>
    );
}

const useRWD=()=>{
    const [mobile,setMobile]=useState("PC");

    const handleRWD=()=>{
        if(window.innerWidth>768)
            setMobile("PC");
        else
            setMobile("mobile");
    }

    useEffect(()=>{
    
        window.addEventListener('resize',handleRWD);
        handleRWD(); //加入此行
        
        return(()=>{
            window.removeEventListener('resize',handleRWD);
        })
    },[]);

    return mobile;
}

export function StaffList({adm, mrk, prd, dev, act, dsgn, fin}){
    const device=useRWD();
    if (device==="PC") return (
        <PC adm={adm} mrk={mrk} prd={prd} dev={dev} act={act} dsgn={dsgn} fin={fin}></PC>
    );

    else return (
        <Mobile adm={adm} mrk={mrk} prd={prd} dev={dev} act={act} dsgn={dsgn} fin={fin}></Mobile>
    );

    
}   