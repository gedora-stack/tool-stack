import React, { useState } from "react";
import PipeBubble from "./PipeBubble";
import { v4 as uuidv4 } from "uuid";

const Pipe = () => {
	const [pipedBubbles, setPipedBubbles] = useState([]);

	//Adds mouse indicator when dragging over
	const handleDragOver = (e) => {
		e.preventDefault();
	};

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
			onDragOver={handleDragOver}
			className="flex h-full min-h-screen min-w-[15rem] max-w-[15rem] flex-col items-center justify-start overflow-y-scroll border-r border-r-zinc-700 bg-zinc-800 bg-opacity-40 px-3 text-sm duration-300"
		>
			<h1 className="my-10 text-xl font-thin text-zinc-400">
				Your Stack
			</h1>
			{pipedBubbles.length === 0 ? (
				<p className="font-sm flex h-full animate-fade items-center justify-center text-center font-thin text-zinc-400 animate-duration-300">
					Drag & drop tools to create a stack
				</p>
			) : (
				pipedBubbles.map((item, index) => (
					<PipeBubble
						key={item.id}
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
