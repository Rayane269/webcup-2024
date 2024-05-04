import React from "react"
import useRoute from "@/Hooks/useRoute"
import { Link } from "@inertiajs/react"
import { Title } from "./Articles"

type CategoriesProps = {
  data: Array<Categorie>
}

type CardCategoriesProps = {
  categories: Array<Categorie>
}

type Categorie = {
  id?: number,
  label: string,
  path: string
} 

export const Categories = function({data}: CategoriesProps) {
  return (
    <div className="my-6">
      <Title text="Meilleur catégories" />
      <CardCategories categories={data} />
    </div>
  )
}

export const CardCategories = function({categories}: CardCategoriesProps) {
  return (
    <div className="flex gap-x-5 items-center">
      {categories.map((categorie) => 
        <Categorie 
          key={categorie.id} 
          path={categorie.path} 
          label={categorie.label} />
        )}
    </div>
  )
}

export const Categorie = function({label, path}: Categorie) {
  const route = useRoute()
  
  return (
    <div className="">
      <Link href={route(path)}>
        <div className="w-[80px] h-[80px] bg-red-400 rounded-full mb-2">

        </div>
        <span>{label}</span>
      </Link>
    </div>
  )
}
