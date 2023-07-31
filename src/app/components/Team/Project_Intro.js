export function Project_Intro ({ discrip }){
    return(
        <div className="bg-primary px-16 py-12 pb-6 flex space-x-32 items-start">
            <p className="text-sec-title mr-8 whitespace-nowrap">隊伍敘述</p>
            <p className="ml-16 flex-grow text-discrip">{ discrip }</p>
        </div>
    );
}