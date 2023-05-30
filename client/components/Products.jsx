import ProductCard from './ProductCard'

const ProductList = ({ data, onEdit, onDelete, hasUser }) => {
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
                            hasUser={hasUser}
                        />
                    ))
                ) : (
                    <span>No products found</span>
                )
            }
        </div>
    )
}

const Products = ({ products, onEdit, onDelete, hasUser }) => {
    return (
        <div>
            <ProductList
                hasUser={hasUser}
                data={products}
                onEdit={onEdit}
                onDelete={onDelete} />
        </div>
    )
}

export default Products