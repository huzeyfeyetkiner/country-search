"use client"
import React from "react"
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client"
import BeatLoader from "react-spinners/BeatLoader"

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: "https://countries.trevorblades.com",
})

function Detail({ params: { detail } }) {
	const { data, loading, error } = useQuery(
		gql`
			{
				country(code: "${detail}") {
					name
					native
					capital
					emoji
					currency
					phone
					languages {
						code
						name
					}
					continent {
						name
					}
					states {
						code
						name
					}
				}
			}
		`,
		{ client }
	)

	if (loading || error) {
		return (
			<div className="w-full flex justify-center items-center p-12 ">
				{error ? <p>error.message</p> : <BeatLoader color="#808080" />}
			</div>
		)
	}

	return (
		<div className="w-screen flex flex-row p-12">
			<div className="w-1/2">
				<div className="w-full">
					<h1 className="text-4xl font-normal">
						Country Detail:
						{data.country.name}
					</h1>
				</div>
				<div>
					<p className="text-lg font-normal flex items-center">
						Flag:
						<span className="text-4xl ml-2">
							{data.country.emoji}
						</span>
					</p>

					<p className="text-lg font-normal">
						Native: {data.country.native}
					</p>
					<p className="text-lg font-normal">
						Capital: {data.country.capital}
					</p>
					<p className="text-lg font-normal">
						Currency: {data.country.currency}
					</p>
					<p className="text-lg font-normal">
						Phone Code: {data.country.continent.name}
					</p>
					<p className="text-lg font-normal">
						Languages:{" "}
						{data.country.languages
							.map((lang) => lang.name)
							.join(", ")}
					</p>
					<p className="text-lg font-normal">
						Phone Code: {data.country.phone}
					</p>
				</div>
			</div>

			<div className="w-1/2">
				<h2 className="text-lg font-normal">States:</h2>
				{data.country.states.length === 0 && (
					<div>
						<h1 className="">No state information</h1>
					</div>
				)}
				<ul className="flex flex-row flex-wrap">
					{data.country.states.map((state) => (
						<li
							key={state.code}
							className="text-sm font-normal mr-1"
						>
							{state.name + ","}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Detail
