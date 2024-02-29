import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { RxCross1 } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";

const Styles = {
	motionContainer: "flex flex-col items-center",
	toolContainer:
		"flex w-[10.5rem] cursor-grab flex-row items-center justify-between rounded-xl border border-opacity-50 border-zinc-700 bg-zinc-800 bg-opacity-15 py-3 pl-3 font-thin text-zinc-400",
	removeCross:
		"cursor-pointer duration-300 hover:scale-[1.4] hover:text-rose-500",
	title: "flex-grow text-center",
	arrow: "text-lg text-zinc-400 duration-300",
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
}) => {
	const [exchange, setExchange] = useState(false);
	const [grab, setGrab] = useState(false);

	useEffect(() => {
		return () => {
			setExclusionHelper(false);
			setExchangeEvent(false);
		};
	}, []);

	//When dropping stacked tool on a stacked tool, remove the tool that is being dropped, then add the dropped tool
	//at the index of the tool that it is being dropped on
	const handleDragEnd = (e) => {
		setAdditionHelper(false);
		setExchange(false);
		e.stopPropagation();

		const toolIndex = e.dataTransfer.getData("toolIndex");
		const toolTitle = e.dataTransfer.getData("toolTitle");
		const toolId = e.dataTransfer.getData("toolId");

		if (toolId.startsWith("s")) {
			const updatedTools = [...stackedTools];

			updatedTools.splice(parseInt(toolIndex, 10), 1);

			updatedTools.splice(index + 1, 0, {
				title: toolTitle,
				id: toolId,
			});

			handleToolDrop(updatedTools);
		} else if (toolId.startsWith("b")) {
			const updatedTools = [...stackedTools];

			updatedTools.splice(index + 1, 0, {
				title: toolTitle,
				id: toolId.replace("b", "s") + "-" + uuidv4(),
			});

			handleToolDrop(updatedTools);
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
			className={Styles.motionContainer}
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
				onDragStart={(e) => {
					handleDragStart(e, { id: id, title: title, index: index });
					setGrab(true);
				}}
				onDragEnd={(e) => {
					e.preventDefault();
					setExchangeEvent(false);
					setGrab(false);
				}}
				className={
					Styles.toolContainer +
					` ${grab ? "opacity-40 duration-200" : ""}`
				}
			>
				<RxCross1
					className={Styles.removeCross}
					onClick={() => {
						handleRemove(id);
					}}
				/>
				<div className={Styles.title}>{title}</div>
			</div>
			<BsChevronDown
				className={`${Styles.arrow} ${exchange ? "mb-16 mt-3" : "my-3"} ${index != stackedTools.length - 1 ? "opacity-100" : "-translate-y-5 opacity-0"}`}
			/>
		</motion.div>
	);
};

export default SidebarTool;
