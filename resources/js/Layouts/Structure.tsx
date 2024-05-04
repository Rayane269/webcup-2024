import { AppNavbar } from "@/Components/AppNavbar"
import React, { PropsWithChildren } from "react"

export const Structure = function({children}: PropsWithChildren) {
  return (
    <div className="grid grid-areas-layout grid-cols-layout grid-rows-layout relative">
      <AppNavbar />
      <div className="grid-in-main overflow-y-auto">
        <div className="">
          {children}
        </div>
        <div className='grid-in-footer bg-red-50'>
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  )
}