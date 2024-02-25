import React from "react";

const JsonConverter = ({ input, output, index, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input, index);
			}}
		>
			JsonConverter {input} {output}
		</div>
	);
};

export default JsonConverter;
