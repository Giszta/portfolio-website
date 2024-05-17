import React from "react";
import NavbarItem from "./NavbarItem";

type Link = {
	path: string;
	title: string;
};

type MenuOverlayProps = {
	links: Link[];
};

function MenuOverlay({ links }: MenuOverlayProps) {
	return (
		<ul className="flex flex-col py-4 items-center ">
			{links.map((link, index) => (
				<li key={index}>
					<NavbarItem href={link.path} title={link.title} />
				</li>
			))}
		</ul>
	);
}

export default MenuOverlay;
