import React from "react";

const ToolCard = ({ imageUrl, toolName, toolDescription }) => {
	return (
		<div className="m-5 animate-fade-left border border-gray-300 animate-once">
			<img src={imageUrl} alt={toolName} />
			<h3>{toolName}</h3>
			<p>{toolDescription}</p>
			<button>Learn More</button>
		</div>
	);
};

export default ToolCard;
