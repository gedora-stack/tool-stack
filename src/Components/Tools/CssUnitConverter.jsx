import React from "react";

const CssUnitConverter = ({ input, output, setOutput, index }) => {
	return (
		<div
			onClick={() => {
				setOutput(input, index);
			}}
		>
			CssUnitConverter {input} {output}
		</div>
	);
};

export default CssUnitConverter;
