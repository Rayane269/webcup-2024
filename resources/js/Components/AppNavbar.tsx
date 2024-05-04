import React from "react"
import { AppLogo } from "./AppLogo"
import { SearchBar } from "./SearchBar"
import { LinksAuth } from "./LinksAuth"

export const AppNavbar = function() {
  return (
    <nav className="fixed w-full h-16 flex justify-between items-center bg-orange-200 px-2">
      <AppLogo className="w-10" />
      <SearchBar className="w-3/5" />
      <LinksAuth className="w-1/5" />
    </nav>
  )
}