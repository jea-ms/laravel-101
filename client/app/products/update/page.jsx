'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Form from "@components/Form"
import TitlePage from "@components/TitlePage"


const UpdateProduct = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const prodId = searchParams.get('id')

  const [submitting, setSubmitting] = useState(false)
  const [product, setProduct] = useState({
    name: '',
    slug: '',
    description: '',
    price: '',
  })

  useEffect(() => {
    const getProdDetails = async () => {
      const res = await fetch(`http://localhost:8000/api/products/${prodId}`)
      const data = await res.json()

      setProduct(data)
    }

    if (prodId) getProdDetails()
  },[prodId])

  const editProduct = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    if(!prodId) return alert('Product not found')

    try {
      const response = await fetch(`http://localhost:8000/api/products/${prodId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
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
          title='Edit Product'
          showBtnAdd={false} />
        <div className='object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md'>
          <Form
            type='Edit'
            product={product}
            setProduct={setProduct}
            submitting={submitting}
            onSubmit={editProduct}
          />
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct