import React from "react";

const Styles = {
	search: "z-10 w-1/3 rounded-2xl bg-zinc-800 bg-opacity-35 px-4 py-2 font-thin text-zinc-300 caret-zinc-500 border border-zinc-700 border-opacity-50 duration-300 placeholder:text-zinc-400 hover:scale-105 focus:outline-0 focus:outline-none",
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
