import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsBoxArrowUpRight, BsPlusSquare } from "react-icons/bs";

const Styles = {
	container:
		"group relative flex h-36 w-56 max-w-56 cursor-grab select-none flex-col items-center justify-center space-y-4 rounded-2xl border border-zinc-700 bg-zinc-800 bg-opacity-40 p-8 backdrop-blur-lg duration-100 active:cursor-grabbing active:outline-none",
	description:
		"absolute w-40 text-center text-sm font-thin text-zinc-500 opacity-0 duration-300 group-hover:translate-y-6 group-hover:opacity-100",
	icon: "text-2xl text-zinc-400 duration-300 group-hover:opacity-0",
	title: "text-md text-center font-thin text-zinc-400 duration-300 group-hover:-translate-y-14",
	replaceControl:
		"absolute font-thin w-full py-2 -top-1 flex flex-row items-center justify-center text-yellow-600 -translate-y-12 text-sm",
	addControl:
		"absolute w-full bottom-3 py-2 font-thin flex flex-row items-center justify-center text-emerald-600 translate-y-12 text-sm",
	replaceIcon: "text-md ml-2",
	addIcon: "text-md mr-2",
};

const BannerTool = ({
	id,
	title,
	icon: Icon,
	handleDragStart,
	description,
	handleQuickAdd,
	handleSingleMode,
}) => {
	const [dragRemove, setDragRemove] = useState(false);

	return (
		<div
			onDragStart={(e) => {
				handleDragStart(e, { id: id, title: title });
				setDragRemove(true);
			}}
			onDragEnd={() => {
				setDragRemove(false);
			}}
			key={id}
			draggable="true"
			className={Styles.container}
		>
			<p className={Styles.description}>{description}</p>
			<div className="flex flex-col items-center space-y-6">
				{Icon && <Icon className={Styles.icon} />}
				<h1 className={Styles.title}>{title}</h1>
			</div>
			<div
				onClick={() => {
					handleSingleMode({ id: id, title: title });
				}}
				className={`${Styles.replaceControl} ${!dragRemove ? "opacity-0 duration-300 group-hover:opacity-100" : "opacity-0 duration-0 group-hover:opacity-0"}`}
			>
				Single mode
				<BsBoxArrowUpRight className={Styles.replaceIcon} />
			</div>
			<div
				onClick={() => {
					handleQuickAdd({ id: id, title: title });
				}}
				className={`${Styles.addControl} ${!dragRemove ? "opacity-0 duration-300 group-hover:opacity-100" : "opacity-0 duration-0 group-hover:opacity-0"}`}
			>
				<BsPlusSquare className={Styles.addIcon} />
				Quick add
			</div>
		</div>
	);
};

export default BannerTool;
