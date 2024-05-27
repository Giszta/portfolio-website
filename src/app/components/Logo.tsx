import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoIcon from "../../../public/logo.svg";
function Logo() {
	return (
		<Link
			className="flex items-center gap-2 text-white font-serif text-xl"
			href={"/"}
		>
			<Image src={LogoIcon} alt="Logo Icon"></Image>
			<span>Adam Giszter</span>
		</Link>
	);
}

export default Logo;
