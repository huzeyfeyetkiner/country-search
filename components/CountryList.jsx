"use client"
import React, { useEffect, useState } from "react"

import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client"

import CountryComp from "@/components/CountryComp"
import { BeatLoader } from "react-spinners"

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "https://countries.trevorblades.com",
})

function CountryList({ search = "" }) {
	const [selected, setSelected] = useState("")
	const [colorIndex, setColorIndex] = useState(0)

	const { data, loading, error } = useQuery(
		gql`
			{
				countries(filter: { name: { regex: "^${
					search.slice(0, 1).toUpperCase() +
					search.slice(1, search.length)
				}" } }) {
					code
					name
					currency
				}
			}
		`,
		{ client }
	)

	useEffect(() => {
		if (!loading && data?.countries.length > 10)
			setSelected(data?.countries[9]?.code || "")
		else {
			setSelected(data?.countries[data.countries.length - 1]?.code || "")
		}
	}, [loading, data])

	// if (loading || error) {
	// 	return (
	// 		<div className="flex-1 mt-12">
	// 			<p>{error ? error.message : "Loading..."}</p>
	// 		</div>
	// 	)
	// }

	if (loading || error) {
		return (
			<div className="w-full flex justify-center items-center p-12 ">
				{error ? <p>error.message</p> : <BeatLoader color="#000" />}
			</div>
		)
	}

	return (
		<div className="w-full flex-1 flex flex-col flex-wrap items-center gap-4 mt-2">
			{data.countries.map((country, index) => (
				<CountryComp
					key={country.code}
					country={country}
					onClick={() => {
						if (selected === country.code) setSelected("")
						else setSelected(country.code)

						if (colorIndex < 5) setColorIndex(colorIndex + 1)
						else setColorIndex(0)
					}}
					colorIndex={colorIndex}
					selected={selected === country.code}
				/>
			))}
		</div>
	)
}

export default CountryList
