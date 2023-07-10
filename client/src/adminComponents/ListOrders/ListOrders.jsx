import React from "react";

const ListOrders = ({id, UserId, total_price, createdAt, status}) => {
    return(
        <tr>
            <td>{id}</td>
            <td>{UserId}</td>
            <td>{total_price}</td>
            <td>{createdAt}</td>
            <td>{status}</td>
            <td>
                <button>Ver Detalle</button>
            </td>
        </tr>  
    )
}

export default ListOrders;