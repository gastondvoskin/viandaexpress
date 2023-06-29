import React from 'react';
import styles from './listProductsItem.module.css'; // Importa el archivo CSS
import { Link } from 'react-router-dom';

const ListProductsItem = ({ name, final_price, status,id }) => {
    return (
        <div className={styles.listProductsItem}> {/* Aplica la clase CSS utilizando la variable styles */}
            <div className={styles.left}>
                <p>{name}</p>
                <p> $ {final_price} </p>
                <select value={status ? 'Disponible' : 'Suspendido'}>
                    <option value="Disponible">Disponible</option>
                    <option value="Suspendido">Suspendido</option>
                </select>
            </div>
            <div>
                <Link to={`/admin/edit/${id}`}>
                    <button>Editar</button>
                </Link>
                <button>ELIMINAR</button>
            </div>
            
        </div>
    );
};

export default ListProductsItem;
