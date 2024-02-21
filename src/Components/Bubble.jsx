import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Bubble = ({ id, title, icon: Icon, handleDragStart }) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				onDragStart={(e) =>
					handleDragStart(e, { id: id, title: title })
				}
				key={id}
				draggable="true"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3 }}
				className="flex max-w-72 cursor-grab select-none flex-col items-center justify-center space-y-4 rounded-2xl border border-zinc-700 bg-zinc-800 bg-opacity-40 p-8 backdrop-blur-lg duration-100 active:cursor-grabbing active:outline-none"
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
