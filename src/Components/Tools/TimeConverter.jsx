import React from "react";

const TimeConverter = ({ input, output, index, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input, index);
			}}
		>
			TimeConverter {input} {output}
		</div>
	);
};

export default TimeConverter;
