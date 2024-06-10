import { getProductsById,ProductItem } from "@/API/api";
import { GetStaticPaths, GetStaticProps } from "next";
import DetailsProduct from "@/components/DetailProducts";
import React from "react";

interface DetailProps{
  product:ProductItem|null
}

const Details: React.FC<DetailProps> = ({product}) => {
  return <DetailsProduct product={product}/>
}

export default Details