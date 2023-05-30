'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Form from "@components/Form"
import TitlePage from "@components/TitlePage"
import Cookies from 'js-cookie'

const NewProduct = () => {
  const API_PRODUCT_URL = process.env.API_PRODUCT_URL
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [product, setProduct] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
  })

  const cookie = Cookies.get('currentUser')
  const token = Cookies.get('apiToken')

  const [currentUser, setCurrentUser] = useState()
  const [currentToken, setCurrentToken] = useState()

  useEffect(() => {
    setCurrentUser(cookie ? JSON.parse(cookie) : null)
    setCurrentToken(token ? JSON.parse(token) : '')

  }, [])

  const onCancel = async () => {
    router.push('/')
  }

  const createProduct = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch(API_PRODUCT_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + currentToken,
          'Accept': 'application/json',
        },
        body: JSON.stringify(product)
      })

      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="grr max-w-7xl pt-20 mx-auto text-center">
      <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
        <TitlePage
          hasUser={(currentUser != null) ? true : false}
          title='Add Product'
          showBtnAdd={false}
          onAdd={() => { }}
          onCancel={onCancel} />
        <div className='object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md'>
          <Form
            type='Add'
            product={product}
            setProduct={setProduct}
            submitting={submitting}
            onSubmit={createProduct}
          />
        </div>
      </div>
    </div>
  )
}

export default NewProduct