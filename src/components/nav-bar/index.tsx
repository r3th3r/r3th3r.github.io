"use client"
//
import React from "react";
// components
import NavItem from "@/components/nav-bar/nav-item";

// -------------------------------------------------

export default function NavBar() {
    return (
        <nav className="hidden md:block w-full">
            <ul className="flex flex-1 flex-row justify-around p-4">
                <NavItem href="/" text="Home"/>
                <NavItem href="/projects" text="projects"/>
                <NavItem href="/skills" text="skills"/>
                <NavItem href="/mail_to" text="contact"/>
            </ul>
        </nav>
    );
}
