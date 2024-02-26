import React from "react";

const Styles = {
	search: "z-10 w-1/3 -mb-2 appearance-none rounded-2xl bg-zinc-800 bg-opacity-40 px-4 py-2 font-thin text-zinc-400 caret-zinc-500 outline outline-1 outline-zinc-600 backdrop-blur-lg transition-all duration-300 placeholder:text-zinc-500 hover:scale-105 focus:outline-offset-0",
};

const Search = ({ onChange }) => {
	return (
		<input
			type="text"
			onChange={onChange}
			placeholder="Search..."
			className={Styles.search}
		></input>
	);
};

export default Search;
