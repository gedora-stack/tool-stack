import React, { useEffect, useState } from "react";
import * as tools from "./Tools/Tools.js";
import { BsChevronDown } from "react-icons/bs";

const toolMap = {
	"s-001": tools.JsonConverter,
	"s-002": tools.CaseFormatter,
	"s-003": tools.ColorConversion,
	"s-004": tools.DiffViewer,
	"s-005": tools.CodeFormatter,
	"s-006": tools.TimeConverter,
	"s-007": tools.Base64Encoder,
	"s-008": tools.HashGenerator,
	"s-009": tools.CssUnitConverter,
};

const Styles = {
	container: "w-full space-y-8",
	arrow: "w-full text-3xl text-zinc-500",
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
		<div className={Styles.container}>
			{tools.map((tool, index) => {
				const ToolComponent = toolMap[tool.id.substring(0, 5)];

				if (ToolComponent) {
					return (
						<>
							<ToolComponent
								id={tool.id}
								key={index}
								input={tool.input}
								setOutput={setPropagation}
								index={index}
							/>
							<BsChevronDown
								className={
									Styles.arrow +
									` ${index == stackedTools.length - 1 ? "hidden" : ""}`
								}
							/>
						</>
					);
				}

				return null;
			})}
		</div>
	);
};

export default Stack;
