import React, { useEffect, useState } from "react";
import * as tools from "./Tools/Tools.js";

const componentMap = {
	"p-001": tools.JsonConverter,
	"p-002": tools.TextCompare,
	"p-003": tools.ColorConversion,
	"p-004": tools.DiffViewer,
	"p-005": tools.CodeFormatter,
	"p-006": tools.TimeConverter,
	"p-007": tools.Base64Encoder,
	"p-008": tools.HashGenerator,
	"p-009": tools.CssUnitConverter,
};

const Stack = ({ pipedBubbles }) => {
	const [tools, setTools] = useState([]);

	useEffect(() => {
		const updatedTools = pipedBubbles.map((bubble, index) => ({
			index: index,
			id: bubble.id,
			input: "",
			output: "",
		}));
		setTools(updatedTools);
	}, [pipedBubbles]);

	const setPipe = (output, index) => {
		setTools((prevTools) => {
			return prevTools.map((tool) => {
				if (tool.index === index + 1) {
					return { ...tool, input: output };
				} else {
					return tool;
				}
			});
		});
	};

	return (
		<div>
			{tools.map((tool, index) => {
				const DynamicComponent = componentMap[tool.id.substring(0, 5)];

				if (DynamicComponent) {
					return (
						<DynamicComponent
							key={index}
							input={tool.input}
							output={tool.output}
							setOutput={setPipe}
							index={index}
						/>
					);
				}

				return null;
			})}
		</div>
	);
};

export default Stack;
