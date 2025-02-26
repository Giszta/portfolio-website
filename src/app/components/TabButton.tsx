import React, { MouseEventHandler, ReactNode } from "react";

interface TabButtonProps {
	active: boolean;
	selectTab: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
}

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
	return (
		<button
			onClick={selectTab}
			className="relative px-4 py-2 mb-5 transition-transform duration-300 hover:scale-105"
		>
			<p
				className={`relative inline-block font-semibold transition-colors duration-300 ${
					active ? "text-white" : "text-[#ADB7BE] hover:text-white"
				}`}
			>
				{children}

				{/* Animowane podkreślenie */}
				<span
					className={`absolute left-0 bottom-0 w-full h-0.5 bg-primary-500 transition-all duration-300  ${
						active ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
					}`}
				></span>
			</p>
		</button>
	);
};

export default TabButton;
