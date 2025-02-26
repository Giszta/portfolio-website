import React from "react";
import { motion } from "framer-motion";

interface NavbarItemValue {
	href: string;
	title: string;
}

function NavbarItem({ href, title }: NavbarItemValue) {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		const section = document.querySelector(href);

		if (section) {
			const navbarHeight = document.querySelector("nav")?.offsetHeight || 0; // Pobiera wysokość navbara
			const sectionPosition =
				section.getBoundingClientRect().top + window.scrollY; // Pozycja sekcji względem strony
			const offset = 20; // Dodatkowy margines, aby tekst nie był zbyt blisko

			window.scrollTo({
				top: sectionPosition - navbarHeight - offset,
				behavior: "smooth",
			});
		}
	};

	return (
		<motion.div
			whileHover={{ y: -3 }}
			transition={{ duration: 0.2 }}
			className="relative"
		>
			<a
				onClick={handleClick}
				href={href}
				className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white 
				relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
				after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
			>
				{title}
			</a>
		</motion.div>
	);
}

export default NavbarItem;
