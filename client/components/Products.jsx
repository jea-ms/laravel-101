'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ data }) => {
    return (
        <div>
            {
                data.length > 0 ? (
                    data.map((prod) => (
                        <ProductCard product={prod} />
                    ))
                ) : (
                    <span>No products found</span>
                )
            }
        </div>
    )
}

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`http://127.0.0.1:8000/api/products/`)
            const data = await res.json()

            setProducts(data)
        }

        fetchProducts()
    })

    return (
        <div>
            <ProductList data={products} />
        </div>

    )
}

export default Products