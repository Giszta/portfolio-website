import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
	return (
		<footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
			<div className="container p-12 flex justify-between items-center">
				<span>
					<Link
						href={"/"}
						className=" text-2xl md:text-5xl z-10 text-white font-semibold "
					>
						<Image
							src="/images/logo.png"
							alt="logo"
							width={75}
							height={75}
							className="bg-transparent"
						/>
					</Link>
				</span>
				<p className="text-slate-600">All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
