import React, { useState } from "react";

const Styles = {
	mainContainer:
		"w-full flex space-y-12 flex-col items-center justify-start border border-zinc-700 px-5 py-20 rounded-xl",
	title: "text-3xl font-thin text-center text-zinc-400",
	input: "appearance-none w-full bg-zinc-800 border border-zinc-700 rounded-xl font-thin text-zinc-400 px-3 py-2 focus:outline-none",
	inputContainer: "w-3/4 flex items-center justify-center",
	heading: "font-thin text-lg text-zinc-500 mr-5",
	actionButton:
		"font-thin text-zinc-400 mr-6 bg-zinc-800 p-3 rounded-3xl border border-zinc-700",
};

const CaseFormatter = ({ id, index, input, setOutput }) => {
	const [localInput, setLocalInput] = useState("");
	const [outputLowercase, setOutputLowercase] = useState("");
	const [outputUppercase, setOutputUppercase] = useState("");

	const convertInput = (plain) => {
		setOutputLowercase(plain.toLowerCase());
		setOutputUppercase(plain.toUpperCase());
	};

	return (
		<div className={Styles.mainContainer}>
			<h1 className={Styles.title}>Case Formatter</h1>
			<div className={Styles.inputContainer}>
				<button
					onClick={() => {
						convertInput(input ? input : localInput);
					}}
					className={Styles.actionButton}
				>
					Convert
				</button>
				<input
					value={input ? input : localInput}
					onChange={(e) => {
						setLocalInput(e.target.value);
					}}
					className={Styles.input}
				></input>
			</div>

			<div className={Styles.inputContainer}>
				<p
					onClick={() => {
						setOutput(outputUppercase, index);
					}}
					className={Styles.heading}
				>
					UPPERCASE
				</p>
				<input
					value={outputUppercase}
					readOnly
					className={Styles.input}
				></input>
			</div>

			<div className={Styles.inputContainer}>
				<p
					onClick={() => {
						setOutput(outputLowercase, index);
					}}
					className={Styles.heading}
				>
					lowercase
				</p>
				<input
					readOnly
					value={outputLowercase}
					className={Styles.input}
				></input>
			</div>
		</div>
	);
};

export default CaseFormatter;
