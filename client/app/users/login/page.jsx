'use client'

import LoginForm from '@components/LoginForm'
import TitlePage from '@components/TitlePage'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'


const Login = ({ data }) => {
  const API_URL = process.env.API_URL
  const router = useRouter()
  const cookie = Cookies.get('currentUser')
  const token = Cookies.get('apiToken')

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const [currentUser, setCurrentUser] = useState()
  const [currentToken, setCurrentToken] = useState()

  useEffect(() => {
    setCurrentUser(cookie ? JSON.parse(cookie) : null)
    setCurrentToken(token ? JSON.parse(token) : '')

    if(cookie) router.push("/")

  }, [])

  const loginUser = async (e) => {
    e.preventDefault()
    // setSubmitting(true)

    const url = API_URL + '/login'
    console.log(url)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      const data = await response.json()
      console.log(data)
      if (response.ok) {
        Cookies.set('currentUser', JSON.stringify(data.user), { expires: 1440 })
        Cookies.set('apiToken', JSON.stringify(data.token), { expires: 1440 })
        router.push('/')
      } else {
        Cookies.set('currentUser', '', { expires: 0 })
        Cookies.set('apiToken', '', { expires: 0 })
      }

      console.log(response)

    } catch (error) {
      console.log(error)
    } finally {
      // setSubmitting(false)
      console.log("finally")

    }
  }

  const onCancel = async () => {
    Cookies.set('name', "jea", { expires: 1440 })
    router.push('/')
  }

  return (

    <div className="grr max-w-7xl pt-20 mx-auto text-center">
      <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
        <TitlePage
          title='Sign In'
          showBtnAdd={false}
          onAdd={() => { }}
          onCancel={onCancel} />
        <div className='object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md'>
          <LoginForm
            type='Sign In'
            user={user}
            setUser={setUser}
            onSubmit={loginUser}
          />
        </div>
        <span>New to Company?
          <Link href="/"
            style={{
              textDecoration: 'underline',
              color: 'blue',
            }}
          >Create new account.</Link>
        </span>
      </div>
    </div>
  )
}

export default Login