import { useDispatch, useSelector } from "react-redux";
import { getUserOrderAction } from "../../redux/userSlice";
import { useEffect } from "react";

const UserOrder = () =>{
    const dispatch = useDispatch();
    const orderUser = useSelector((state) => state.usersReducer.userOrder);
    console.log("prueva", orderUser)

    useEffect (() =>{
        dispatch (getUserOrderAction ());
    }, [dispatch])
    return (
        <div>
          
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Cliente</th>
                        <th>Precio Total</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {orderUser.map((o) => ( 
                    <tr key={o.id}>
                        <td>{o.id}</td>
                        <td>{o.User.name}</td>
                        <td>{o.total_price}</td>
                        <td>{o.createdAt}</td>
                        <td>{o.status}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
           

        </div>
    )
}
export default UserOrder;