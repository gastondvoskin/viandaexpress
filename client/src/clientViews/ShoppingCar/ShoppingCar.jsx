import styles from './ShoppingCar.module.css';
import {Link} from 'react-router-dom';
import ItemContainer from '../../clientComponents/ShoppingCar/ItemContainer.jsx';

export default function ShoppingCar(){
    return(
        <div>
            <h1>Carrito de Compras</h1>
            <ItemContainer />
        </div>
    )
}