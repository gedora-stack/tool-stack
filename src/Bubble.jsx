import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Bubble = ({ title, icon: Icon }) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={title}
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0 }}
				transition={{ duration: 0.3 }}
				className="m-10 flex flex-col items-center justify-center space-y-10 rounded-3xl bg-zinc-800 bg-opacity-40 py-10 outline outline-1 outline-zinc-600 backdrop-blur-lg"
			>
				<h1 className="text-2xl font-thin text-zinc-400">{title}</h1>
				{Icon && <Icon className="text-5xl text-zinc-400" />}
			</motion.div>
		</AnimatePresence>
	);
};

export default Bubble;
