'use client'

import LoginForm from '@components/LoginForm'
import TitlePage from '@components/TitlePage'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()

  const loginUser = async () => {
    router.push('/')
  }

  const onCancel = async () => {
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
            onSubmit={loginUser}
          />
        </div>
        <span>New to Company?
          <Link href="/"> Create new account.</Link>
        </span>
      </div>
    </div>
  )
}

export default Login