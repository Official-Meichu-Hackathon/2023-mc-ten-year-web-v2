import Image from "next/image";
import useRWD from "./useRWD";

export function System({ img, title, contents }) {
    const RWD = useRWD();
    return(
        <div className={ (RWD >= 2 ? "card nue-black " : "card nue-black-m ") +
                         "frost-50 sm:flex lg:grid " + 
                         "px-8 py-[1.4rem] sm:px-11 " + 
                         "h-full place-content-start " +
                         "rounded-[2rem] sm:rounded-[4rem]" }>
            <div className="md:w-1/3 lg:w-auto lg:h-[15vw] flex justify-center">
                { RWD >= 2 && <Image
                    src={img}
                    alt="Ref image"
                    className="lg:w-auto object-cover"
                    priority
                /> }
            </div>
            {/*
            <div className="md:w-1/3 lg:w-full lg:h-[8.5vw] lg:mt-[2vw] lg:mb-[3vw] flex justify-center">
                { RWD >= 2 && <Image
                    src={img}
                    alt="Ref image"
                    className="h-full aspect-square object-cover "
                    priority
                /> }
            </div>
            */}
            <div className="md:w-2/3 lg:w-auto grid 
                            p-0 sm:p-4 gap-y-4 lg:gap-y-8">
                <h2 className="text-primary-gradient w-fit 
                               place-self-center md:place-self-start lg:place-self-center
                               lg:text-center
                               text-base sm:text-[2.5rem]/[1.2]">
                    {title}
                </h2>
                <p className="text-xs/5 sm:text-base/8">{contents}</p>
            </div>
        </div>
    );
}

export function SystemForSmallIcon({ img, title, contents }){
    const RWD = useRWD();
    return(
        <div className={ (RWD >= 2 ? "card nue-black " : "card nue-black-m ") +
                         "frost-50 sm:flex lg:grid " + 
                         "px-8 py-[1.4rem] sm:px-11 " + 
                         "h-full place-content-start " +
                         "rounded-[2rem] sm:rounded-[4rem]" }>
            <div className="md:w-1/3 lg:w-auto lg:h-[15vw] flex justify-center">
                { RWD >= 2 && <Image
                    src={img}
                    alt="Ref image"
                    className="md:w-[70%] lg:w-[50%]"
                    priority
                /> }
            </div>
            {/*
            <div className="md:w-1/3 lg:w-full lg:h-[8.5vw] lg:mt-[2vw] lg:mb-[3vw] flex justify-center">
                { RWD >= 2 && <Image
                    src={img}
                    alt="Ref image"
                    className="h-full aspect-square object-cover "
                    priority
                /> }
            </div>
            */}
            <div className="md:w-2/3 lg:w-auto grid 
                            p-0 sm:p-4 gap-y-4 lg:gap-y-8">
                <h2 className="text-primary-gradient w-fit 
                               place-self-center md:place-self-start lg:place-self-center
                               lg:text-center
                               text-base sm:text-[2.5rem]/[1.2]">
                    {title}
                </h2>
                <p className="text-xs/5 sm:text-base/8">{contents}</p>
            </div>
        </div>
    );
}
/*
<div className="sm:grid lg:flex lg:justify-between w-full">
    <div className="w-full lg:w-[26vw]"><System title="黑客組" contents={systemContent1} img={hacker_icon}/></div>
    <div className="w-full lg:w-[26vw]"><System title="創客交流組" contents={systemContent2} img={maker_icon}/></div>
    <div className="w-full lg:w-[26vw]"><System title="社企組" contents={systemContent3} img={company_icon}/></div>
</div>
<div className="sm:grid lg:flex lg:justify-evenly w-full">
    <div className="w-full lg:w-[31vw]"><System title="黑客組" contents={systemContent1} img={hacker_icon}/></div>
    <div className="w-full lg:w-[31vw]"><System title="創客交流組" contents={systemContent2} img={maker_icon}/></div>
</div>
*/