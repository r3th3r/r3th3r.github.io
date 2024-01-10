"use client"
//
import React, { useState } from 'react';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-14 sm:flex md:hidden lg:hidden justify-center items-center">
            <div className="w-14">
                <button
                    onClick={toggleMenu}
                    className="flex flex-col items-center flex-[0] gap-2 hover:bg-[rgb(0,0,0,0.3)] justify-center w-14 h-14 rounded-[50px]"
                >
                    <div className="flex flex-col justify-end items-end gap-2 flex-[0]">
                        <span className="w-[30px] h-[3px] bg-white rounded-[50px]"></span>
                        <span className="w-5 h-[3px] bg-white rounded-[50px]"></span>
                    </div>
                </button>
                <div className={isOpen ? "block" : "hidden"}>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
