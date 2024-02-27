import React from "react";
import { PiStackLight } from "react-icons/pi";

const Styles = {
	container:
		"flex z-10 h-[10vh] min-w-[3.5rem] max-w-[3.5rem] flex-col items-center justify-center rounded-r-2xl border-y border-r border-y-zinc-700 border-r-zinc-700 bg-zinc-800 bg-opacity-40 duration-500",
	icon: "text-3xl text-zinc-500 w-full",
};

const SidebarSingle = ({ setSingleSidebar, setDeployed }) => {
	return (
		<div
			className={Styles.container}
			onClick={() => {
				setSingleSidebar(false);
				setDeployed(false);
			}}
		>
			<PiStackLight className={Styles.icon} />
		</div>
	);
};

export default SidebarSingle;
