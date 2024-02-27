import React, { useEffect, useState } from "react";
import * as tools from "./Tools/Tools.js";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";

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
	container: "w-full",
	arrow: "w-full text-3xl text-zinc-500 my-8",
};

const Stack = ({ stackedTools }) => {
	const [inputs, setInputs] = useState(Array(stackedTools.length).fill(""));

	// For propagating outputs to tools in stack, makes the output of the current tool and input of the next tool by index in array
	const setPropagation = (output, index) => {
		setInputs((prevInputs) => {
			return prevInputs.map((input, i) => {
				if (i === index + 1) {
					return output;
				} else {
					return input;
				}
			});
		});
	};

	return (
		<div className={Styles.container}>
			{stackedTools.map((tool, index) => {
				const ToolComponent = toolMap[tool.id.substring(0, 5)];

				if (ToolComponent) {
					return (
						<motion.div key={tool.id} layout>
							<ToolComponent
								id={tool.id}
								key={index}
								input={inputs[index]}
								setOutput={setPropagation}
								index={index}
							/>
							<BsChevronDown
								className={
									Styles.arrow +
									` ${index === stackedTools.length - 1 ? "hidden" : ""}`
								}
							/>
						</motion.div>
					);
				}

				return null;
			})}
		</div>
	);
};

export default Stack;
