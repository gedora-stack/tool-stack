import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Bubble = ({ id, title, icon: Icon, handleDragStart, description }) => {
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
				className="group relative flex h-36 w-56 max-w-56 cursor-grab select-none flex-col items-center justify-center space-y-4 rounded-2xl border border-zinc-700 bg-zinc-800 bg-opacity-40 p-8 backdrop-blur-lg duration-100 active:cursor-grabbing active:outline-none"
			>
				<p className="absolute w-40 text-center text-sm font-thin text-zinc-500 opacity-0 duration-300 group-hover:translate-y-6 group-hover:opacity-100">
					{description}
				</p>
				<div className="flex flex-col items-center space-y-6">
					{Icon && (
						<Icon className="text-2xl text-zinc-400 duration-300 group-hover:opacity-0" />
					)}
					<h1 className="text-md text-center font-thin text-zinc-400 duration-300 group-hover:-translate-y-14">
						{title}
					</h1>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Bubble;
