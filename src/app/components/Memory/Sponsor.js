export function Sponsor({group, list}){
    return (
        <div className="pl-32">
            <div className="text-2xl font-bold flex justify-start">
                <p>{group}</p>
            </div>
            <div>
                {list.map((content, index) =>{
                    return(index !== 0 ? 
                    (<><text key={index}>{'、'}</text><text key={index}>{content}</text></>):(<text key={index}>{content}</text>));
                })}
            </div>
        </div>
    );
}   