'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Products from "@components/Products"
import TitlePage from "@components/TitlePage"
import Cookies from 'js-cookie'

const Home = () => {
    const API_PRODUCT_URL = process.env.API_PRODUCT_URL

    const router = useRouter()
    const [products, setProducts] = useState([])

    const [currentUser, setCurrentUser] = useState()
    const [currentToken, setCurrentToken] = useState()

    useEffect(() => {
        setCurrentUser(Cookies.get('currentUser') ? JSON.parse(Cookies.get('currentUser')) : null)
        setCurrentToken(Cookies.get('apiToken') ? JSON.parse(Cookies.get('apiToken')) : '')

        const getProducts = async () => {
            console.log(API_PRODUCT_URL);
            const res = await fetch('' + API_PRODUCT_URL)
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
                await fetch(API_PRODUCT_URL + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + currentToken,
                        'Accept': 'application/json',
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