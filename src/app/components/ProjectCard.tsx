import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
	imgUrl: string;
	title: string;
	description: string;
	gitUrl: string;
	previewUrl: string;
}

function ProjectCard({
	imgUrl,
	title,
	description,
	gitUrl,
	previewUrl,
}: ProjectCardProps) {
	return (
		<div>
			<div
				className="group rounded-t-xl h-52 md:h-72 bg-center relative overflow-hidden"
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
					<Link
						href={gitUrl}
						className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
					</Link>
					<Link
						href={previewUrl}
						className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
					>
						<EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
					</Link>
				</div>
			</div>
			<div className="text-white rounded-b-xl  bg-[#181818] py-6 px-4">
				<h5 className="text-lg font-semibold ">{title}</h5>
				<p className="text-[#ADB7BE]">{description}</p>
			</div>
		</div>
	);
}

export default ProjectCard;
