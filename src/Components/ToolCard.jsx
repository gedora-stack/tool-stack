import React from "react";
import { LiaAccessibleIcon } from "react-icons/lia";

const ToolCard = ({ imageUrl, toolName, toolDescription }) => {
	return (
		<div className="m-5 flex h-56 w-56 transform  animate-fade-up flex-col items-center justify-center rounded-md border border-gray-300 duration-150 ">
			<LiaAccessibleIcon size={25} className="mb-4 " />
			<h2 className=" text-center text-xl font-semibold">{toolName}</h2>
			<p className="mt-5 text-center ">{toolDescription}</p>
			<button className="mx-auto mt-9 h-10 w-3/4 rounded-3xl bg-black font-semibold text-white duration-300 hover:bg-white hover:text-black">
				Learn More
			</button>
		</div>
	);
};

export default ToolCard;
