import React from "react"

function CountryComp({ country, onClick, selected }) {
	return (
		<div
			onClick={onClick}
			key={country.code}
			className={`flex items-center justify-between w-full max-w-xl p-4 my-4 bg-white border border-gray-400 border-opacity-20 cursor-pointer rounded-md shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out ${
				selected ? "bg-slate-200" : ""
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

const selectedColors = {
	gray: "bg-gray-500",
	red: "bg-red-500",
	yellow: "bg-yellow-500",
	green: "bg-green-500",
	blue: "bg-blue-500",
	indigo: "bg-indigo-500",
}