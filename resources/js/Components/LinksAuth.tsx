import { Link } from "@inertiajs/react"
import React from "react"
import route from "ziggy-js"
import { Order } from "./Order"

type Props = {
  className?: string
}

export const LinksAuth = function({className}: Props) {
  return (
    <div className="flex justify-between items-center gap-x-2">
      <Link 
        href={route('login')}
      >
        Se connecter
      </Link>
      <Order />
    </div>
  )
}