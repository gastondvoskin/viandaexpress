import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserOrderDetailAction } from '../../redux/userSlice';
import styles from './UserOrderDetail.module.css';

const UserOrderDetail = () => {
const dispatch = useDispatch();
const { id } = useParams();
const userOrderDetail = useSelector((state)=>state.usersReducer.userOrderDetail);
    useEffect(()=>{
        dispatch(getUserOrderDetailAction(id))
    },[dispatch])
    console.log("Id Orden", id);
    console.log("Order Detail", userOrderDetail);
    
    return(
        <div className={styles.orderdiv}>
            <h3>{userOrderDetail?.User.name}</h3>
        <table className={styles.destable}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Vianda </th>
                    <th>Cantidad </th>
                    <th>Precio</th>
                    <th>Total</th>
                    <th>Puntuación</th>
                    <th>Comentario</th>
                </tr>
            </thead>
            <tbody>
                {userOrderDetail?.Items.map((i)=>(
                    <tr key = {i.id}>
                        <td>{i.id}</td>
                        <td>{i.Food.name}</td>
                        <td style={{ textAlign: 'center' }}>{i.quantity}</td>
                        <td>{i.final_price}</td>
                        <td>{i.amount}</td>
                        <td>*****</td>
                        <td><input type="text" /><button>Enviar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
    
    
export default UserOrderDetail;