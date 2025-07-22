"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Photo from "./Photo";
import { FiDownload } from "react-icons/fi";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const HeroSection = () => {
	const [cvLink, setCvLink] = useState("");

	useEffect(() => {
		setTimeout(() => {
			setCvLink(
				"/Adam Giszter - Engineer Who Codes - React TypeScript Next.js Tailwind ENG.pdf"
			);
		}, 1000);
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		const section = document.querySelector("#contact");

		if (section) {
			const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
			const sectionPosition =
				section.getBoundingClientRect().top + window.scrollY;
			const offset = 20;

			window.scrollTo({
				top: sectionPosition - navbarHeight - offset,
				behavior: "smooth",
			});
		}
	};

	return (
		<section>
			<div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-24">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="col-span-7 place-self-center text-center sm:text-left order-2 xl:order-none"
				>
					<h1 className="text-white mb-4 text-2xl sm:text-4xl lg:text-4xl font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-800">
							Hello, I&apos;m
						</span>
						<br />
						<span>A</span>
						<TypeAnimation
							sequence={[
								"dam",
								1200,
								" Design Engineer",
								1200,
								" Web Developer",
								1200,
								"n Engineer who codes",
								1200,
							]}
							wrapper="span"
							speed={80}
							repeat={Infinity}
						/>
					</h1>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-[#ADB7BE] text-base sm:text-lg  lg:text-xl mb-6 text-justify"
					>
						Welcome to my space on the web — where code meets design thinking.
						I&nbsp;specialize in building intuitive, user-focused interfaces
						using React and TypeScript. My roots are in mechanical engineering —
						and I&nbsp;bring that same level of precision, structure, and
						curiosity into every line of code I&nbsp;write. Feel free to
						download my CV and reach out if you&apos;re looking for a developer
						who combines logic, creativity, and real-world problem-solving.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<div className="flex flex-col sm:flex-row sm:items-center gap-4">
							<a
								href="/#contact"
								onClick={handleClick}
								className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-400 to-secondary-800 text-white text-center transition-transform duration-300 hover:scale-105 hover:brightness-110 cursor-pointer"
							>
								Hire Me
							</a>

							{cvLink && (
								<a
									href={cvLink}
									target="_blank"
									rel="noopener noreferrer"
									className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white transition-transform duration-300 hover:scale-105 hover:brightness-110 "
								>
									<span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 justify-center gap-2 items-center">
										Download CV <FiDownload />
									</span>
								</a>
							)}
							<div className="flex flex-row gap-4 justify-center sm:ml-auto">
								<Link
									className="transition-transform duration-300 hover:scale-125"
									target="_blank"
									href="https://github.com/Giszta"
									aria-label="GitHub Profile"
								>
									<Image src={GithubIcon} alt="GitHub" width={30} height={30} />
								</Link>
								<Link
									href="https://www.linkedin.com/in/adam-giszter/"
									target="_blank"
									aria-label="LinkedIn Profile"
									className="transition-transform duration-300 hover:scale-125"
								>
									<Image
										src={LinkedinIcon}
										alt="LinkedIn"
										width={30}
										height={30}
									/>
								</Link>
							</div>
						</div>
					</motion.div>
				</motion.div>
				<div className="order-1 xl:order-none mb-8 xl:mb-0 col-span-5">
					<Photo />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
