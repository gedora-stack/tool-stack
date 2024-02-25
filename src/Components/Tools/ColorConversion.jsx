import React from "react";

const ColorConversion = ({ index, input, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input ? input : "ColorConversion", index);
			}}
		>
			ColorConversion INPUT:{input}
		</div>
	);
};

export default ColorConversion;
