import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

interface ProjectCardProps {
	imgUrl: string;
	title: string;
	description: string;
	gitUrl: string;
	previewUrl: string;
	technologies?: string[];
}

const techIcons: { [name: string]: JSX.Element } = {
	NextJs: <SiNextdotjs className="text-white" />,
	React: <FaReact className="text-blue-400" />,
	Tailwind: <SiTailwindcss className="text-teal-400" />,
	TypeScript: <SiTypescript className="text-blue-500" />,
	HTML5: <FaHtml5 className="text-orange-500" />,
	CSS3: <FaCss3 className="text-blue-500" />,
	JavaScript: <FaJs className="text-yellow-400" />,
};

function ProjectCard({
	imgUrl,
	title,
	description,
	gitUrl,
	previewUrl,
	technologies = [],
}: ProjectCardProps) {
	return (
		<div className="relative">
			<div
				className="group rounded-t-xl h-52 md:h-72 relative overflow-hidden "
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="hidden md:flex absolute top-0 left-0 w-full h-full items-center justify-center bg-[#181818] bg-opacity-80 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
					<Link
						href={gitUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
					>
						<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
					</Link>
					<Link
						href={previewUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
					>
						<EyeIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
					</Link>
				</div>
				<div className="md:hidden absolute top-2 right-2 flex space-x-2">
					<Link
						href={gitUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 flex items-center justify-center bg-[#222] bg-opacity-80 rounded-full hover:bg-opacity-100 transition"
					>
						<CodeBracketIcon className="h-6 w-6 text-white" />
					</Link>
					<Link
						href={previewUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 flex items-center justify-center bg-[#222] bg-opacity-80 rounded-full hover:bg-opacity-100 transition"
					>
						<EyeIcon className="h-6 w-6 text-white" />
					</Link>
				</div>
			</div>
			<div className="text-white rounded-b-xl  bg-[#181818] py-6 px-4">
				<h5 className="text-lg font-semibold ">{title}</h5>
				<p className="text-[#ADB7BE] pb-3">{description}</p>
			</div>
			{technologies.length > 0 && (
				<div className="absolute bottom-2 right-2 flex gap-2 bg-[#181818] p-1 rounded-lg">
					{technologies.map((tech, i) => (
						<span key={i}>{techIcons[tech] || null}</span>
					))}
				</div>
			)}
		</div>
	);
}

export default ProjectCard;
