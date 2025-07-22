"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactElement, useState, useTransition, useMemo } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Ikony
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
import SolidworksIcon from "../../../public/solidworks.svg";
import AutoCADIcon from "../../../public/autocad.svg";
import InventorIcon from "../../../public/inventor.svg";
import ExcelIcon from "../../../public/excel.svg";

const frontendSkills = [
	{
		src: HTMLIcon,
		name: "HTML5",
		desc: "Semantic foundation for every interface I\u00A0build",
	},
	{
		src: CSSIcon,
		name: "CSS3",
		desc: "Pixel-perfect layouts with accessibility in mind",
	},
	{
		src: JSIcon,
		name: "JavaScript",
		desc: "The logic layer I\u00A0use to solve real-world UI challenges",
	},
	{
		src: TSIcon,
		name: "TypeScript",
		desc: "I\u00A0love type safety – it feels like mechanical tolerance for code",
	},
	{
		src: ReactIcon,
		name: "React",
		desc: "My core tool for building fast, scalable interfaces",
	},
	{
		src: NextjsIcon,
		name: "Next.js",
		desc: "Production-ready frontend framework I\u00A0trust",
		className: "invert",
	},
	{
		src: GitIcon,
		name: "Git",
		desc: "Versioning that feels like structured documentation",
	},
	{
		src: TailwindIcon,
		name: "Tailwind CSS",
		desc: "I\u00A0design in the browser — and Tailwind helps me do it fast",
	},
];

const engineeringSkills = [
	{
		src: SolidworksIcon,
		name: "SolidWorks",
		desc: "6 years of experience in 3D CAD modeling and mechanical design",
	},
	{
		src: AutoCADIcon,
		name: "AutoCAD",
		desc: "Precise 2D documentation and technical drawings for manufacturing",
	},
	{
		src: InventorIcon,
		name: "Inventor",
		desc: "Experience in parametric design, motion studies and simulation",
	},
	{
		src: ExcelIcon,
		name: "Excel + VBA",
		desc: "Automated workflows, quote generators, dynamic data handling",
	},
];

function AboutSection() {
	const [tab, setTab] = useState("skills");
	const [subTab, setSubTab] = useState("frontend");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id: string) => {
		startTransition(() => {
			setTab(id);
		});
	};

	const activeTabContent = useMemo(() => {
		if (tab === "skills") {
			return (
				<div className="space-y-6 text-gray-300">
					{/* Sub-tab buttons */}
					<div className="flex justify-center">
						<TabButton
							active={subTab === "frontend"}
							selectTab={() => setSubTab("frontend")}
						>
							Front-end
						</TabButton>
						<TabButton
							active={subTab === "engineering"}
							selectTab={() => setSubTab("engineering")}
						>
							Engineering
						</TabButton>
					</div>

					<AnimatePresence mode="wait">
						<motion.div
							key={subTab}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 10 }}
							transition={{ duration: 0.3 }}
						>
							{subTab === "frontend" ? (
								<div>
									<h3 className="text-lg font-semibold text-white mb-4">
										Front-end Technologies
									</h3>
									<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
										{frontendSkills.map(({ src, name, desc, className }) => (
											<motion.div
												key={name}
												className="flex flex-col items-center text-center gap-2"
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
												<span className="text-sm font-medium text-white">
													{name}
												</span>
												<p className="text-xs text-gray-400">{desc}</p>
											</motion.div>
										))}
									</div>
								</div>
							) : (
								<div>
									<h3 className="text-lg font-semibold text-white mb-4">
										Engineering Tools & Background
									</h3>
									<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
										{engineeringSkills.map(({ src, name, desc }) => (
											<motion.div
												key={name}
												className="flex flex-col items-center text-center gap-2"
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.5, ease: "easeOut" }}
											>
												<Image src={src} alt={name} width={50} height={50} />
												<span className="text-sm font-medium text-white">
													{name}
												</span>
												<p className="text-xs text-gray-400">{desc}</p>
											</motion.div>
										))}
									</div>
								</div>
							)}
						</motion.div>
					</AnimatePresence>
				</div>
			);
		}

		if (tab === "education") {
			return (
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-y-5 mt-4">
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
							<span className="text-sm text-gray-300">{degree}</span>
							<span className="text-sm text-gray-300">{name}</span>
						</motion.div>
					))}
				</div>
			);
		}

		if (tab === "certifications") {
			return (
				<div className="grid grid-cols-1 gap-y-5 mt-4">
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
							<span className="text-sm text-gray-300">{name}</span>
						</motion.div>
					))}
				</div>
			);
		}

		return <div>Content not found</div>;
	}, [tab, subTab]);

	return (
		<motion.section
			className="text-white"
			id="about"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<div className="grid gap-y-8 xl:gap-4 xl:grid-cols-12 grid-cols-1 mt-20 mb-20">
				<motion.div className="flex flex-col h-full col-span-5 order-2 xl:order-none">
					<div className="flex flex-row justify-center xl:justify-between mb-2 w-full">
						{["skills", "education", "certifications"].map((id) => (
							<TabButton
								key={id}
								selectTab={() => handleTabChange(id)}
								active={tab === id}
							>
								{TAB_LABELS[id]}
							</TabButton>
						))}
					</div>
					<AnimatePresence mode="wait">
						<motion.div
							key={tab + subTab}
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

				<motion.div className="text-left flex flex-col h-full col-span-7 xl:ml-5">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg  text-[#ADB7BE] text-justify ">
						Engineer by training. Front-end developer by passion.
						<br />
						<br />
						My journey into front-end development began not in a&nbsp;coding
						bootcamp — but on the factory floor, prototyping machines and
						solving physical problems. With 6 years of experience in mechanical
						design, I&nbsp;understand systems, constraints, and how to deliver
						real value — fast. Today, I&nbsp;use that same mindset to build
						modern, responsive UIs with React, TypeScript, and Tailwind.
						I&nbsp;care deeply about accessibility, maintainability, and clear
						logic in code. I&nbsp;love creating tools that simplify the complex
						— whether it&apos;s for users, teams, or engineers.
						<br />
						<br />
						Always learning. Always building. Always focused on what matters.
					</p>
				</motion.div>
			</div>
		</motion.section>
	);
}

const TAB_LABELS: Record<string, string> = {
	skills: "Skills",
	education: "Education",
	certifications: "Certification",
};

export default AboutSection;
