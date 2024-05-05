import React from "react";

type Props = {
  className?: string
}

export const AppLogo = function({className}: Props) {
  return (
    <div className={className} >
      <img src="storage/logo.png" alt="" />
    </div>
  )
}