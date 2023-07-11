import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderDetailAction } from '../../redux/adminSlice';
const OrderDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const orderDetail = useSelector((state)=>state.adminReducer.orderDetail);

    useEffect(()=>{
        console.log("estoy en useefect");
        dispatch(getOrderDetailAction(id))
    },[dispatch])

    console.log("Id Orden", id);
    console.log("Order Detail", orderDetail);

    return(
        <div>
            <h1>{orderDetail?.User.name}</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Vianda</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {orderDetail?.Items.map((i)=>(
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.Food.name}</td>
                        <td>{i.quantity}</td>
                        <td>{i.final_price}</td>
                        <td>{i.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default OrderDetail;