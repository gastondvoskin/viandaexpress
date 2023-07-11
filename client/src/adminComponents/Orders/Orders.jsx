import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrdersAction } from "../../redux/adminSlice";
import ListOrders from "../ListOrders/ListOrders.jsx";

const Orders = () => {
    const dispatch = useDispatch();

    const allOrders = useSelector((state)=>state.adminReducer.allOrders);
    
    useEffect(()=>{
        dispatch(getAllOrdersAction())
    },[dispatch])
    
    console.log("Local orders",allOrders);
    return(
        <div>
            <h1>Nuestras Ordenes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Cliente</th>
                        <th>Precio Total</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map(o => (
                        <ListOrders
                            key = {o?.id}
                            id = {o?.id}
                            User_name = {o?.User.name}
                            total_price = {o?.total_price}
                            createdAt = {o?.createdAt}
                            status = {o?.status}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Orders;