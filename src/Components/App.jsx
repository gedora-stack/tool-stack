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

const Styles = {
	mainContainer:
		"flex h-screen flex-row items-center justify-between overflow-y-hidden bg-zinc-900",
	bannerContainer:
		"flex h-full w-full min-w-[32rem] flex-col items-center justify-start pt-[8vh]",
	bannerGrid:
		"container-snap grid grid-cols-1 gap-16 overflow-y-scroll pb-14 pt-28 lg:grid-cols-2 xl:grid-cols-3",
};

const App = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [deployed, setDeployed] = useState(false);
	const [stackedTools, setStackedTools] = useState([]);

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
			title: "Text Compare  ",
			icon: VscTextSize,
			description: "Compare two texts",
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
	}, [stackedTools, deployed]);

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
			<div className={Styles.mainContainer}>
				<Sidebar
					setDeployed={setDeployed}
					deployed={deployed}
					stackedTools={stackedTools}
					setStackedTools={setStackedTools}
				/>
				<div className={Styles.bannerContainer}>
					{deployed ? (
						<>
							<Stack stackedTools={stackedTools} />
						</>
					) : (
						<>
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
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default App;
