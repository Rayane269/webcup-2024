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

const Products = ({data}: {data: Array<Product>}) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={data} />
      </div>
    </div>
  );
};

export default Products;
