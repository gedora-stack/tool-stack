import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Bubble = ({ id, title, icon: Icon, handleDragStart, description }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				onDragStart={(e) => {
					setHovered(null);
					handleDragStart(e, { id: id, title: title });
				}}
				onMouseEnter={() => {
					setHovered(true);
				}}
				onMouseLeave={() => {
					setHovered(false);
				}}
				key={id}
				draggable="true"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3 }}
				className="flex h-36 w-56 max-w-56 cursor-grab select-none flex-col items-center justify-center space-y-4 rounded-2xl border border-zinc-700 bg-zinc-800 bg-opacity-40 p-8 duration-100"
			>
				{hovered ? (
					<p className="mx-4 animate-fade text-center text-sm font-thin text-zinc-400 animate-duration-1000">
						{description}
					</p>
				) : (
					<div
						className={`flex flex-col items-center space-y-6 ${hovered != null ? "animate-fade animate-duration-1000" : ""}`}
					>
						{Icon && <Icon className="text-2xl text-zinc-400" />}
						<h1 className="text-md text-center font-thin text-zinc-400">
							{title}
						</h1>
					</div>
				)}
			</motion.div>
		</AnimatePresence>
	);
};

export default Bubble;
