"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Photo from "./Photo";
import { FiDownload } from "react-icons/fi";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const HeroSection = () => {
	return (
		<section>
			<div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-24">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="col-span-7 place-self-center text-center sm:text-left order-2 xl:order-none"
				>
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-800">
							Hello, I&apos;m
						</span>
						<br />
						<span>A</span>
						<TypeAnimation
							sequence={["dam", 1500, " Web Developer", 1500]}
							wrapper="span"
							speed={40}
							repeat={Infinity}
						/>
					</h1>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-justify"
					>
						Welcome to my page. My name is Adam Giszter, and I am a Front-end
						Developer. I am delighted to have you here and hope you find the
						information you are looking for. Feel free to download my CV to
						learn more about my skills and experience. If you have any
						questions, do not hesitate to get in touch with me.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<div className="flex flex-col sm:flex-row sm:items-center gap-4">
							<Link
								href="/#contact"
								className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-400 to-secondary-800 text-white text-center transition-transform duration-300 hover:scale-105 hover:brightness-110"
							>
								Hire Me
							</Link>

							<Link
								href="/CV.pdf"
								target="_blank"
								download
								className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white transition-transform duration-300 hover:scale-105 hover:brightness-110 "
							>
								<span className="flex bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 justify-center gap-2 items-center">
									Download CV <FiDownload />
								</span>
							</Link>
							<div className="flex flex-row gap-4 justify-center sm:ml-auto">
								<Link
									className="transition-transform duration-300 hover:scale-125"
									href="https://github.com/Giszta"
									aria-label="GitHub Profile"
								>
									<Image src={GithubIcon} alt="GitHub" width={30} height={30} />
								</Link>
								<Link
									href="https://www.linkedin.com/in/adam-giszter/"
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
