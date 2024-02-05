import CountryList from "@/components/CountryList"
import Search from "@/components/Search"
import Image from "next/image"

// write a GraphQL query that asks for names and codes for all countries

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-12">
			<Search />
			<CountryList />
		</main>
	)
}
