"use client"
import CountryList from "@/components/CountryList"
import Search from "@/components/Search"
import { useState } from "react"

export default function Home() {
	const [text, setText] = useState("")

	return (
		<main className="flex flex-col items-center justify-between p-4">
			<Search setText={setText} />
			<CountryList search={text} />
		</main>
	)
}
