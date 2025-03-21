"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarItem from "./NavbarItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Logo from "./Logo";

const navbarItem = [
	{ title: "About", path: "#about" },
	{ title: "Projects", path: "#projects" },
	{ title: "Contact", path: "#contact" },
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const handleItemClick = () => {
		setNavbarOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setNavbarOpen(false);
			}
		};

		if (navbarOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [navbarOpen]);

	return (
		<nav
			className="fixed w-full border-[#33353F] border-b z-50 bg-[#121212]"
			aria-label="Główna nawigacja"
		>
			<div className="container mx-auto flex flex-wrap items-center justify-between lg:py-4 px-4 py-2">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<Logo />
				</motion.div>
				<div className="mobile-menu block md:hidden">
					<motion.button
						onClick={() => setNavbarOpen(!navbarOpen)}
						whileTap={{ scale: 0.95 }}
						className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
					>
						{navbarOpen ? (
							<XMarkIcon className="h-5 w-5" />
						) : (
							<Bars3Icon className="h-5 w-5" />
						)}
					</motion.button>
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navbarItem.map((link) => (
							<motion.li
								key={link.path}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							>
								<NavbarItem
									href={link.path}
									title={link.title}
									onClick={handleItemClick}
								/>
							</motion.li>
						))}
					</ul>
				</div>
			</div>
			<AnimatePresence>
				{navbarOpen && (
					<motion.div
						ref={menuRef}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
						className="overflow-hidden"
					>
						<MenuOverlay links={navbarItem} onItemClick={handleItemClick} />
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
