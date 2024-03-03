import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { RxCross1 } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";

const Styles = {
	motionContainer: "flex flex-col items-center",
	toolContainer:
		"flex w-[10.5rem] cursor-grab flex-row items-center justify-between rounded-xl border border-opacity-50 border-zinc-700 bg-zinc-800 bg-opacity-15 py-3 pl-3 font-thin text-zinc-300",
	removeCross:
		"cursor-pointer duration-300 hover:scale-[1.4] hover:text-rose-500",
	title: "flex-grow text-center",
	arrow: "text-lg text-zinc-400 duration-300 my-3",
};

const SidebarTool = ({
	id,
	title,
	handleDragStart,
	handleToolDrop,
	stackedTools,
	index,
	handleRemove,
	setAdditionHelper,
	setExchangeEvent,
	setExclusionHelper,
	handleDragOver,
	draggedIndex,
	setDraggedIndex,
}) => {
	const [grab, setGrab] = useState(false);

	useEffect(() => {
		return () => {
			setExclusionHelper(false);
			setExchangeEvent(false);
			setDraggedIndex(null);
		};
	}, []);

	//When dropping stacked tool on a stacked tool, remove the tool that is being dropped, then add the dropped tool
	//at the index of the tool that it is being dropped on
	const handleDragEnd = (e) => {
		setAdditionHelper(false);
		e.stopPropagation();

		const toolTitle = e.dataTransfer.getData("toolTitle");
		const toolId = e.dataTransfer.getData("toolId");

		if (toolId.startsWith("b")) {
			const updatedTools = [...stackedTools];

			updatedTools.splice(index + 1, 0, {
				title: toolTitle,
				id: toolId.replace("b", "s") + "-" + uuidv4(),
			});

			handleToolDrop(updatedTools);
		}
	};

	return (
		<div className={Styles.motionContainer}>
			<motion.div
				onDrop={handleDragEnd}
				index={index}
				draggable="true"
				onDragStart={(e) => {
					handleDragStart(e, { id: id, title: title, index: index });
					setGrab(true);
				}}
				onDragEnd={(e) => {
					e.preventDefault();
					setExchangeEvent(false);
					setGrab(false);
					setDraggedIndex(null);
				}}
				className={
					Styles.toolContainer +
					` ${grab ? "opacity-0 duration-200" : ""}`
				}
				onDragOver={handleDragOver}
				transition={{ duration: 0.1 }}
				layout
				key={id}
			>
				<RxCross1
					className={Styles.removeCross}
					onClick={() => {
						handleRemove(id);
					}}
				/>
				<div className={Styles.title}>{title}</div>
			</motion.div>
			<BsChevronDown
				className={`${Styles.arrow} ${draggedIndex === null ? "" : "opacity-0"} ${index != stackedTools.length - 1 ? "" : "-translate-y-5 opacity-0"}`}
			/>
		</div>
	);
};

export default SidebarTool;
