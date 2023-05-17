'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Products from "@components/Products"
import TitlePage from "@components/TitlePage"

const Home = () => {
    const router = useRouter()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch(`http://localhost:8000/api/products/`)
            const data = await res.json()

            setProducts(data)
        }

        getProducts()
    }, [])

    const editProduct = async (id) => {
        router.push(`/products/update?id=${id}`)
        console.log('edit', id)
    }

    const onAdd = async (id) => {
        router.push(`/products/new`)
    }

    const deleteProduct = async (id) => {
        const hasConfirmed = confirm("Are you sure you want to delete?")
        if (hasConfirmed) {
            try {
                await fetch(`http://localhost:8000/api/products/${id}`, {
                    method: 'DELETE',
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
        <div className="grr max-w-7xl pt-20 mx-auto text-center">
            <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
                <TitlePage
                    title='Products'
                    showBtnAdd={true}
                    onAdd={onAdd}
                    onCancel={() => { }} />
                <div className='object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md'>
                    <Products
                        products={products}
                        onEdit={editProduct}
                        onDelete={deleteProduct} />
                </div>
            </div>
        </div>
    )
}

export default Home