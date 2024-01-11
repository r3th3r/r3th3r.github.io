"use client"
import React from "react";
//
import Image from "next/image";
// components
import CustomLink from "@/components/button/button";
import LastProjectList from "@/components/project/last-project-list";

export default function Page() {
    return (
        <section
            className="flex flex-col justify-center w-full gap-8 lg:pl-[45px] lg:pr-[45px] sm:pl-0 sm:pr-0 sm:pt-8 md:pt-8 lg:pt-8"
        >
            <header className="flex gap-8 flex-col-reverse lg:flex-row">
                <div className="flex-1 flex flex-col gap-4">
                    <div className="ml-1 relative h-[3px] bg-[#F58F20] rounded-[20px] w-[100px] mb-4"></div>
                    <h1 className="text-white text-[4rem] leading-[4.5rem] font-bold max-w-[490px]">
                        Bourgain Wilbal <span>Nicolas</span>
                    </h1>
                    <p className="text-[#f1f1f1] w-full text-justify px-0 py-4 max-w-[760px]">
                        Hello, my name is Nicolas, and I am passionate about computer development and the world of
                        cybersecurity. Over the
                        years, I have acquired many skills, and I invite you to discover them below.
                    </p>
                    <CustomLink text="Projets réalisés" href="/"/>
                </div>
                <div className="flex flex-1 justify-center items-center">
                    <Image
                        alt="Avatar"
                        width="300"
                        height="300"
                        src="/images/avatar.png"
                        className="rounded-full"
                    />
                </div>
            </header>
            <footer>
                <h1 className="text-3xl font-bold mb-8">Dernier projets</h1>
                <LastProjectList/>
            </footer>
        </section>
    )
}
