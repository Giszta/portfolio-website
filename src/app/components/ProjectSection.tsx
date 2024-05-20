import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
	{
		id: 1,
		title: "Photopage",
		description: "Project 1 description",
		image: "/images/projects/1.png",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/Giszta/photopage",
		previewUrl: "https://giszta.github.io/photopage/",
	},
	{
		id: 2,
		title: "Puzzle",
		description: "Project 2 description",
		image: "/images/projects/2.png",
		tag: ["All", "Web"],
		gitUrl:
			"https://github.com/Giszta/sliding-game---react-practice?tab=readme-ov-file",
		previewUrl: "https://sliding-game-65029.web.app/",
	},
];

function ProjectSection() {
	return (
		<>
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			<div className="grid md:grid-cols-3 gap-8 md:gap-12">
				{projectData.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.image}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
					/>
				))}
			</div>
		</>
	);
}

export default ProjectSection;
