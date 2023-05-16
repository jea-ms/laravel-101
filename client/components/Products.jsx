'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ data, onEdit, onDelete }) => {
    return (
        <div>
            {
                data.length > 0 ? (
                    data.map((prod) => (
                        <ProductCard
                            key={prod.id}
                            product={prod}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
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
        const getProducts = async () => {
            const res = await fetch(`http://127.0.0.1:8000/api/products/`)
            const data = await res.json()

            setProducts(data)
        }

        getProducts()
    }, [])

    const editProduct = async (id) => {

        console.log('edit', id)
    }

    const deleteProduct = async (id) => {
        const token = '5|h2H5IwdCNcETaEan88AlmIpColpP8QRJioa6kXRO'
        const hasConfirmed = confirm("Are you sure you want to delete?")
        if (hasConfirmed) {
            try {
                await fetch(`http://localhost:8000/api/products/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                      },
                }).then(() => {
                    setProducts(products.filter((prod) => prod.id !== id))
                }).catch(err => {
                    console.log(err)
                  })
                
            } catch (error) {
                console.log(error)
            }
        }
        console.log('delete', id)
    }

    return (
        <div>
            <ProductList
                data={products}
                onEdit={editProduct}
                onDelete={deleteProduct} />
        </div>

    )
}

export default Products