import React from "react";

const TimeConverter = ({ index, input, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input ? input : "TimeConverter", index);
			}}
		>
			TimeConverter INPUT:{input}
		</div>
	);
};

export default TimeConverter;
