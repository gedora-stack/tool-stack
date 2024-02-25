import React from "react";

const CodeFormatter = ({ index, input, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input ? input : "CodeFormatter", index);
			}}
		>
			CodeFormatter INPUT:{input}
		</div>
	);
};

export default CodeFormatter;
