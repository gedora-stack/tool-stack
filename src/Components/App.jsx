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

const Styles = {
	pageContainer:
		"flex h-screen flex-row items-center w-full overflow-y-hidden justify-between bg-zinc-900",
	mainContainer:
		"flex w-full min-w-[32rem] h-screen flex-col items-center justify-center",
	bannerContainer:
		"flex h-full w-full flex-col items-center justify-start pt-[8vh]",
	bannerGrid:
		"container-snap max-h-screen px-4 masked-overflow grid grid-cols-1 gap-16 py-20 overflow-y-scroll lg:grid-cols-2 xl:grid-cols-3",
	stackContainer:
		"px-20 w-full h-full flex items-center flex-col overflow-y-scroll py-[8vh]",
};

const App = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [deployed, setDeployed] = useState(false);
	const [stackedTools, setStackedTools] = useState([]);
	const [rerenderId, setRerenderId] = useState(uuidv4());

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
		setRerenderId(uuidv4());
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

	const handleQuickAdd = (tool) => {
		setStackedTools([
			...stackedTools,
			{
				title: tool.title,
				id: tool.id.replace("b", "s") + "-" + uuidv4(),
			},
		]);
	};

	const handleSingleMode = (tool) => {
		setStackedTools([
			{
				title: tool.title,
				id: tool.id.replace("b", "s") + "-" + uuidv4(),
			},
		]);
		setDeployed(true);
	};

	return (
		<>
			<div className={Styles.pageContainer}>
				<Sidebar
					setDeployed={setDeployed}
					deployed={deployed}
					stackedTools={stackedTools}
					setStackedTools={setStackedTools}
				/>
				<div className={Styles.mainContainer}>
					{deployed ? (
						<AnimatePresence mode="wait">
							<motion.div
								className={`${Styles.stackContainer} ${stackedTools.length == 1 ? "justify-center" : "justify-start"}`}
								key={rerenderId + uuidv4()}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<Stack stackedTools={stackedTools} />
							</motion.div>
						</AnimatePresence>
					) : (
						<AnimatePresence mode="wait">
							<motion.div
								className={Styles.bannerContainer}
								key={"banner"}
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
						</AnimatePresence>
					)}
				</div>
			</div>
		</>
	);
};

export default App;
