import React from "react";

const CssUnitConverter = ({ index, input, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input ? input : "CssUnitConverter", index);
			}}
		>
			CssUnitConverter INPUT:{input}
		</div>
	);
};

export default CssUnitConverter;
