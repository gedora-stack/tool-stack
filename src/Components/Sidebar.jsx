import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsFillPlusCircleFill } from "react-icons/bs";
import SidebarTool from "./SidebarTool";

const Styles = {
	sidebarContainer:
		"relative z-10 flex h-[84vh] min-w-[15rem] max-w-[15rem] flex-col items-center justify-start rounded-r-2xl border-y border-r border-y-zinc-700 border-r-zinc-700 bg-zinc-800 bg-opacity-40 px-3 text-sm duration-500",
	title: "my-4 text-xl font-thin text-zinc-400",
	stackContainer:
		"container-snap h-full w-[12rem] overflow-y-scroll border-b border-t border-b-zinc-700 border-t-zinc-700 py-6",
	toolTip:
		"font-sm flex h-full animate-fade items-center justify-center text-center font-thin text-zinc-500 animate-duration-300",
	additionHelper:
		"absolute -right-14 top-1/2 text-3xl text-emerald-600 duration-300",
	sidebarButton:
		"my-4 rounded-lg animate-fade border border-zinc-700 px-4 py-1 text-xl font-thin text-zinc-400 duration-300 cursor-pointer",
};

const Sidebar = ({ setDeployed, deployed, stackedTools, setStackedTools }) => {
	const [additionHelper, setAdditionHelper] = useState(false);
	const [exchangeEvent, setExchangeEvent] = useState(false);

	//For stacked tools, grabs the id, title and index in stack of the dragged tool
	const handleDragStart = (e, tool) => {
		setExchangeEvent(true);
		e.dataTransfer.setData("toolTitle", tool.title);
		e.dataTransfer.setData("toolId", tool.id);
		e.dataTransfer.setData("toolIndex", tool.index);
	};

	//When dropping, checks if tool dropped is from the display part, if it is, adds it to the end of array
	//Changes the id to have a p in front, so we can differentiate stacked and displayed tools
	//Also appends unique uuid, so we can have multiple of the same tools
	const handleDragEnd = (e) => {
		setAdditionHelper(false);
		setExchangeEvent(false);
		const toolTitle = e.dataTransfer.getData("toolTitle");
		const toolId = e.dataTransfer.getData("toolId");

		if (toolId.startsWith("b")) {
			setStackedTools([
				...stackedTools,
				{
					title: toolTitle,
					id: toolId.replace("b", "s") + "-" + uuidv4(),
				},
			]);
		}
	};

	//For sending as prop to SidebarTool component
	const handleToolDrop = (updatedTools) => {
		setStackedTools(updatedTools);
	};

	//Removes the tool by id
	const handleRemove = (idToRemove) => {
		setStackedTools((prevTools) =>
			prevTools.filter((tool) => tool.id !== idToRemove),
		);
	};

	//Prevents deploy when no tools in stack
	const handleDeploy = () => {
		if (stackedTools.length > 0) {
			setDeployed(!deployed);
		} else {
		}
	};

	return (
		<div
			onDrop={handleDragEnd}
			onDragOver={(e) => {
				setAdditionHelper(true);
				e.preventDefault();
			}}
			onDragLeave={() => {
				setAdditionHelper(false);
			}}
			className={Styles.sidebarContainer}
		>
			<h1 className={Styles.title}>Your Stack</h1>
			<div className={Styles.stackContainer}>
				{stackedTools.length === 0 ? (
					<p className={Styles.toolTip}>
						Drag & drop tools to create a stack
					</p>
				) : (
					stackedTools.map((tool, index) => (
						<SidebarTool
							setExchangeEvent={setExchangeEvent}
							key={tool.id}
							setAdditionHelper={setAdditionHelper}
							handleRemove={handleRemove}
							index={index}
							stackedTools={stackedTools}
							handleToolDrop={handleToolDrop}
							handleDragStart={handleDragStart}
							title={tool.title}
							id={tool.id}
						/>
					))
				)}
			</div>
			<div
				className={`${Styles.additionHelper} ${additionHelper && !exchangeEvent ? "-translate-x-3 rotate-0 opacity-100" : "translate-x-0 rotate-90 opacity-0"}`}
			>
				<BsFillPlusCircleFill />
			</div>
			{deployed ? (
				<div
					key={"configure"}
					onClick={handleDeploy}
					className={`${Styles.sidebarButton} ${stackedTools.length > 0 ? "text-zinc-400" : "text-zinc-700"}`}
				>
					Configure
				</div>
			) : (
				<div
					key={"deploy"}
					onClick={handleDeploy}
					className={`${Styles.sidebarButton} ${stackedTools.length > 0 ? "text-zinc-400" : "text-zinc-700"}`}
				>
					Deploy
				</div>
			)}
		</div>
	);
};

export default Sidebar;
