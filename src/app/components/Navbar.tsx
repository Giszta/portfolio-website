"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navbarItem = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
			<div className=" flex flex-wrap item-center justify-between mx-auto px-4 py-4">
				<Link
					href={"/"}
					className="text-2xl md:text-5xl text-white font-semibold "
				>
					<Image
						src="/images/logo.png"
						alt="logo"
						width={80}
						height={75}
						className="fixed top-0  bg-transparent"
					/>
				</Link>
				<div className="mobile-menu block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navbarItem.map((link, index) => (
							<li key={index}>
								<NavbarItem href={link.path} title={link.title} />
							</li>
						))}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navbarItem} /> : null}
		</nav>
	);
};

export default Navbar;
