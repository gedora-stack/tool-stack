import React, { useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { RxCross1 } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";

const PipeBubble = ({
	id,
	title,
	handleDragStart,
	handleBubbleDrop,
	pipedBubbles,
	index,
	handleRemove,
	setHelper,
}) => {
	const [exchange, setExchange] = useState(false);

	//When dropping piped bubble on a piped bubble, remove the bubble that is being dropped, then add the dropped bubble
	//at the index of the bubble that it is being dropped on
	const handleDragEnd = (e) => {
		setHelper(false);
		setExchange(false);
		e.stopPropagation();

		const toolIndex = e.dataTransfer.getData("toolIndex");
		const toolTitle = e.dataTransfer.getData("toolTitle");
		const toolId = e.dataTransfer.getData("toolId");

		if (toolId.startsWith("p")) {
			const slicedBubbles = [...pipedBubbles];

			slicedBubbles.splice(parseInt(toolIndex, 10), 1);

			slicedBubbles.splice(index + 1, 0, {
				title: toolTitle,
				id: toolId,
			});

			handleBubbleDrop(slicedBubbles);
		} else if (toolId.startsWith("s")) {
			const slicedBubbles = [...pipedBubbles];

			slicedBubbles.splice(index + 1, 0, {
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
			className="flex flex-col items-center"
			onDrop={handleDragEnd}
			onDragOver={(e) => {
				e.preventDefault();
				setExchange(true);
			}}
			onDragLeave={(e) => {
				e.preventDefault();
				setExchange(false);
			}}
		>
			<div
				index={index}
				draggable="true"
				onDragStart={(e) =>
					handleDragStart(e, { id: id, title: title, index: index })
				}
				className="flex w-[10.5rem] cursor-grab flex-row items-center justify-between rounded-xl border border-zinc-700 bg-zinc-800 bg-opacity-40 py-3 pl-3 font-thin text-zinc-400"
			>
				<RxCross1
					className="cursor-pointer duration-500 hover:scale-125 hover:text-red-400"
					onClick={() => {
						handleRemove(id);
					}}
				/>
				<div className={`flex-grow text-center`}>{title}</div>
			</div>
			<BsChevronDown
				className={`text-lg text-zinc-400 duration-500 ${exchange ? "mb-16 mt-3" : "my-3 "} ${index != pipedBubbles.length - 1 ? "opacity-100" : "-translate-y-5 opacity-0"}`}
			/>
		</motion.div>
	);
};

export default PipeBubble;
