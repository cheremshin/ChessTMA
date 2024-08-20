"use client";

import Link from "next/link";
import Image from "next/image";

import { widgetData } from "./RandomTask.data";

import Picture from "../../../public/random_task.png"


const RandomTask = () => {
    return (
        <div className="pt-8 mt-auto rounded-l-[20px] text-white bg-black max-h-[24rem] items-end">
            <div className="p-5 w-full h-full flex flex-col items-center">
                <p className=" mt-auto font-semibold text-l mb-[22px]">{widgetData.title}</p>
                <p className="font-light leading-tight text-xs">{widgetData.description}</p>
                <Link href={widgetData.link} className="font-semibold mt-[40px] p-1 bg-accent rounded-full w-4/5 text-center">
                    {widgetData.buttonText}
                </Link>
            </div>
        </div>
    )
}

export default RandomTask;
