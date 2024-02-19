import React from "react";
import ToolCard from "./ToolCard.jsx"; // Make sure the path is correct

const HomePage = () => {
	return (
		<div className="m-auto mt-5 flex h-auto w-3/4  flex-wrap justify-center rounded-md bg-gray-500 p-5 shadow-2xl shadow-gray-500">
			<ToolCard
				imageUrl="image-url-1"
				toolName="Tool Name 1"
				toolDescription="Tool Description 1"
				className="w-full  p-4 sm:w-1/2 md:w-1/3"
			/>
			<ToolCard
				imageUrl="image-url-2"
				toolName="Tool Name 2"
				toolDescription="Tool Description 2"
				className="w-full p-4 sm:w-1/2 md:w-1/3"
			/>
			<ToolCard
				imageUrl="image-url-3"
				toolName="Tool Name 3"
				toolDescription="Tool Description 3"
				className="w-full p-4 sm:w-1/2 md:w-1/3"
			/>
		</div>
	);
};

export default HomePage;
