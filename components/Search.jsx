"use client"
import React, { useState } from "react"

function Search() {
	const [searchText, setSearchText] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<div className="w-full flex-col justify-center items-center">
			<form
				className="w-full flex items-center justify-center gap-x-2"
				onSubmit={handleSubmit}
			>
				<input
					className="w-2/6 border border-black rounded-md shadow-sm shadow-slate-400 p-1 my-2 outline-none"
					type="text"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button
					type="submit"
					className="w-1/12 border border-black rounded-md shadow-sm shadow-slate-400 p-1 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
				>
					Ara
				</button>
			</form>
		</div>
	)
}

export default Search
