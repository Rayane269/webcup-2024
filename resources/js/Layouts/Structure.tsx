import { Footer, Navbar, Popup } from "@/Components/App"
import { AppNavbar } from "@/Components/AppNavbar"
import React, { PropsWithChildren } from "react"

type Props = {
  handleOrderPopup?: () => void,
  orderPopup?: boolean,
  canLogin: boolean, 
}

export const Structure = function({children, orderPopup, handleOrderPopup, canLogin}: PropsWithChildren<Props>) {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} canLogin={canLogin} />
      {children}
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  )
}