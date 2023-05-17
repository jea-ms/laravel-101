'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Form from "@components/Form"
import TitlePage from "@components/TitlePage"

const NewProduct = () => {
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)
    const [product, setProduct] = useState({
        name: '',
        slug: '',
        description: '',
        price: '',
    })

    const createProduct = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })

            if (response.ok) {
                router.push('/')
            }

            router.push('/')
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
          title='Add Product'
          showBtnAdd={false} />
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