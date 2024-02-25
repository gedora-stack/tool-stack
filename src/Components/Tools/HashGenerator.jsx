import React from "react";

const HashGenerator = ({ index, input, setOutput }) => {
	return (
		<div
			onClick={() => {
				setOutput(input ? input : "HashGenerator", index);
			}}
		>
			HashGenerator INPUT:{input}
		</div>
	);
};

export default HashGenerator;
