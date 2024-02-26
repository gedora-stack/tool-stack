import React, { useState } from "react";
import CryptoJS from "crypto-js";

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

const Base64Encoder = ({ id, index, input, setOutput }) => {
	const [localInput, setLocalInput] = useState("");
	const [outputBase64, setOutputBase64] = useState("");

	const hashInput = (plain) => {
		setOutputBase64(btoa(plain));
	};

	return (
		<div className={Styles.mainContainer}>
			<h1 className={Styles.title}>Base64 Encoder</h1>
			<div className={Styles.inputContainer}>
				<button
					onClick={() => {
						hashInput(input ? input : localInput);
					}}
					className={Styles.actionButton}
				>
					Encode
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
						setOutput(outputBase64, index);
					}}
					className={Styles.heading}
				>
					Base64
				</p>
				<input
					value={outputBase64}
					readOnly
					className={Styles.input}
				></input>
			</div>
		</div>
	);
};

export default Base64Encoder;
