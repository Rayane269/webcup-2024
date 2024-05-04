import React, { PropsWithChildren } from "react"

type TitleProps = {
  text: string
}

type ProductsProps = {
  data: Array<Product>
}

type CardProductProps = {
  data: Product
}

type Product = {
  id: number, 
  name: string
}

export const Articles = function({children}: PropsWithChildren) {
  return (
    <div>
      {children}
    </div>
  )
}

export const Products = function({data}: ProductsProps) {
  return (
    <div>
      {data.map(product => <CardProduct key={product.id} data={product} />)}
    </div>
  )
}

export const CardProduct = function({data}: CardProductProps) {
  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  )
}

export const Title = function({text}: TitleProps) {
  return (
    <h1 className="text-3xl mb-3">{text}</h1>
  )
}
