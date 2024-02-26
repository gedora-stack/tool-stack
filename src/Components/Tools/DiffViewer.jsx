import React from "react";

const DiffViewer = ({ id, index, input, setOutput }) => {
	return (
		<div className="rounded-xl bg-zinc-800 bg-opacity-40 p-6 text-3xl font-thin text-zinc-400">
			DiffViewer INPUT:{input}
			<input
				onChange={(e) => {
					setOutput(e.target.value.toLocaleUpperCase(), index);
				}}
			></input>
		</div>
	);
};

export default DiffViewer;
