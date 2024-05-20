import React, { MouseEventHandler, ReactNode } from "react";

interface TabButtonProps {
	active: boolean;
	selectTab: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
}

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
	const buttonClasses = active
		? "text-white border-b border-blue-500"
		: "text=[#ADB7BE]";

	return (
		<button onClick={selectTab}>
			<p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
				{children}
			</p>
		</button>
	);
};

export default TabButton;
