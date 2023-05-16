import React from 'react'
import TitleList from './TitleList'
import Products from './Products'

const List = () => {
  return (
    <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <TitleList />
        <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
          Minify your CSS with Tailwind's built in PostCSS support.
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
         <div className='object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md'>
            <Products />
         </div>
        </div>
      </div>
  )
}

export default List