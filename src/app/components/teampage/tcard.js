import "@/app/scss/team.scss";
import { Fragment } from "react";

import Link from "next/link";
import Image from "next/image";
import refImg from "../../../../public/img/Ref.jpg";



// TODO: Pass in actual imgs
export default function Tcard({ data }) {
	return (
        <Link href={"/teams/" + data.id} className="nue-card-sm relative max-w-md rounded-[2em]">
            <div className="w-full h-full snap-center">
                <Image
                    src={refImg}
                    alt="Ref image"
                    className="aspect-3/2 rounded-t-[2em] object-cover"
                    priority
                />
                <div className="grid p-6 pb-8 gap-4">
                    <span className="team-subtitle line-clamp-1 font-bold overflow-hidden">{data.title}</span>
                    <div className="line-clamp-5 overflow-hidden">
                        {data.descriptions.map((descrip, index) => (
                            <Fragment key={index}>
                                <p>{descrip}</p>
                                {index !== data.descriptions.length - 1 && <br />}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
	);
}