import React from 'react';
import styles from './ListProductsItem.module.css'; // Importa el archivo CSS
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

const ListProductsItem = ({ name, final_price, status,id,localFoods, setLocalFoods }) => {
    const handleDelete = async (e) => {
        e.preventDefault();
        var verificar= window.confirm(`Está a punto de eliminar la vianda`)
        if(verificar){
          try {
            await axios.delete(`/food/${id}`);
            alert(`Vianda: '${name}' eliminada`);
            const updatedFoods = localFoods.filter(e => e.id !== id);
            setLocalFoods(updatedFoods);
          } catch (error) {
            alert(error.message);
          }
        }
      };

      const handleStatus = (e) => {
        const { value } = e.target;
      
        const confirmationMessage = `¿Desea ${
          value === "true" ? "habilitar" : "deshabilitar"
        } la vianda?`;
      
        if (window.confirm(confirmationMessage)) {
          axios
            .put(`/food/${id}`, { status: value })
            .then(() => {
              const updatedFoods = localFoods.map((food) =>
                food.id === id ? { ...food, status: value } : food
              );
              setLocalFoods(updatedFoods);
            })
            .catch((error) => {
              alert(error.message);
            });
        }
      };



    return (
        <tr className={styles.tds}> {/* Aplica la clase CSS utilizando la variable styles */}
            <td className={styles.tbodys}>{name}</td>
            <td className={styles.tbodys}>${final_price}</td>
            <td className={styles.tbodys}>
            < select className={styles.viewAllButton} onChange={handleStatus} value={status}>
                <option value={true}>Habilitado</option>
                <option value={false}>Deshabilitado</option>
              </select>
            </td>
            <td className={styles.tbodys}>
              <Link to={`/admin/edit/${id}`}>
                    <button><FontAwesomeIcon icon={faEdit} /></button>
              </Link>
            </td>
            <td className={styles.tbodys}>
            <button onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan} /></button>
            </td>  
        </tr>
    );
};

export default ListProductsItem;
