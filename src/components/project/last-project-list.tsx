import React from "react";
// components
import ProjectItem from "@/components/project/project-item";

// The last three projects I have worked on.
const projectData = [
    {
        title: "Blog",
        description: "Explore my collection of insightful articles on penetration testing, where I share my expertise and experiences. Discover resources that could be instrumental in enhancing your cybersecurity knowledge and skills.",
        href: "https://retherszu.github.io",
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "https://retherszu.github.io",
    },
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "https://retherszu.github.io",
    },
];

/**
 * The last three projects I have worked on.
 *
 * @return {React.ReactElement}
 */
const LastProjectList = (): React.ReactElement => {
    return (
        <ul className="grid grid-cols-1 grid-rows-1 gap-4 xl:grid-cols-3">
            {projectData.map((project, index) => (
                <ProjectItem
                    key={index}
                    title={project.title}
                    description={project.description}
                    href={project.href}
                />
            ))}
        </ul>
    );
}

export default LastProjectList;
