"use client"
//
import React, { useState } from 'react';
// components
import BurgerItem from "@/components/nav-bar/burger-item";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-14 flex md:hidden justify-center items-center">
            <div className="w-14">
                <button
                    aria-label="Show menu"
                    onClick={toggleMenu}
                    className="flex flex-col items-center flex-[0] gap-2 hover:bg-[rgb(0,0,0,0.3)] justify-center w-14 h-14 rounded-[50px]"
                >
                    <div className="flex flex-col justify-end items-end gap-2 flex-[0]">
                        <span className="w-[30px] h-[3px] bg-white rounded-[50px]"></span>
                        <span className="w-5 h-[3px] bg-white rounded-[50px]"></span>
                    </div>
                </button>
                <div
                    className="bg-[#1F1F1F] absolute left-8 right-8 p-4 md:p-0 mt-4 font-medium border border-[#606060] rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0"
                    style={{ display: isOpen ? "block" : "none" }}>
                    <ul className="flex flex-col gap-4 items-center">
                        <BurgerItem href="/" text="Home" onClick={toggleMenu} />
                        <BurgerItem href="/projects" text="projects" onClick={toggleMenu} />
                        <BurgerItem href="/skills" text="skills" onClick={toggleMenu} />
                        <BurgerItem href="/why-nextjs" text="memoire" onClick={toggleMenu} />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
