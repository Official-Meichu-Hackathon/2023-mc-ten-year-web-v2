import Image from "next/image";

export default function System({ img, title, contents }) {
    return(
        <div className="card nue-black frost-50 md:flex lg:grid 
                        w-full md:w-full lg:w-[30vw] 
                        p-8 place-content-start rounded-[4rem]">
            <div className="md:w-1/3 lg:w-auto lg:h-[15vw] flex justify-center">
                <Image
                    src={img}
                    alt="Ref image"
                    className="w-auto object-cover"
                    priority
                />
            </div>
            <div className="md:w-2/3 lg:w-auto grid p-4 gap-y-4 lg:gap-y-8">
                <h2 className="text-primary-gradient w-fit 
                               place-self-center md:place-self-start lg:place-self-center">
                    {title}
                </h2>
                <p className="text-base/8">{contents}</p>
            </div>
        </div>
    );
}

/*
<div className="sm:grid lg:flex lg:justify-between ">
    <System title="黑客組" contents={systemContent1} img={hacker_icon}/>
    <System title="創客交流組" contents={systemContent2} img={maker_icon}/>
    <System title="社企組" contents={systemContent3} img={company_icon}/>
</div>
*/