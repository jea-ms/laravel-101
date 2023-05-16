import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
    return (
        <div className='product_card'>
            <h3>
                <span className="prod_name">{product.name}</span>
                <span className="px-3">{product.price}</span>
                <div className="prod_options">
                    <span className="px-3"> <FontAwesomeIcon
                        icon={faEdit}
                        style={{ fontSize: 15, color: "green" }}
                    /></span>
                    <span > <FontAwesomeIcon
                        icon={faTrash}
                        style={{ fontSize: 15, color: "red" }}
                    /></span>
                </div>
            </h3>
            <h3>{product.description}</h3>
        </div>
    )
}

export default ProductCard