"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Sign from "../../../public/images/logo2.png";

function Logo() {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<a
				onClick={handleClick}
				href="/"
				className="flex items-center gap-2 text-white font-serif text-xl cursor-pointer"
			>
				<motion.div
					whileHover={{ scale: 1.1, rotate: 3 }}
					whileTap={{ scale: 0.95 }}
					transition={{ duration: 0.2 }}
				>
					<Image src={Sign} alt="Sign icon" className="h-10 w-auto" />
				</motion.div>
			</a>
		</motion.div>
	);
}

export default Logo;
