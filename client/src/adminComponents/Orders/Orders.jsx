import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrdersAction } from "../../redux/ordersSlice";

const Orders = () => {
    const dispatch = useDispatch();
    const allOrders = useSelector((state)=>state.ordersReducer.allOrders);
    useEffect(()=>{
        dispatch(getAllOrdersAction())
    },[dispatch])
    
    console.log("vengo desde orders",allOrders);
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <select>
                                <option>Entregado</option>
                                <option> Pendiente</option>
                            </select>
                        </td>
                        <td>
                            <button>Ver Detalle</button>
                        </td>
                    </tr>  
                </tbody>
            </table>
        </div>
    )
}

export default Orders;