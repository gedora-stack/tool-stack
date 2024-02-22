import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Bubble = ({ id, title, icon: Icon, handleDragStart, description }) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				onDragStart={(e) => {
					handleDragStart(e, { id: id, title: title });
					e.currentTarget.classList.remove("hover");
				}}
				onDragEnd={(e) => {
					e.currentTarget.classList.remove("hover");
					e.currentTarget.style.transform = "none"; // reset the position
				}}
				onMouseEnter={(e) => {
					e.currentTarget.classList.add("hover");
				}}
				onMouseLeave={(e) => {
					e.currentTarget.classList.remove("hover");
				}}
				key={id}
				draggable="true"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3 }}
				className="bubble flex max-w-72 cursor-grab select-none flex-col items-center justify-center space-y-4 rounded-2xl border border-zinc-700 bg-zinc-800 bg-opacity-40 p-8 backdrop-blur-lg duration-100 active:cursor-grabbing active:outline-none"
			>
				{Icon && <Icon className="icon text-2xl text-zinc-400" />}
				<h1 className="title text-md text-center font-thin text-zinc-400">
					{title}
				</h1>
				<p className="description text-md ml-4 mr-4 text-center font-thin text-zinc-400">
					{description}
				</p>
			</motion.div>
		</AnimatePresence>
	);
};

export default Bubble;
