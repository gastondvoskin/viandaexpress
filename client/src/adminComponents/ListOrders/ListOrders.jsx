import React, { useEffect, useState, useRef} from "react";
import { useDispatch } from "react-redux";
import { updateOrderStatusAction } from "../../redux/adminSlice";
import { Link } from "react-router-dom";
import styles from "./ListOrders.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ListOrders = ({id, User_name, total_price, createdAt, status, order_status}) => {
    const [selectedStatus, setSelectedStatus] = useState('');
    const previousStatusRef = useRef('');

    useEffect(()=>{
      previousStatusRef.current = selectedStatus;
    },[])

    const dispatch = useDispatch();
    console.log("Estado Selecionado", selectedStatus);

    const handleChangeSelect = async (e) => {
      const newOrderStatus = e.target.value;
      setSelectedStatus(newOrderStatus);
  
      if (newOrderStatus === 'Procesando' || newOrderStatus === 'Enviado' || newOrderStatus === 'Entregado') {
        const result = await Swal.fire({
          title: 'Confirmación',
          text: `¿Estás seguro de que deseas establecer el estado como ${newOrderStatus}?`,
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Sí',
          cancelButtonText: 'Cancelar',
        });
  
        if (result.isConfirmed) {
          dispatch(updateOrderStatusAction(id, newOrderStatus));
          Swal.fire('Estado actualizado', `El estado se ha establecido como ${newOrderStatus}.`, 'success');
        } else {
          // Si se cancela, restaura el valor anterior
          setSelectedStatus(previousStatusRef.current);
        }
      } else {
        dispatch(updateOrderStatusAction(id, newOrderStatus));
      }
    };
      /*
    const handleChangeSelect = async (e) => {
        const newOrderStatus = e.target.value;
        setSelectedStatus(newOrderStatus);
        dispatch(updateOrderStatusAction(id, newOrderStatus));
      };
      */
    return(
        <tr className={styles.tds}>
            <td className={styles.tbodys}>{id}</td>
            <td className={styles.tbodys}>{User_name}</td>
            <td className={styles.tbodys}>{total_price}</td>
            <td className={styles.tbodys}>{createdAt}</td>
            <td className={styles.tbodys}>{status}</td>
            <td className={styles.tbodys}>
                <select value={selectedStatus} onChange={handleChangeSelect}>
                    <option value="">Seleccionar Estado</option>
                    <option value="Procesando">Procesando</option>
                    <option value="Enviado">Enviado</option>
                    <option value="Entregado">Entregado</option>
                </select>
            </td>
            <td className={styles.tbodys}>
                <Link to={`/order/detail/${id}`}>
                    <button><FontAwesomeIcon icon={faListOl} /></button>
                </Link>
            </td>
        </tr>  
    )
}

export default ListOrders;