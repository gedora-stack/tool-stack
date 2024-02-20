import React, { useState } from "react";
import Bubble from "./Bubble";
import { RxCross1 } from "react-icons/rx";
import { RxArrowDown } from "react-icons/rx";

const Pipe = () => {
	const [pipedBubbles, setPipedBubbles] = useState([]);

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDragEnd = (e) => {
		const toolTitle = e.dataTransfer.getData("toolTitle");
		setPipedBubbles([...pipedBubbles, { title: toolTitle }]);
	};

	const handleRemove = (titleToRemove) => {
		setPipedBubbles((prevBubbles) =>
			prevBubbles.filter((item) => item.title !== titleToRemove),
		);
	};

	return (
		<div
			onDrop={handleDragEnd}
			onDragOver={handleDragOver}
			className="flex min-h-screen w-1/2 flex-col items-center justify-start"
		>
			{pipedBubbles.map((item, index) => (
				<div className="flex flex-row items-center justify-around">
					<div
						onClick={() => handleRemove(item.title)}
						className="m-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 bg-opacity-40 text-zinc-700"
					>
						<RxCross1 />
					</div>
					<Bubble
						key={index}
						title={item.title + " "}
						icon={item.icon}
					/>
				</div>
			))}
		</div>
	);
};

export default Pipe;
