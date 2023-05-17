'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";

const ProductCard = ({ product, onEdit, onDelete }) => {
    return (
        <div className='product_card'>
            <h3>
                <span className="prod_name">{product.name}</span>
                <span className="px-3">{product.price}</span>
                <div className="prod_options">
                    <span 
                    data-tooltip-id="edit-tooltip"
                    data-tooltip-content="Edit"
                    onClick={() => onEdit(product.id)}
                    className="md:px-3"> <FontAwesomeIcon
                        icon={faEdit}
                        style={{ fontSize: 15, color: "green" }}
                    /></span>
                    <Tooltip id="edit-tooltip" />
                    <span 
                    data-tooltip-id="del-tooltip"
                    data-tooltip-content="Delete"
                    onClick={() => onDelete(product.id)}> <FontAwesomeIcon
                        icon={faTrash}
                        style={{ fontSize: 15, color: "red" }}
                    /></span>
                    <Tooltip id="del-tooltip" />
                </div>
            </h3>
            <h3>{product.description}</h3>
        </div>
    )
}

export default ProductCard