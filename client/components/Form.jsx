const Form = ({ type, product, setProduct, submitting, onSubmit }) => {
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div>
            <label className='form_label'><span>Name</span></label>
                <input
                    type='text'
                    value={product.name}
                    onChange={(e) => setProduct({
                        ...product,
                        name: e.target.value
                    })}
                    placeholder='name'
                    required
                    className='form_input'
                />
            </div>
            <div>
            <label className='form_label'><span>Slug</span></label>
                <input
                    type='text'
                    value={product.slug}
                    onChange={(e) => setProduct({
                        ...product,
                        slug: e.target.value
                    })}
                    placeholder='slug'
                    required
                    className='form_input'
                />
            </div>
            <div>
            <label className='form_label'><span>Description</span></label>
                <textarea
                    value={product.description}
                    onChange={(e) => setProduct({
                        ...product,
                        description: e.target.value
                    })}
                    placeholder='Describe your product'
                    required
                    className='form_input'
                />
            </div>
            <div>
            <label className='form_label'><span>Price</span></label>
                <input
                    type='number'
                    value={product.price}
                    onChange={(e) => setProduct({
                        ...product,
                        price: e.target.value
                    })}
                    placeholder='0.00'
                    required
                    className='form_input'
                />
            </div>

            <input type='submit' value={type} className='black_btn' />

        </form>
    )
}

export default Form