import React from "react";

const CssUnitConverter = ({ id, index, input, setOutput }) => {
	return (
		<div className="rounded-xl bg-zinc-800 bg-opacity-40 p-6 text-3xl font-thin text-zinc-400">
			CssUnitConverter INPUT:{input}
			<input
				onChange={(e) => {
					setOutput(e.target.value.toLocaleUpperCase(), index);
				}}
			></input>
		</div>
	);
};

export default CssUnitConverter;
