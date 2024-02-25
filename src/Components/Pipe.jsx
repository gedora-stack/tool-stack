import React, { useState } from "react";
import PipeBubble from "./PipeBubble";
import { v4 as uuidv4 } from "uuid";

const Pipe = ({ updateMaskSize }) => {
	const [pipedBubbles, setPipedBubbles] = useState([]);
	const [helper, setHelper] = useState(false);

	//For piped bubbles, grabs the id, title and index in stack of the dragged bubble
	const handleDragStart = (e, tool) => {
		e.dataTransfer.setData("toolTitle", tool.title);
		e.dataTransfer.setData("toolId", tool.id);
		e.dataTransfer.setData("toolIndex", tool.index);
	};

	//When dropping, checks if bubble dropped is from the selection part, if it is, adds it to the end of array
	//Changes the id to have a p in front, so we can differentiate piped and normal bubbles
	//Also appends unique uuid, so we can have multiple of the same bubbles
	const handleDragEnd = (e) => {
		setHelper(false);
		const toolTitle = e.dataTransfer.getData("toolTitle");
		const toolId = e.dataTransfer.getData("toolId");

		if (toolId.startsWith("s")) {
			setPipedBubbles([
				...pipedBubbles,
				{
					title: toolTitle,
					id: toolId.replace("s", "p") + "-" + uuidv4(),
				},
			]);
		}
	};

	//For sending as prop to pipeBubble component
	const handleBubbleDrop = (updatedBubbles) => {
		setPipedBubbles(updatedBubbles);
	};

	//Removes the bubble by id
	const handleRemove = (idToRemove) => {
		setPipedBubbles((prevBubbles) =>
			prevBubbles.filter((item) => item.id !== idToRemove),
		);
	};

	return (
		<div
			onDrop={handleDragEnd}
			onDragOver={(e) => {
				setHelper(true);
				e.preventDefault();
			}}
			onDragLeave={() => {
				setHelper(false);
			}}
			className={`z-10 flex h-[84vh] min-w-[15rem] max-w-[15rem] flex-col items-center justify-start overflow-y-scroll rounded-r-2xl border-y border-r border-y-zinc-700 border-r-zinc-700 ${helper ? "bg-opacity-70" : "bg-opacity-40"} bg-zinc-800 px-3 text-sm duration-500`}
		>
			<h1 className="my-8 text-xl font-thin text-zinc-400">Your Stack</h1>
			{pipedBubbles.length === 0 ? (
				<p className="font-sm flex h-full animate-fade items-center justify-center text-center font-thin text-zinc-500 animate-duration-300">
					Drag & drop tools to create a stack
				</p>
			) : (
				pipedBubbles.map((item, index) => (
					<PipeBubble
						key={item.id}
						setHelper={setHelper}
						handleRemove={handleRemove}
						index={index}
						pipedBubbles={pipedBubbles}
						handleBubbleDrop={handleBubbleDrop}
						handleDragStart={handleDragStart}
						title={item.title}
						id={item.id}
					/>
				))
			)}
		</div>
	);
};

export default Pipe;
