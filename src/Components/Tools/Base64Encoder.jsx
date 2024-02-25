import React from "react";

const Base64Encoder = ({ index, input, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input ? input : "Base64Encoder", index);
			}}
		>
			Base64Encoder INPUT:{input}
		</div>
	);
};

export default Base64Encoder;
