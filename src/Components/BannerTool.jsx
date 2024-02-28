import React, { useState } from "react";
import { BsBoxArrowUpRight, BsPlusSquare } from "react-icons/bs";

const Styles = {
	container:
		"group relative flex h-36 w-56 max-w-56 cursor-grab select-none flex-col items-center justify-center space-y-4 rounded-2xl border border-opacity-40 shadow-sm border-zinc-700 bg-zinc-800 bg-opacity-35 p-8 duration-100 active:cursor-grabbing active:outline-none",
	description:
		"absolute w-40 text-center text-sm font-thin text-zinc-400 opacity-0 duration-300 group-hover:translate-y-6 group-hover:opacity-100",
	titleContainer: "flex flex-col items-center space-y-6",
	icon: "text-2xl text-zinc-400 duration-300 group-hover:opacity-0",
	title: "text-md text-center font-thin text-zinc-400 duration-300 group-hover:-translate-y-14",
	replaceContainer: "absolute -top-16 py-2 cursor-pointer",
	replaceControl:
		"font-thin px-4 py-1 bg-zinc-800 bg-opacity-25 border border-zinc-700 border-opacity-40 rounded-3xl flex flex-row items-center justify-center text-blue-400 text-sm",
	addContainer: "absolute -bottom-12 py-2",
	addControl:
		"py-1 px-4 font-thin bg-zinc-800 border bg-opacity-25 border-zinc-700 border-opacity-40 rounded-3xl flex flex-row items-center justify-center text-emerald-400 text-sm cursor-pointer",
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
			<div className={Styles.titleContainer}>
				{Icon && <Icon className={Styles.icon} />}
				<h1 className={Styles.title}>{title}</h1>
			</div>
			<div className={Styles.replaceContainer}>
				<div
					onClick={() => {
						handleSingleMode({ id: id, title: title });
					}}
					className={`${Styles.replaceControl} ${!dragRemove ? "opacity-0 duration-300 group-hover:opacity-100" : "opacity-0 duration-0 group-hover:opacity-0"}`}
				>
					Open
					<BsBoxArrowUpRight className={Styles.replaceIcon} />
				</div>
			</div>
			<div className={Styles.addContainer}>
				<div
					onClick={() => {
						handleQuickAdd({ id: id, title: title });
					}}
					className={`${Styles.addControl} ${!dragRemove ? "opacity-0 duration-300 group-hover:opacity-100" : "opacity-0 duration-0 group-hover:opacity-0"}`}
				>
					<BsPlusSquare className={Styles.addIcon} />
					Stack
				</div>
			</div>
		</div>
	);
};

export default BannerTool;
