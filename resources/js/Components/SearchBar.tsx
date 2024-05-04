import React from "react"

type Props = {
  className?: string
}

export const SearchBar = function({className}: Props) {
  return (
    <div className={className}>
      <input className="w-full h-[38px] rounded-full " placeholder="Qu'est ce qui vous ferez plaisir ?" type="search" name="" id="" />
    </div>
  )
}