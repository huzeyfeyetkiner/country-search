"use client"

import Image from "next/image"
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client"
import { useState } from "react"

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "https://countries.trevorblades.com",
})

// write a GraphQL query that asks for names and codes for all countries

export default function Home() {
	const [searchText, setSearchText] = useState("")
	const { data, loading, error } = useQuery(
		gql`
  {
    countries(filter: { name: { regex: "^${searchText}" } }) {
      code
      name
      currency
    }
  }
`,
		{ client }
	)

	if (loading || error) {
		return <p>{error ? error.message : "Loading..."}</p>
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<input
				className="border border-black"
				type="text"
				value={searchText}
				onChange={setSearchText}
			/>

			{data.countries.map((country) => (
				<div
					key={country.code}
					className="flex items-center justify-between w-full max-w-2xl p-4 my-4 bg-white rounded-md shadow-md"
				>
					<div className="flex items-center">
						<h2 className="ml-4 text-xl font-semibold">
							{country.name}
						</h2>
					</div>
					<p className="text-xl">{country.currency}</p>
				</div>
			))}
		</main>
	)
}
