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
            <span>主控台</span>
            <div className="grid grid-flow-col grid-cols-auto w-max">
                <div className="grid gap-row me-8">
                    <TableRow className="bg-nxp" amount={5} />
                    <TableRow className="bg-kk" amount={5} />
                    <TableRow className="bg-google" amount={5} />
                    <TableRow className="bg-tsmc" amount={5} />
                    <TableRow className="bg-ettoday" amount={5} />
                </div>
                <div className="grid gap-row me-2">
                    <TableRow className="bg-nxp" amount={3} mirror />
                    <TableRow className="bg-kk" amount={3} mirror />
                    <TableRow className="bg-google" amount={3} mirror />
                    <TableRow className="bg-tsmc" amount={3} mirror />
                    <TableRow className="bg-ettoday" amount={3} mirror />
                    
                </div>
                <div className="flex gap-2">
                    <TableCol className="bg-maker" amount={5} mirror />
                    <TableCol className="bg-maker" amount={5} mirror />
                </div>
            </div>
            <div className="flex gap-aisle">
                <TableRow className="bg-line" amount={4} />
                <TableRow className="bg-line" amount={4} mirror />
            </div>
            <div className="grid grid-cols-2 w-full mt-8 gap-aisle">
                <div className="grid inset-0 place-content-center aspect-square border-[0.1rem] border-map rounded-2xl">
                    <span className="text-4xl font-bold">休憩區</span>
                </div>
                <div className="grid grid-cols-5 aspect-square">
                    <div className="grid grid-rows-5 gap-2 h-fit">
                        <div className="aspect-square border-[0.1rem] border-map rounded-xl"></div>
                        <div className="aspect-square border-[0.1rem] border-map rounded-xl"></div>
                        <div className="aspect-square border-[0.1rem] border-map rounded-xl"></div>
                        <div className="aspect-square border-[0.1rem] border-map rounded-xl"></div>
                        <div className="aspect-square border-[0.1rem] border-map rounded-xl"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

function TableRow({ className, amount = 5, distribution = [1, 1, 1, 1, 1], mirror = false }) {
    const tableUnits = [];
    for (let i = 0; i < amount; i++) {
        tableUnits.push(
            <TableUnit key={i} className={`${distribution[i] ? "" : "opacity-0"}`} mirror={mirror} />
        );
    }

    return (
        <div className={`${className} map-table-row`}>
            {tableUnits}
        </div>  
    );
}
function TableCol({ className, amount = 5, distribution = [1, 1, 1, 1, 1], mirror = false }) {
    const tableUnits = [];
    for (let i = 0; i < amount; i++) {
        tableUnits.push(
            <TableUnit key={i} className={`${distribution[i] ? "" : "opacity-0"}`} mirror={mirror} />
        );
    }

    return (
        <div className={`${className} map-table-col`}>
            {tableUnits}
        </div>  
    );
}

function TableUnit({ className, mirror = false }) {
    return (
        <div className={`${className} grid grid-flow-col w-min h-min gap-1 p-2 ${mirror ? "-scale-x-100" : ""} `}>
            <div className="grid auto-rows-min gap-1">
                <Seat />
                <Seat />
                <Seat />
            </div>
            <Table />
            <div className="grid auto-rows-min gap-1">
                <Seat />
                <Seat empty />
                <Seat />
            </div>
        </div>
    );
}

function Table() {
    return (
        <div className="flex">
            <div className="w-[0.9rem] h-full border-[0.1rem] border-e-0 border-map rounded-s-md"></div>
            <div className="w-4 h-full border-[0.1rem] border-map rounded-e-md"></div>
        </div>
    ); 
}

function Seat({ empty = false }) {
    return <div className={`map-seat w-4 aspect-square ${empty ? "" : "border-[0.1rem] border-map"} rounded-md`}></div>;
}