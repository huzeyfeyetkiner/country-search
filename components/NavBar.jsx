import Link from "next/link"
import React from "react"

function NavBar() {
	return (
		<div className="w-full bg-[#333333] bg-opacity-5 p-5 border border-gray-50 border-l-0 border-t-0 border-r-0">
			<Link href={"/"}>
				<h1 className="text-gray-500 text-2xl font-medium">
					Country Search
				</h1>
			</Link>
		</div>
	)
}

export default NavBar
