import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Bubble = ({ title, icon: Icon, handleDragStart }) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				onDragStart={(e) => handleDragStart(e, title)}
				key={title}
				draggable="true"
				className="m-3 flex cursor-grab select-none flex-col items-center justify-center space-y-4 rounded-2xl border border-zinc-700 bg-zinc-800 bg-opacity-40 p-8 backdrop-blur-lg duration-100 active:cursor-grabbing active:outline-none"
			>
				{Icon && <Icon className="text-2xl text-zinc-400" />}
				<h1 className="text-md text-center font-thin text-zinc-400">
					{title}
				</h1>
			</motion.div>
		</AnimatePresence>
	);
};

export default Bubble;
