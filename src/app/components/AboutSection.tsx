"use client";
import React, { ReactElement, useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
			<ul className="list-disc pl-2">
				<li>HTML5</li>
				<li>CSS3</li>
				<li>JavaScript</li>
				<li>Git</li>
				<li>React</li>
				<li>TypeScript</li>
				<li>React Native</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>Bachelor of Engineering, Mechatronics</li>
				<li>Master of Science Engineering, Mechanical Engineering</li>
			</ul>
		),
	},
	{
		title: "Certification",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>ACERT B2</li>
			</ul>
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

	return (
		<section className="text-white" id="about">
			<div className="md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src="/images/about-image.jpeg"
					alt="about image"
					width={500}
					height={500}
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg">
						My adventure with programming has started about a year ago and it
						became my hobby. I spend most of my free evenings learning and
						exploring front-end secrets. I am engineer oriented to gain
						knowledge and new experience. Every missing piece of knowledge and
						experience, I make up with great commitment and a desire to make
						constant progress in my skills. Punctuality, diligence and respect
						for the entrusted work are my strenghts. I believe my experience and
						skills gained so far are strong base for further professional
						development in your company.
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							Skills
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							Education
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}
						>
							Certifications
						</TabButton>
					</div>
					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab)?.content || (
							<div>Content not found</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
