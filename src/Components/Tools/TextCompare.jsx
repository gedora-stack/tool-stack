import React from "react";

const TextCompare = ({ index, input, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input ? input : "TextCompare", index);
			}}
		>
			TextCompare INPUT:{input}
		</div>
	);
};

export default TextCompare;
