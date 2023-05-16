import List from '@components/List'
import Products from '@components/Products'

const Home = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
                    <List />
                    <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
                        Products</h1>
                        <button className='black_btn'>
                        Add
                    </button>
                   <Products />
                   
                </div>
            </div>
        </section>
    )
}

export default Home