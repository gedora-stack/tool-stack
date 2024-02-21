import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { RxCross1 } from "react-icons/rx";

const PipeBubble = ({
	id,
	title,
	handleDragStart,
	handleBubbleDrop,
	pipedBubbles,
	index,
	handleRemove,
}) => {
	//When dropping piped bubble on a piped bubble, remove the bubble that is being dropped, then add the dropped bubble
	//at the index of the bubble that it is being dropped on
	const handleDragEnd = (e) => {
		e.stopPropagation();

		const toolIndex = e.dataTransfer.getData("toolIndex");
		const toolTitle = e.dataTransfer.getData("toolTitle");
		const toolId = e.dataTransfer.getData("toolId");

		if (toolId.startsWith("p")) {
			const slicedBubbles = [...pipedBubbles];

			slicedBubbles.splice(parseInt(toolIndex, 10), 1);

			slicedBubbles.splice(index, 0, {
				title: toolTitle,
				id: toolId,
			});

			handleBubbleDrop(slicedBubbles);
		} else if (toolId.startsWith("s")) {
			const slicedBubbles = [...pipedBubbles];

			slicedBubbles.splice(index, 0, {
				title: toolTitle,
				id: toolId.replace("s", "p") + "-" + uuidv4(),
			});

			handleBubbleDrop(slicedBubbles);
		}
	};

	return (
		<motion.div
			key={id}
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			transition={{ duration: 0.2 }}
			layout
			layoutId={id}
			className="flex flex-row items-center justify-around"
		>
			<div
				onClick={() => {
					handleRemove(id);
				}}
				className="m-5 flex cursor-pointer items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-800 bg-opacity-40 p-2 text-zinc-700"
			>
				<RxCross1 />
			</div>
			<div
				index={index}
				onDrop={handleDragEnd}
				draggable="true"
				onDragStart={(e) =>
					handleDragStart(e, { id: id, title: title, index: index })
				}
				className="rounded-3xl border border-zinc-700 bg-zinc-800 bg-opacity-40 px-5 py-3 font-thin text-zinc-400"
			>
				{title}
			</div>
		</motion.div>
	);
};

export default PipeBubble;
