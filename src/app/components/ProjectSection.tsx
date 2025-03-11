"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectData = [
	{
		id: 1,
		title: "Photopage",
		description: "Photo portfolio website",
		image: "/images/projects/fotoroman.png",
		gitUrl: "https://github.com/Giszta/photography-portfolio.git",
		previewUrl: "https://photography-portfolio-jet.vercel.app/",
		technologies: ["NextJs", "React", "Tailwind", "TypeScript"],
	},
	{
		id: 2,
		title: "Portfolio Website",
		description: "My portfolio website",
		image: "/images/projects/portfolio.png",
		gitUrl: "https://github.com/Giszta/portfolio-website.git",
		previewUrl: "https://github.com/Giszta/portfolio-website.git",
		technologies: ["NextJs", "React", "Tailwind", "TypeScript"],
	},
	{
		id: 3,
		title: "Email Assistant",
		description: "Little mail response automation",
		image: "/images/projects/assistant.png",
		gitUrl: "https://github.com/Giszta/email-assistant.git",
		previewUrl: "https://email-assistant-ruddy.vercel.app/",
		technologies: ["NextJs", "React", "Tailwind", "TypeScript"],
	},
	{
		id: 4,
		title: "Puzzle",
		description: "Sliding puzzle game",
		image: "/images/projects/puzzle.png",
		gitUrl:
			"https://github.com/Giszta/sliding-game---react-practice?tab=readme-ov-file",
		previewUrl: "https://sliding-game-65029.web.app/",
		technologies: ["React", "TypeScript", "CSS3"],
	},
	{
		id: 5,
		title: "Photopage - first try ;)",
		description: "Photo portfolio website",
		image: "/images/projects/photopage.png",
		gitUrl: "https://github.com/Giszta/photopage",
		previewUrl: "https://giszta.github.io/photopage/",
		technologies: ["JavaScript", "HTML5", "CSS3"],
	},
];

function ProjectSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};
	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
				My Projects
			</h2>
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{projectData.map((project, index) => (
					<motion.li
						key={project.id}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
							technologies={project.technologies}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
}

export default ProjectSection;
