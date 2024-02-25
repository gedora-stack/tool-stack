import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsBoxArrowUpRight, BsPlusSquare } from "react-icons/bs";

const Styles = {
	container:
		"group relative flex h-36 w-56 max-w-56 cursor-grab select-none flex-col items-center justify-center space-y-4 rounded-2xl border border-zinc-700 bg-zinc-800 bg-opacity-40 p-8 backdrop-blur-lg duration-100 active:cursor-grabbing active:outline-none",
	description:
		"absolute w-40 text-center text-sm font-thin text-zinc-500 opacity-0 duration-300 group-hover:translate-y-6 group-hover:opacity-100",
	icon: "text-2xl text-zinc-400 duration-300 group-hover:opacity-0",
	title: "text-md text-center font-thin text-zinc-400 duration-300 group-hover:-translate-y-14",
	replaceIcon:
		"absolute -top-1 right-3 text-zinc-600 duration-1000 opacity-0 group-hover:opacity-100 text-lg",
	addIcon:
		"absolute bottom-3 left-3 text-zinc-600 duration-1000 opacity-0 group-hover:opacity-100 text-lg",
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
	return (
		<AnimatePresence mode="wait">
			<motion.div
				onDragStart={(e) => {
					handleDragStart(e, { id: id, title: title });
				}}
				key={id}
				draggable="true"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3 }}
				className={Styles.container}
			>
				<p className={Styles.description}>{description}</p>
				<div className="flex flex-col items-center space-y-6">
					{Icon && <Icon className={Styles.icon} />}
					<h1 className={Styles.title}>{title}</h1>
				</div>
				<BsBoxArrowUpRight
					onClick={() => {
						handleSingleMode({ id: id, title: title });
					}}
					className={Styles.replaceIcon}
				/>
				<BsPlusSquare
					onClick={() => {
						handleQuickAdd({ id: id, title: title });
					}}
					className={Styles.addIcon}
				/>
			</motion.div>
		</AnimatePresence>
	);
};

export default BannerTool;
