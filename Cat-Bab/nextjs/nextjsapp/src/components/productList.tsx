"use client";
import React from "react";
import ProductCards from "./ProductCards";
import { ProductItem } from "@/API/api";
import { useRouter } from "next/navigation";

interface ProductListProps {
    products: ProductItem[];
}


const productList:React.FC<ProductListProps> = ({products}) => {
    const router = useRouter();
  return (
    <main className="grid grid-cols-3 gap-5 bg-slate-400">
      {products.map((item,index) => (
        <ProductCards
              key={index} 
              name={item.name}
              description={item.description}
              price={item.price}
              onDetailClick={() => router.push(`/details/${item?.id}`)} 
              image={""}        
        />
      ))}
    
    </main>
  )
}

export default productList

