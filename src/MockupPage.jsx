import React from "react";
import Search from "./Search";
import Bubble from "./Bubble";
import { AiFillAlert } from "react-icons/ai";
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

	const lele = [
		{ title: "JSON Converter", icon: VscJson },
		{ title: "Text Compare  ", icon: VscTextSize },
		{ title: "Color Conversion", icon: VscSymbolColor },
		{ title: "Diff Viewer", icon: VscDiff },
		{ title: "Code Formatter", icon: VscCode },
		{ title: "Time Converter", icon: WiTime3 },
		{ title: "Base64 Encoder", icon: FiHash },
		{ title: "Hash Generator", icon: FiHash },
		{ title: "CSS Unit Converter", icon: PiFileCssLight },
	];

	const filteredBubbles = lele.filter((item) =>
		item.title.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<>
			<div className="absolute min-h-screen w-full translate-y-48 bg-[url('/slopes.png')] bg-cover"></div>
			<div className="flex min-h-screen w-full flex-col items-center justify-start space-y-20 bg-zinc-900 px-72 py-28">
				<Search
					onChange={(e) => {
						setSearchQuery(e.target.value);
					}}
				/>
				<div className="grid w-full grid-cols-3">
					{filteredBubbles.map((item, index) => (
						<Bubble
							key={index}
							title={item.title}
							icon={item.icon}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default MockupPage;
