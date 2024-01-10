"use client"
//
import React, {useMemo} from "react";
// next
import {usePathname} from "next/navigation";

const LeftContainer = () => {
    const pathName = usePathname();

    const text = useMemo(() => {
        switch (pathName) {
            case "/":
                return "Welcome to my portfolio";
            case "/projects":
                return "My projects and contributions";
            case "/skills":
                return "Programming Languages and Dev Tools";
            case "/contact":
                return "Contact me!";
            default:
                return "";
        }
    }, [pathName]);

    return (
        <div className="h-[calc(100vh_-_101px)] hidden md:flex lg:flex w-16 flex-col pb-[45px] justify-end relative items-center">
            <div className="fixed flex flex-col items-center gap-8 h-3/5">
                <div className="relative flex-1 flex flex-col justify-between gap-[1em]">
                    <div
                        className="flex-1 relative h-full border-l-[#606060] border-l border-solid left-2/4 top-0 w-full m-auto"
                    >
                        <span className="absolute transition-[height] duration-[1s] ease-[ease]"></span>
                    </div>
                    <p
                        className="flex-1 text-sm tracking-[0.030em] text-[#606060] -scale-100"
                        style={{writingMode: "vertical-rl"}}
                    >
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LeftContainer;
