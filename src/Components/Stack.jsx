import React, { useEffect, useState } from "react";
import * as tools from "./Tools/Tools.js";

const toolMap = {
	"s-001": tools.JsonConverter,
	"s-002": tools.TextCompare,
	"s-003": tools.ColorConversion,
	"s-004": tools.DiffViewer,
	"s-005": tools.CodeFormatter,
	"s-006": tools.TimeConverter,
	"s-007": tools.Base64Encoder,
	"s-008": tools.HashGenerator,
	"s-009": tools.CssUnitConverter,
};

const Stack = ({ stackedTools }) => {
	const [tools, setTools] = useState([]);

	//Renders corresponding components for tools in array, updated when array changed
	useEffect(() => {
		const updatedTools = stackedTools.map((tool, index) => ({
			index: index,
			id: tool.id,
			input: "",
		}));
		setTools(updatedTools);
	}, [stackedTools]);

	//For propagating outputs to tools in stack, makes the output of the current tool and input of the next tool by index in array
	const setPropagation = (output, index) => {
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
				const ToolComponent = toolMap[tool.id.substring(0, 5)];

				if (ToolComponent) {
					return (
						<ToolComponent
							key={index}
							input={tool.input}
							setOutput={setPropagation}
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
