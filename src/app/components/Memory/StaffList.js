export function StaffList({dept, list}){
    return (
        <div className="pl-28 leading-9">
            <div className="font-bold flex justify-start">
                <p>{dept}</p>
            </div>
            <div>
                {list.map((content, index) =>{
                    return(index !== 0 ? 
                    (<><text key={index}>{'/'}</text><text key={index}>{content}</text></>):(<text key={index}>{content}</text>));
                })}
            </div>
        </div>
    );
}   