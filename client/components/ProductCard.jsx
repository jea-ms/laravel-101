import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
    return (
        <div className='product_card'>
            <h3>
                {product.name}
            </h3>
            <p>{product.description}</p>
            <div>
                <FontAwesomeIcon
                    icon={faEdit}
                    style={{ fontSize: 15, color: "green" }}
                />
            </div>
            <div>
                <FontAwesomeIcon
                    icon={faTrash}
                    style={{ fontSize: 15, color: "red" }}
                />
            </div>


        </div>
    )
}

export default ProductCard