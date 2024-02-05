import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Country List",
	description: "https://github.com/huzeyfeyetkiner/country-search",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`flex-1 bg-white ${inter.className}`}>
				<NavBar />
				{children}
			</body>
		</html>
	)
}
