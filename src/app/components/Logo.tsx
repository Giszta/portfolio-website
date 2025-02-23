import Link from "next/link";
import React from "react";
import Image from "next/image";
import Sign from "../../../public/images/logo2.png";

function Logo() {
	return (
		<Link
			className="flex items-center gap-2 text-white font-serif text-xl"
			href={"/"}
		>
			<Image src={Sign} alt="Sign icon" className="h-10 w-auto "></Image>
		</Link>
	);
}

export default Logo;
