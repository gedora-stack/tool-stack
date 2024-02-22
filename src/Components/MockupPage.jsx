import React from "react";
import Search from "./Search";
import Bubble from "./Bubble";
import Pipe from "./Pipe";
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

const MockupPage = () => {
	const [searchQuery, setSearchQuery] = useState("");

	//Array of tools with unique id
	const [tools, setTools] = useState([
		{
			id: "s-001",
			title: "JSON Converter",
			icon: VscJson,
			description: "Convert JSON to XML, CSV, and more",
		},
		{
			id: "s-002",
			title: "Text Compare  ",
			icon: VscTextSize,
			description: "Compare two texts",
		},
		{
			id: "s-003",
			title: "Color Conversion",
			icon: VscSymbolColor,
			description: "Convert HEX, RGB, and HSL",
		},
		{
			id: "s-004",
			title: "Diff Viewer",
			icon: VscDiff,
			description: "Compare two files",
		},
		{
			id: "s-005",
			title: "Code Formatter",
			icon: VscCode,
			description: "Format your code",
		},
		{
			id: "s-006",
			title: "Time Converter",
			icon: WiTime3,
			description: "Convert time zones",
		},
		{
			id: "s-007",
			title: "Base64 Encoder",
			icon: FiHash,
			description: "Encode and decode base64",
		},
		{
			id: "s-008",
			title: "Hash Generator",
			icon: FiHash,
			description: "Generate hash",
		},
		{
			id: "s-009",
			title: "CSS Unit Converter",
			icon: PiFileCssLight,
			description: "Convert CSS units",
		},
	]);

	//Grabs the title and the id when starting drag
	const handleDragStart = (e, tool) => {
		e.dataTransfer.setData("toolTitle", tool.title);
		e.dataTransfer.setData("toolId", tool.id);
	};

	//Filtered array for searching
	const filteredBubbles = tools.filter((item) =>
		item.title.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className="flex h-screen flex-row items-start justify-between bg-zinc-900">
			<Pipe />
			<div className="flex h-full w-full min-w-[32rem] flex-col items-center justify-start space-y-16 overflow-y-scroll py-20">
				<Search
					onChange={(e) => {
						setSearchQuery(e.target.value);
					}}
				/>
				<div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
					{filteredBubbles.map((item, index) => (
						<Bubble
							handleDragStart={handleDragStart}
							key={item.id}
							id={item.id}
							title={item.title}
							icon={item.icon}
							description={item.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MockupPage;
