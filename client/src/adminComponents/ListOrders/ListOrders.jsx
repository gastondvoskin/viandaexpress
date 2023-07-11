import React from "react";
import { Link } from "react-router-dom";


const ListOrders = ({id, User_name, total_price, createdAt, status}) => {
    console.log('id detalle', id);
    return(
        <tr>
            <td>{id}</td>
            <td>{User_name}</td>
            <td>{total_price}</td>
            <td>{createdAt}</td>
            <td>{status}</td>
            <td>
                <Link to={`/order/detail/${id}`}>
                    <button>Ver Detalle</button>
                </Link>
            </td>
        </tr>  
    )
}

export default ListOrders;