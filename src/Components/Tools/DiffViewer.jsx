import React from "react";

const DiffViewer = ({ index, input, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input ? input : "DiffViewer", index);
			}}
		>
			DiffViewer INPUT:{input}
		</div>
	);
};

export default DiffViewer;
