"use client"
import React, { useState } from "react"

import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client"

import CountryComp from "@/components/CountryComp"

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "https://countries.trevorblades.com",
})

function CountryList({ search = "" }) {
	const [selected, setSelected] = useState("")

	const { data, loading, error } = useQuery(
		gql`
			{
				countries(filter: { name: { regex: "^${search}" } }) {
					code
					name
					currency
				}
			}
		`,
		{ client }
	)

	if (loading || error) {
		return (
			<div className="flex-1 mt-12">
				<p>{error ? error.message : "Loading..."}</p>
			</div>
		)
	}

	return (
		<div className="w-full flex flex-row flex-wrap justify-center gap-4">
			{data.countries.map((country) => (
				<CountryComp
					key={country.code}
					country={country}
					onClick={() => setSelected(country.code)}
					selected={selected === country.code}
				/>
			))}
		</div>
	)
}

export default CountryList
