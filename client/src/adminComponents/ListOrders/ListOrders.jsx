import React from "react";
import { Link } from "react-router-dom";
import styles from "./ListOrders.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";


const ListOrders = ({id, User_name, total_price, createdAt, status}) => {
    console.log('id detalle', id);
    return(
        <tr className={styles.tds}>
            <td className={styles.tbodys}>{id}</td>
            <td className={styles.tbodys}>{User_name}</td>
            <td className={styles.tbodys}>{total_price}</td>
            <td className={styles.tbodys}>{createdAt}</td>
            <td className={styles.tbodys}>{status}</td>
            <td className={styles.tbodys}>
                <Link to={`/order/detail/${id}`}>
                    <button><FontAwesomeIcon icon={faListOl} /></button>
                </Link>
            </td>
        </tr>  
    )
}

export default ListOrders;