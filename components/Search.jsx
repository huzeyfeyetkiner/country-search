"use client"
import React, { useState } from "react"

function Search({ setText }) {
	const [searchText, setSearchText] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		setText(searchText)
	}

	return (
		<div className="w-full flex-col justify-center items-center">
			<form
				className="w-full flex flex-wrap items-center justify-center gap-x-2"
				onSubmit={handleSubmit}
			>
				<input
					className="w-2/6 min-w-28 border border-black rounded-md shadow-sm shadow-slate-400 p-1 my-2 outline-none"
					type="text"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button
					type="submit"
					className="w-1/12 min-w-16 border border-black rounded-md shadow-sm shadow-slate-400 p-1 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
				>
					Search
				</button>
			</form>
		</div>
	)
}

export default Search
