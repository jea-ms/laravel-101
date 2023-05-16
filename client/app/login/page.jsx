'use client'

import Products from "@components/Products"
import TitleList from "@components/TitleList"
import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

  return (
    <div className="grr max-w-7xl pt-20 mx-auto text-center">
      <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
        <TitleList />
        <div className='object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md'>
          <Products />
        </div>
      </div>
    </div>
  )
}

export default Login