import React from "react";

const Search = ({ onChange }) => {
	return (
		<input
			type="text"
			onChange={onChange}
			placeholder="Search..."
			className="w-1/2 appearance-none rounded-2xl bg-zinc-800 bg-opacity-40 px-4 py-2 font-thin text-zinc-400 caret-transparent outline outline-1 outline-zinc-700 backdrop-blur-lg placeholder:text-zinc-500 focus:outline-offset-0"
		></input>
	);
};

export default Search;
