"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Photo from "./Photo";

const HeroSection = () => {
	return (
		<section>
			<div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-24">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-7 place-self-center text-center sm:text-left order-2 xl:order-none"
				>
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-800">
							Hello, I&apos;m{" "}
						</span>
						<br />
						<span>A</span>
						<TypeAnimation
							sequence={["dam", 1000, " " + "Web Developer", 1000]}
							wrapper="span"
							speed={30}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						{" "}
						Welcome to my page. My name is Adam Giszter, and I am a Front-end
						Developer. I am delighted to have you here and hope you find the
						information you are looking for. Feel free to download my CV to
						learn more about my skills and experience. If you have any
						questions, do not hesitate to get in touch with me.
					</p>
					<div>
						<Link
							href="/#contact"
							className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
						>
							Hire Me
						</Link>
						<Link
							href="/CV.pdf"
							target="_blank"
							download="/CV.pdf"
							className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
						>
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Download CV
							</span>
						</Link>
					</div>
				</motion.div>
				<div className="order-1 xl:order-none mb-8 xl:mb-0 col-span-5">
					<Photo />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
