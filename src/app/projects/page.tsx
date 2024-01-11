import React from "react";
// components
import ProjectItem from "@/components/project/project-item";

const projectData = [
    {
        title: "Blog",
        description: "Explore my collection of insightful articles on penetration testing, where I share my expertise and experiences. Discover resources that could be instrumental in enhancing your cybersecurity knowledge and skills.",
        href: "https://retherszu.github.io",
        image: "/posts/blog-home.png"
    }
];


export default function Page() {
    return (
        <main className="flex flex-col flex-1">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
                {projectData.map((project, index) => (
                    <ProjectItem
                        key={index}
                        title={project.title}
                        description={project.description}
                        href={project.href}
                        image={project.image}
                    />
                ))}
            </ul>
        </main>
    )
}
