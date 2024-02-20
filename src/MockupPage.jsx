import React from "react";
import Search from "./Search";
import Bubble from "./Bubble";
import Pipe from "./Pipe";
import { VscJson } from "react-icons/vsc";
import { VscTextSize } from "react-icons/vsc";
import { VscSymbolColor } from "react-icons/vsc";
import { VscDiff } from "react-icons/vsc";
import { VscCode } from "react-icons/vsc";
import { WiTime3 } from "react-icons/wi";
import { FiHash } from "react-icons/fi";
import { PiFileCssLight } from "react-icons/pi";
import { useState } from "react";

const MockupPage = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const [lele, setLele] = useState([
		{ title: "JSON Converter", icon: VscJson },
		{ title: "Text Compare  ", icon: VscTextSize },
		{ title: "Color Conversion", icon: VscSymbolColor },
		{ title: "Diff Viewer", icon: VscDiff },
		{ title: "Code Formatter", icon: VscCode },
		{ title: "Time Converter", icon: WiTime3 },
		{ title: "Base64 Encoder", icon: FiHash },
		{ title: "Hash Generator", icon: FiHash },
		{ title: "CSS Unit Converter", icon: PiFileCssLight },
	]);

	const handleDragStart = (e, tool) => {
		e.dataTransfer.setData("toolTitle", tool);
	};

	const filteredBubbles = lele.filter((item) =>
		item.title.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className="flex flex-row items-start justify-between bg-zinc-900 py-20">
			<div className="flex min-h-screen w-3/5 flex-col items-center justify-start space-y-16">
				<Search
					onChange={(e) => {
						setTimeout(setSearchQuery(e.target.value), 1500);
					}}
				/>
				<div className="grid w-10/12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{filteredBubbles.map((item, index) => (
						<Bubble
							handleDragStart={handleDragStart}
							key={index}
							title={item.title}
							icon={item.icon}
						/>
					))}
				</div>
			</div>
			<Pipe />
		</div>
	);
};

export default MockupPage;
