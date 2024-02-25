import React from "react";

const HashGenerator = ({ input, output, index, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input, index);
			}}
		>
			HashGenerator {input} {output}
		</div>
	);
};

export default HashGenerator;
