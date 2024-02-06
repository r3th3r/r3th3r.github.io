"use client";
// components
import { DynamicCloud } from "@/components/cloud/dynamic-cloud";


export default function Page() {

    const slugs = [
        "javascript",
        "python",
        "php",
        "html",
        "css",
        "angular",
        "bootstrap",
        "flask",
        "mui",
        "laravel",
        "react",
        "spring",
        "nextdotjs",
        "symfony",
        "tailwindcss",
        "androidstudio",
        "babel",
        "eclipseide",
        "figma",
        "git",
        "github",
        "gitlab",
        "gradle",
        "webpack",
        "gnubash",
        "docker",
        "linux",
        "markdown",
        "mongodb",
        "postgresql",
        "mysql",
        "sqlite",
        "nodedotjs",
        "powershell",
        "pytorch",
        "raspberrypi",
        "unity",

    ];

    return (
        <main className="flex flex-1 flex-col justify-around">
            <DynamicCloud iconSlugs={slugs} />
        </main>
    );
}
