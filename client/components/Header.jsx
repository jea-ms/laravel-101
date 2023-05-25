'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()

    const loginBtn = () => {
        router.push(`/users/login`)
    }
    return (
        <div className="fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
            <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between p-4">
                    <Link
                        href="/"
                        className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
                    >
                        <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4x1 lg:text-3xl">
                            Company Inc.
                        </h1>
                    </Link>
                    <button onClick={loginBtn} className='md:hidden black_btn'>
                        Sign in
                    </button>

                </div>
                <div className="md:flex hidden flex flex-grow justify-end flex-wrap items-center">
                    <button onClick={loginBtn} className='black_btn'>
                        Sign in </button>
                </div>

            </div>
        </div>
    )
}

export default Header