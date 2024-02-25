import React from "react";

const ColorConversion = ({ input, output, index, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input, index);
			}}
		>
			ColorConversion {input} {output}
		</div>
	);
};

export default ColorConversion;
