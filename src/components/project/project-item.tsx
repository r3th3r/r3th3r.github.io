import React from "react";
import CustomLink from "@/components/button/button";
import Image from "next/image";

type Props = {
    title: string;
    description: string;
    href: string;
    image?: string;
    style?: string;
}

const ProjectItem = (props: Props) => {

    return (
        <li
            style={{ backgroundImage: "url('/images/bg_dark_grey.jpg')" }}
            className={"flex justify-evenly items-start gap-4 border border-[#606060] rounded-xl p-4 flex-col-reverse md:flex-col-reverse sx:flex-row " + props.style}
        >
            <div className="flex flex-col flex-1 h-full">
                <div className="flex-1">
                    <div className="relative w-[30px] h-[3px] bg-[#F58F20] mb-5 rounded-[20px]"></div>
                    <h4 className="text-xl font-bold mb-4">{props.title}</h4>
                    <p className="text-justify mb-4">{props.description}</p>
                </div>
                <CustomLink text="See project" href={props.href} target="_blank"/>
            </div>
            <div className="flex justify-center items-center m-auto">
            {props.image && <Image src={props.image} width="500" height="300" alt="simple image" className="rounded-md"/>}
            </div>
        </li>
    )
}

export default ProjectItem;