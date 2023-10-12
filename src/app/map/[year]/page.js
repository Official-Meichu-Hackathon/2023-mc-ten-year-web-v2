export default function Map({ params }) {
    return (
        <div id="map" className="grid auto-rows-min [&_>_*]:justify-self-center gap-row">
            {(params.year === "2023") ? (
                <Map2023 />
            ) : (
                <span className="text-2xl font-medium">還沒有畫好 : (</span>
            )}
        </div>
    );
}

function Map2023() {
    return (
        <>
            <div id="map-stage" className="grid grid-cols-[1fr_2fr_1fr] w-full gap-8 aspect-3/1">
                <Screen />
                <div className="grid grid-rows-[2fr_1fr] gap-8">
                    <div className="grid grid-cols-[1fr_4fr_1fr] gap-8">
                        <div className="self-end grid content-center justify-items-center aspect-2/3"></div>
                        <div className="grid grid-rows-[auto_1fr] content-center justify-items-center gap-2">
                            <span className="font-bold">背板</span>
                            <Area className="w-full" label="主舞台" />
                        </div>
                        <Area className="self-end aspect-2/3" label="控台" size="sm" />
                    </div>
                    <Area label="貴賓席" />
                </div>
                <Screen mirror />
            </div>
            <div id="map-seats" className="grid grid-flow-col grid-cols-auto w-max">
                <div className="grid gap-row me-8">
                    <TableRow className="bg-nxp" amount={5} label={["1", "2", "3", "4", "5"]} />
                    <TableRow className="bg-kk" amount={5} label={["1", "2", "3", "4", "5"]} />
                    <TableRow className="bg-google" amount={5} label={["1", "2", "3", "4", "5"]} />
                    <TableRow className="bg-tsmc" amount={5} label={["1", "2", "3", "4", "5"]} />
                    <TableRow className="bg-ettoday" amount={5} label={["1", "2", "3", "4", "5"]} />
                </div>
                <div className="grid gap-row me-2">
                    <TableRow className="bg-nxp" amount={3} label={["6", "7", "8"]} mirror />
                    <TableRow className="bg-kk" amount={3} label={["6", "7", "8"]} mirror />
                    <TableRow className="bg-google" amount={3} label={["6", "7", "8"]} mirror />
                    <TableRow className="bg-tsmc" amount={3} label={["6", "7", "8"]} mirror />
                    <TableRow className="bg-ettoday" amount={3} label={["6", "7", "8"]} mirror />
                    
                </div>
                <div className="flex gap-2">
                    <TableCol className="bg-maker" amount={5} label={["1", "3", "5", "7", "9"]} mirror />
                    <TableCol className="bg-maker" amount={5} label={["2", "4", "6", "8", "10"]} mirror />
                </div>
            </div>
            <div id="map-seats-extra" className="flex gap-aisle">
                <TableRow className="bg-line" amount={4} label={["1", "2", "3", "4"]} />
                <TableRow className="bg-line" amount={4} label={["5", "6", "7", "8"]} mirror />
            </div>
            <div id="map-bottom" className="grid grid-cols-[1.25fr_1fr] w-full mt-8 gap-aisle">
                <Area label="休憩區" size="lg" />
                <div className="grid grid-cols-4 aspect-square gap-2">
                    <Area label={`ETtoday\n新聞雲`} size="sm" square />
                    <Area label="台灣水泥" size="sm" square />
                    <div></div>
                    <Area label="服務台" size="sm" square />

                    <Area label="曉數碼" size="sm" square />
                    <Area label="Google" size="sm" square />
                    <div></div>
                    <Area label="NXP" size="sm" square />

                    <Area label="tsmc" size="sm" square />
                    <Area label="國泰金控" size="sm" square />
                    <div></div>
                    <Area label="ITSA" size="sm" square />

                    <Area label="美光" size="sm" square />
                    <Area label="KKCompany" size="sm" textsize="sm" square />
                    <div></div>
                    <Area label="ITSA" size="sm" square />

                    <Area label="LINE" size="sm" square />
                    <Area label="抽獎區" size="sm" square />
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );
}



function Screen({ className, mirror = false }) {
    return (
        <div className={`${className} grid auto-rows-min content-center gap-4 p-4`}>
            <span className={`${mirror ? "justify-self-end" : "justify-self-start"} px-4`}>250 吋投影布幕</span>
            <div className={`h-4  border-[0.125rem] border-map rounded-md ${mirror ? "rotate-[15deg]" : "-rotate-[15deg]"}`}></div>
        </div>
    );
}

function Area({ className, label, size = "md", textsize = "", square = false }) {
    return (
        <div className={`${className} grid content-center justify-items-center p-2  border-[0.125rem] border-map ${square ? "aspect-square" : ""}
                         ${size === "sm" ? "rounded-md" : "rounded-2xl"} ${size === "lg" && "text-4xl"} ${size === "md" && "text-2xl"}`}>
            <span className={`${textsize && textsize === "sm" ? "text-microprint" : ""} font-bold text-center whitespace-pre-line`}>{label}</span>
        </div>
    );
}

function TableRow({ className, amount = 5, distribution, label, mirror = false }) {
    const defaultDistr = Array(amount).fill(1);
    const defaultLabel = Array(amount).fill("");
    const effectiveDistr = distribution || defaultDistr;
    const effectiveLabel = label || defaultLabel;

    const tableUnits = [];
    for (let i = 0; i < amount; i++) {
        tableUnits.push(
            <TableUnit key={i} className={`${effectiveDistr[i] ? "" : "opacity-0"}`} label={effectiveLabel[i]} mirror={mirror} />
        );
    }

    return (
        <div className={`${className} map-table-row`}>
            {tableUnits}
        </div>  
    );
}
function TableCol({ className, amount = 5, distribution = [1, 1, 1, 1, 1], label, mirror = false }) {
    const defaultDistr = Array(amount).fill(1);
    const defaultLabel = Array(amount).fill("");
    const effectiveDistr = distribution || defaultDistr;
    const effectiveLabel = label || defaultLabel;

    const tableUnits = [];
    for (let i = 0; i < amount; i++) {
        tableUnits.push(
            <TableUnit key={i} className={`${effectiveDistr[i] ? "" : "opacity-0"}`} label={effectiveLabel[i]} mirror={mirror} />
        );
    }

    return (
        <div className={`${className} map-table-col`}>
            {tableUnits}
        </div>  
    );
}

function TableUnit({ className, label, mirror = false }) {
    return (
        <div className="relative flex justify-center">
            {label && <span className="absolute -top-4 text-fineprint select-none">{label}</span>}
            <div className={`${className} relative grid grid-flow-col w-min h-min gap-1 p-2`}>
                <div className="grid auto-rows-min gap-1">
                    <Seat />
                    <Seat empty={mirror} />
                    <Seat />
                </div>
                <Table />
                <div className="grid auto-rows-min gap-1">
                    <Seat />
                    <Seat empty={!mirror} />
                    <Seat />
                </div>
            </div>
        </div>
    );
}

function Table() {
    return (
        <div className="flex">
            <div className="w-[0.9rem] h-full  border-[0.125rem] border-e-0 border-map rounded-s-md"></div>
            <div className="w-4 h-full  border-[0.125rem] border-map rounded-e-md"></div>
        </div>
    ); 
}

function Seat({ empty = false }) {
    return <div className={`map-seat w-4 aspect-square ${empty ? "" : " border-[0.125rem] border-map"} rounded-md`}></div>;
}