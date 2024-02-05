import React, { useState } from "react"

function CountryComp({ country, onClick, selected, colorIndex }) {
	return (
		<div
			onClick={onClick}
			key={country.code}
			className={`flex items-center justify-between w-2/3 min-w-72  p-4 border border-gray-400 border-opacity-20 cursor-pointer rounded-md shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out ${
				selected && `${selectedColors[colorIndex]} text-white`
			}`}
		>
			<div className="flex items-center">
				<h2 className="ml-4 text-xl font-semibold">{country.name}</h2>
			</div>
			<p className="text-xl">{country.code}</p>
		</div>
	)
}

export default CountryComp

const selectedColors = [
	"bg-gray-500",
	"bg-red-500",
	"bg-yellow-500",
	"bg-green-500",
	"bg-blue-500",
	"bg-indigo-500",
]
