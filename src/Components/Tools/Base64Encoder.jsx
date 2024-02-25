import React from "react";

const Base64Encoder = ({ input, output, setOutput, index }) => {
	return (
		<div
			onClick={() => {
				setOutput("keee", index);
			}}
		>
			Base64Encoder {input} {output}
		</div>
	);
};

export default Base64Encoder;
