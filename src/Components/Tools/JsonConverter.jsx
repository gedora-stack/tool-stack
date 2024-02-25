import React from "react";

const JsonConverter = ({ index, input, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input ? input : "JsonConverter", index);
			}}
		>
			JsonConverter INPUT:{input}
		</div>
	);
};

export default JsonConverter;
