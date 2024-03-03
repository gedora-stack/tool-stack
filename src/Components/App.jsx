import React, { useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import {
	VscJson,
	VscTextSize,
	VscSymbolColor,
	VscDiff,
	VscCode,
} from "react-icons/vsc";
import { WiTime3 } from "react-icons/wi";
import { FiHash } from "react-icons/fi";
import { PiFileCssLight } from "react-icons/pi";
import { useState } from "react";
import Stack from "./Stack";
import BannerTool from "./BannerTool";
import { v4 as uuidv4 } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import SidebarSingle from "./SidebarSingle";

const Styles = {
	background: "bg-custom absolute z-0 h-screen w-full",
	pageContainer:
		"flex h-screen flex-row items-center w-full overflow-y-hidden z-20 justify-between bg-zinc-900",
	mainContainer:
		"flex w-full min-w-[32rem] h-screen flex-col items-center justify-center",
	bannerContainer:
		"flex h-full w-full flex-col items-center justify-start pt-[8vh]",
	bannerGrid:
		"container-snap max-h-screen px-4 masked-overflow grid grid-cols-1 gap-x-12 gap-y-24 py-24 overflow-y-scroll lg:grid-cols-2 xl:grid-cols-3",
	stackContainer:
		"px-20 w-full h-full flex items-center flex-col overflow-y-scroll py-[8vh]",
};

const App = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [deployed, setDeployed] = useState(false);
	const [stackedTools, setStackedTools] = useState([]);
	const [singleSidebar, setSingleSidebar] = useState(false);

	//Array of tools with unique ids
	const [tools, setTools] = useState([
		{
			id: "b-001",
			title: "JSON Converter",
			icon: VscJson,
			description: "Convert JSON to XML, CSV, and more",
		},
		{
			id: "b-002",
			title: "Case Formatter",
			icon: VscTextSize,
			description: "Format text case",
		},
		{
			id: "b-003",
			title: "Color Conversion",
			icon: VscSymbolColor,
			description: "Convert HEX, RGB, and HSL",
		},
		{
			id: "b-004",
			title: "Diff Viewer",
			icon: VscDiff,
			description: "Compare two files",
		},
		{
			id: "b-005",
			title: "Code Formatter",
			icon: VscCode,
			description: "Format your code",
		},
		{
			id: "b-006",
			title: "Time Converter",
			icon: WiTime3,
			description: "Convert time zones",
		},
		{
			id: "b-007",
			title: "Base64 Encoder",
			icon: FiHash,
			description: "Encode and decode base64",
		},
		{
			id: "b-008",
			title: "Hash Generator",
			icon: FiHash,
			description: "Generate hash",
		},
		{
			id: "b-009",
			title: "CSS Unit Converter",
			icon: PiFileCssLight,
			description: "Convert CSS units",
		},
	]);

	//Checks if stack empty and shows banner page
	useEffect(() => {
		if (stackedTools.length == 0) {
			setDeployed(false);
		}
	}, [stackedTools]);

	//Grabs the title and the id when starting drag
	const handleDragStart = (e, tool) => {
		e.dataTransfer.setData("toolTitle", tool.title);
		e.dataTransfer.setData("toolId", tool.id);
	};

	//Filtered array for searching
	const filteredTools = tools.filter((tool) =>
		tool.title.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	//Adds tool to bottom of stack when pressing quick add
	const handleQuickAdd = (tool) => {
		setStackedTools([
			...stackedTools,
			{
				title: tool.title,
				id: tool.id.replace("b", "s") + "-" + uuidv4(),
			},
		]);
	};

	const handleRemoveOnDrop = (e) => {
		setStackedTools((prevTools) =>
			prevTools.filter(
				(tool) => tool.id !== e.dataTransfer.getData("toolId"),
			),
		);
	};

	//Deploys only a single selected tool
	const handleSingleMode = (tool) => {
		setStackedTools([
			{
				title: tool.title,
				id: tool.id.replace("b", "s") + "-" + uuidv4(),
			},
		]);
		setSingleSidebar(true);
		setDeployed(true);
	};

	return (
		<>
			<div
				onDrop={handleRemoveOnDrop}
				onDragOver={(e) => {
					e.preventDefault();
				}}
				className={Styles.background}
			></div>
			<div className={Styles.pageContainer}>
				<AnimatePresence mode="wait">
					{singleSidebar ? (
						<motion.div
							key={singleSidebar}
							initial={{ x: "-100%" }}
							animate={{ x: 0 }}
							exit={{ x: "-100%" }}
							transition={{ duration: 0.2 }}
						>
							<SidebarSingle
								setSingleSidebar={setSingleSidebar}
								setDeployed={setDeployed}
							/>
						</motion.div>
					) : (
						<motion.div
							key={singleSidebar}
							initial={{ x: "-100%" }}
							animate={{ x: 0 }}
							exit={{ x: "-100%" }}
							transition={{ duration: 0.2 }}
						>
							<Sidebar
								setDeployed={setDeployed}
								deployed={deployed}
								stackedTools={stackedTools}
								setStackedTools={setStackedTools}
							/>
						</motion.div>
					)}
				</AnimatePresence>
				<div
					onDrop={handleRemoveOnDrop}
					onDragOver={(e) => {
						e.preventDefault();
					}}
					className={Styles.mainContainer}
				>
					<AnimatePresence mode="wait">
						{deployed ? (
							<motion.div
								key={deployed}
								className={`${Styles.stackContainer} ${stackedTools.length == 1 ? "justify-center" : "justify-start"}`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<Stack
									setStackedTools={setStackedTools}
									stackedTools={stackedTools}
								/>
							</motion.div>
						) : (
							<motion.div
								className={Styles.bannerContainer}
								key={deployed}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<Search
									onChange={(e) => {
										setSearchQuery(e.target.value);
									}}
								/>
								<div className={Styles.bannerGrid}>
									{filteredTools.map((tool, index) => (
										<BannerTool
											index={index}
											handleSingleMode={handleSingleMode}
											handleQuickAdd={handleQuickAdd}
											handleDragStart={handleDragStart}
											key={tool.id}
											id={tool.id}
											title={tool.title}
											icon={tool.icon}
											description={tool.description}
										/>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	);
};

export default App;
