'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

// const productsArray = []
const productsArray = [
    {
        "id": 1,
        "name": "Product One",
        "slug": "product-one",
        "description": "This is product one",
        "price": "9.99",
        "created_at": "2023-05-12T02:20:19.000000Z",
        "updated_at": "2023-05-12T02:20:19.000000Z"
    },
    {
        "id": 2,
        "name": "Product Two",
        "slug": "product-two",
        "description": "This is product two",
        "price": "2.99",
        "created_at": "2023-05-12T02:29:39.000000Z",
        "updated_at": "2023-05-12T02:37:11.000000Z"
    },
    {
        "id": 4,
        "name": "Iphone 12",
        "slug": "iphone-12",
        "description": "This is Iphone 12",
        "price": "51.99",
        "created_at": "2023-05-12T02:45:17.000000Z",
        "updated_at": "2023-05-12T02:45:17.000000Z"
    }
]

const ProductList = ({ data }) => {
    return (
        <div>
            {
                data.length > 0 ? (
                    data.map((prod) => (
                        <ProductCard product={prod}/>
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
            // TODO: add get all products
            // const response = await fetch('/api/prompt')
            // const data = await response.json()

            setProducts(productsArray)
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