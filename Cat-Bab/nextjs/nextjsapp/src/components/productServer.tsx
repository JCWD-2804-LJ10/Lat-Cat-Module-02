import React from 'react'
import { ProductItem } from '@/API/api'
import { getProducts } from '@/API/api'
import ProductList from './productList'


const productServer = async () => {
    const product: ProductItem[] = await getProducts();

    return (
    <div className="bg-white">
        <ProductList products={product}/>
    </div>
  )
}

export default productServer