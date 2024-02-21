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
		{ id: "s-001", title: "JSON Converter", icon: VscJson },
		{ id: "s-002", title: "Text Compare  ", icon: VscTextSize },
		{ id: "s-003", title: "Color Conversion", icon: VscSymbolColor },
		{ id: "s-004", title: "Diff Viewer", icon: VscDiff },
		{ id: "s-005", title: "Code Formatter", icon: VscCode },
		{ id: "s-006", title: "Time Converter", icon: WiTime3 },
		{ id: "s-007", title: "Base64 Encoder", icon: FiHash },
		{ id: "s-008", title: "Hash Generator", icon: FiHash },
		{ id: "s-009", title: "CSS Unit Converter", icon: PiFileCssLight },
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
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MockupPage;
