import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

type Product = {
  id: number,
  img: string,
  title: string,
  price: string,
  aosDelay: string,
}

const Products = ({data, title, subtitle}: {data: Array<Product>, title?: string, subtitle?: string}) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title={title ?? "Nos Produits"} subtitle={subtitle ?? "Découvrez Nos Produits"} />
        {/* Body section */}
        <ProductCard data={data} />
      </div>
    </div>
  );
};

export default Products;
