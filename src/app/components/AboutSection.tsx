"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactElement, useState, useTransition, useMemo } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Import ikon
import HTMLIcon from "../../../public/html.svg";
import CSSIcon from "../../../public/css.svg";
import JSIcon from "../../../public/js.svg";
import TSIcon from "../../../public/ts.svg";
import ReactIcon from "../../../public/react.svg";
import NextjsIcon from "../../../public/nextjs.svg";
import GitIcon from "../../../public/git.svg";
import TailwindIcon from "../../../public/tailwind.svg";
import MechatronicsIcon from "../../../public/mechatronics.svg";
import MechanicIcon from "../../../public/mechanical-engineering.svg";
import CertificatIcon from "../../../public/certificat.svg";
interface TabDataItem {
	title: string;
	id: string;
	content: ReactElement;
}

const TAB_DATA: TabDataItem[] = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<div className="grid grid-cols-3 gap-6 mt-4">
				{[
					{ src: HTMLIcon, name: "HTML5" },
					{ src: CSSIcon, name: "CSS3" },
					{ src: JSIcon, name: "JavaScript" },
					{ src: TSIcon, name: "TypeScript" },
					{ src: ReactIcon, name: "React" },
					{ src: NextjsIcon, name: "Next.js", className: "invert" },
					{ src: GitIcon, name: "Git" },
					{ src: TailwindIcon, name: "Tailwind CSS" },
				].map(({ src, name, className }) => (
					<motion.div
						key={name}
						className="flex flex-col items-center gap-5 "
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<Image
							src={src}
							alt={name}
							width={50}
							height={50}
							className={className}
						/>
						<span className="text-sm text-gray-300">{name}</span>
					</motion.div>
				))}
			</div>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-y-5">
				{[
					{
						src: MechatronicsIcon,
						degree: "Bachelor of Engineering",
						name: "Mechatronics",
					},
					{
						src: MechanicIcon,
						degree: "Master of Science Engineering",
						name: "Mechanical Engineering",
						className: "invert",
					},
				].map(({ src, degree, className, name }) => (
					<motion.div
						key={degree}
						className="flex flex-col items-center"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<Image
							src={src}
							alt={degree}
							width={50}
							height={50}
							className={className}
						/>
						<span className="text-sm text-gray-300 ">{degree}</span>
						<span className="text-sm text-gray-300">{name}</span>
					</motion.div>
				))}
			</div>
		),
	},
	{
		title: "Certification",
		id: "certifications",
		content: (
			<div className="grid grid-cols-1 gap-y-5">
				{[
					{
						src: CertificatIcon,
						name: "ACERT B2",
					},
				].map(({ src, name }) => (
					<motion.div
						key={name}
						className="flex flex-col items-center"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<Image src={src} alt={name} width={50} height={50} />
						<span className="text-sm text-gray-300 ">{name}</span>
					</motion.div>
				))}
			</div>
		),
	},
];

function AboutSection() {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id: string) => {
		startTransition(() => {
			setTab(id);
		});
	};

	const activeTabContent = useMemo(() => {
		return (
			TAB_DATA.find((t) => t.id === tab)?.content || (
				<div>Content not found</div>
			)
		);
	}, [tab]);

	return (
		<motion.section
			className="text-white"
			id="about"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<div className="grid gap-y-8  xl:gap-16 xl:grid-cols-12 grid-cols-1 mt-20">
				<motion.div className="flex flex-col h-full col-span-4 order-2 xl:order-none ">
					<div className="flex flex-row justify-center xl:justify-start mb-4 ">
						{TAB_DATA.map(({ id, title }) => (
							<TabButton
								key={id}
								selectTab={() => handleTabChange(id)}
								active={tab === id}
							>
								{title}
							</TabButton>
						))}
					</div>
					<AnimatePresence mode="wait">
						<motion.div
							key={tab}
							className="overflow-hidden"
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
						>
							{activeTabContent}
						</motion.div>
					</AnimatePresence>
				</motion.div>
				<motion.div className="text-left flex flex-col h-full col-span-8">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg text-justify text-[#ADB7BE]">
						Technology and creativity are at the heart of everything I do. My
						journey into front-end development started with a passion for
						building engaging, user-friendly interfaces. As an engineer, I
						thrive on solving problems and continuously improving my skills in
						React, TypeScript, and modern UI frameworks.
						<br />
						With a background in mechatronics and mechanical engineering, I
						bring an analytical mindset to software development, blending
						precision with design thinking. I am committed to learning,
						adapting, and delivering high-quality code that enhances user
						experiences.
					</p>
				</motion.div>
			</div>
		</motion.section>
	);
}

export default AboutSection;
