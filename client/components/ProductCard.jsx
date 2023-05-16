import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
    return (
        <div className='product_card'>
            <h3>
                <span>{product.name}</span>
                <div className="prod_options">
                    <span className="px-3"> <FontAwesomeIcon
                        icon={faEdit}
                        style={{ fontSize: 15, color: "green" }}
                    /></span>
                    <span > <FontAwesomeIcon
                        icon={faEdit}
                        style={{ fontSize: 15, color: "green" }}
                    /></span>
                </div>
            </h3>
            <p>{product.description}</p>
            <div>

            </div>
            <div>

            </div>


        </div>
    )
}

export default ProductCard