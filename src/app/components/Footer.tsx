import React from "react";
import Logo from "./Logo";

function Footer() {
	return (
		<footer className="footer border-[#33353F] border-t text-white">
			<div className="container p-3 flex justify-between items-center ">
				<Logo />
				<p className="text-slate-600">All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
