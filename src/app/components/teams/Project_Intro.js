import "./local.scss";
import "@/app/scss/global.scss"

export function Project_Intro ({ discrip }){
    return(
        <div className="bg-primary md:px-16 px-8 py-12 pb-6 md:flex md:space-x-16 lg:space-x-32 items-start">
            <p className="text-sec-title md:mr-8 whitespace-nowrap">隊伍敘述</p>
            <p className="md:ml-16 flex-grow text-discrip">{ discrip }</p>
        </div>
    );
}