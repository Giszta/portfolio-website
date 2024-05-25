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
				<li>asdbasfkas</li>
				<li>asdbasfkas</li>
				<li>asdbasfkas</li>
				<li>asdbasfkas</li>
				<li>asdbasfkas</li>
				<li>asdbasfkas</li>
				<li>asdbasfkas</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>645446687</li>
				<li>645446687</li>
				<li>645446687</li>
			</ul>
		),
	},
	{
		title: "Certification",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>djkfbsdkjfnksa</li>
				<li>djkfbsdkjfnksa</li>
				<li>djkfbsdkjfnksa</li>
				<li>djkfbsdkjfnksa</li>
				<li>djkfbsdkjfnksa</li>
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
						expedita totam repudiandae incidunt debitis, quo corporis voluptate
						beatae quis harum itaque. Necessitatibus praesentium in provident
						placeat corporis labore ratione perferendis!
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
