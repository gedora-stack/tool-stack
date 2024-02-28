import React, { useState } from "react";
import CryptoJS from "crypto-js";

const Styles = {
	mainContainer:
		"w-full flex space-y-12 flex-col items-center justify-start border border-zinc-700 backdrop-blur-3xl border-opacity-50 bg-zinc-800 bg-opacity-15 px-5 py-20 rounded-xl",
	title: "text-3xl font-thin text-center text-zinc-400",
	input: "appearance-none w-full bg-zinc-800 border border-zinc-700 border-opacity-50 bg-opacity-35 rounded-xl font-thin text-zinc-400 px-3 py-2 focus:outline-none",
	inputContainer: "w-3/4 flex items-center justify-center",
	heading: "font-thin text-lg text-zinc-500 mr-5",
	actionButton:
		"font-thin text-zinc-400 mr-6 bg-zinc-800 p-3 rounded-3xl border border-opacity-50 bg-opacity-35 border-zinc-700",
};

const HashGenerator = ({ id, index, input, setOutput }) => {
	const [localInput, setLocalInput] = useState("");
	const [outputMD5, setOutputMD5] = useState("");
	const [outputSHA1, setOutputSHA1] = useState("");

	const hashInput = (plain) => {
		const md5Hash = CryptoJS.MD5(plain).toString(CryptoJS.enc.Hex);
		const sha1Hash = CryptoJS.SHA1(plain).toString(CryptoJS.enc.Hex);

		setOutputMD5(md5Hash);
		setOutputSHA1(sha1Hash);
	};

	return (
		<div className={Styles.mainContainer}>
			<h1 className={Styles.title}>Hash Generator</h1>
			<div className={Styles.inputContainer}>
				<button
					onClick={() => {
						hashInput(input ? input : localInput);
					}}
					className={Styles.actionButton}
				>
					Hash
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
						setOutput(outputMD5, index);
					}}
					className={Styles.heading}
				>
					MD5
				</p>
				<input
					value={outputMD5}
					readOnly
					className={Styles.input}
				></input>
			</div>

			<div className={Styles.inputContainer}>
				<p
					onClick={() => {
						setOutput(outputSHA1, index);
					}}
					className={Styles.heading}
				>
					SHA1
				</p>
				<input
					readOnly
					value={outputSHA1}
					className={Styles.input}
				></input>
			</div>
		</div>
	);
};

export default HashGenerator;
