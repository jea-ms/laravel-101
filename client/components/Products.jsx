import ProductCard from './ProductCard'

const ProductList = ({ data, onEdit, onDelete }) => {
    return (
        <div>
            {
                data.length > 0 ? (
                    data.map((prod) => (
                        <ProductCard
                            key={prod.id}
                            product={prod}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))
                ) : (
                    <span>No products found</span>
                )
            }
        </div>
    )
}

const Products = ({ products, onEdit, onDelete }) => {
    return (
        <div>
            <ProductList
                data={products}
                onEdit={onEdit}
                onDelete={onDelete} />
        </div>
    )
}

export default Products