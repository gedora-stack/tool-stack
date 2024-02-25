import React from "react";

const TextCompare = ({ input, output, index, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input, index);
			}}
		>
			TextCompare {input} {output}
		</div>
	);
};

export default TextCompare;
