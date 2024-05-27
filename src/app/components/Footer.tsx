import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "./Logo";

function Footer() {
	return (
		<footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
			<div className="container p-3 flex justify-between items-center max-w-full">
				<Logo />
				<p className="text-slate-600">All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
