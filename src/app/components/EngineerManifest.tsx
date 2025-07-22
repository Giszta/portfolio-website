"use client";
import React from "react";
import { motion } from "framer-motion";

function EngineerManifest() {
	return (
		<section
			id="why-me"
			className="text-center text-4xl font-bold text-white mt-12 mb-8 md:mb-12"
		>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="max-w-5xl mx-auto text-center"
			>
				<h1 className="mb-4 text-2xl sm:text-4xl lg:text-4xl font-extrabold">
					Why me?
				</h1>
				<h2 className="mb-4 text-xl sm:text-2xl lg:text-4xl font-extrabold">
					I&apos;m not just a developer.
					<br />
					I&apos;m an engineer who codes.
				</h2>

				<p
					className="

                text-base sm:text-lg  lg:text-xl text-gray-300 leading-relaxed  mx-auto mb-12 text-justify sm:text-center"
				>
					With 6 years of experience in mechanical design, I&nbsp;understand how
					real-world systems work — and how people interact with them.
					<br />
					Today, I&nbsp;use that mindset to build intuitive, responsive, and
					maintainable front-end applications.
					<br />
					I&nbsp;design with logic. I&nbsp;build with precision. I&nbsp;simplify
					what others accept as complicated.
					<br />
					My mission is to create code that’s clean, efficient — and genuinely
					useful for people.
				</p>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
					<div className="bg-gray-800 p-6 rounded-2xl shadow-md">
						<h3 className="text-xl font-semibold mb-2 text-emerald-400">
							Endless imagination
						</h3>
						<p className="text-base lg:text-base text-[#ADB7BE]">
							I&nbsp;sketch, prototype, and rethink interfaces — fast.
							<br />
							Iteration is my native language.
							<br />
							Creativity, my tool.
						</p>
					</div>

					<div className="bg-gray-800 p-6 rounded-2xl shadow-md ">
						<h3 className="text-xl font-semibold mb-2 text-cyan-400">
							Relentless problem-solving
						</h3>
						<p className="text-base lg:text-base text-[#ADB7BE]">
							&ldquo;Good enough&ldquo; isn&apos;t enough.
							<br />
							I&nbsp;push for elegant, scalable, and maintainable solutions in
							every component.
						</p>
					</div>

					<div className="bg-gray-800 p-6 rounded-2xl shadow-md ">
						<h3 className="text-xl font-semibold mb-2 text-fuchsia-400">
							Make it simple
						</h3>
						<p className="text-base lg:text-base text-[#ADB7BE]">
							I&nbsp;reduce complexity, not just in UI — but in logic and
							developer experience.
							<br />
							Always thinking of the end user.
							<br />
							Always thinking of the next dev.
						</p>
					</div>

					<div className="bg-gray-800 p-6 rounded-2xl shadow-md">
						<h3 className="text-xl font-semibold mb-2 text-yellow-400">
							Engineer-level precision
						</h3>
						<p className="text-base lg:text-base text-[#ADB7BE]">
							I&apos;ve designed machines measured in microns.
							<br />
							Now I bring that same focus to pixels, structure, and performance.
						</p>
					</div>

					<div className="bg-gray-800 p-6 rounded-2xl shadow-md">
						<h3 className="text-xl font-semibold mb-2 text-blue-400">
							Creative discipline
						</h3>
						<p className="text-base lg:text-base text-[#ADB7BE]">
							I merge design thinking with systematic frontend architecture.
							<br />
							Motion, spacing, accessibility — all by design.
						</p>
					</div>

					<div className="bg-gray-800 p-6 rounded-2xl shadow-md">
						<h3 className="text-xl font-semibold mb-2 text-pink-400">
							Engineer Developer bridge
						</h3>
						<p className="text-base lg:text-base text-[#ADB7BE]">
							I&nbsp;speak both languages — mechanical and digital.
							<br />
							That makes me especially good at building tools for engineers,
							with engineers.
						</p>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
export default EngineerManifest;
