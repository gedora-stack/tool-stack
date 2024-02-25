import React from "react";

const DiffViewer = ({ input, output, setOutput, index }) => {
	return (
		<div
			onClick={() => {
				setOutput(input, index);
			}}
		>
			DiffViewer {input} {output}
		</div>
	);
};

export default DiffViewer;
