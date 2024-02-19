import React from "react";
import ToolCard from "./ToolCard.jsx"; // Make sure the path is correct

const HomePage = () => {
	return (
		<div className="m-auto mt-5 flex h-auto w-3/4 animate-fade-up flex-col items-center justify-center rounded-md bg-slate-400 p-5 animate-once">
			<ToolCard
				imageUrl="image-url-1"
				toolName="Tool Name 1"
				toolDescription="Tool Description 1"
			/>
			<ToolCard
				imageUrl="image-url-2"
				toolName="Tool Name 2"
				toolDescription="Tool Description 2"
			/>
		</div>
	);
};

export default HomePage;
