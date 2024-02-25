import React from "react";

const CodeFormatter = ({ input, output, index, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input, index);
			}}
		>
			CodeFormatter {input} {output}
		</div>
	);
};

export default CodeFormatter;
