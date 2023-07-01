import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailAction } from "../../redux/userSlice";
import { useParams } from "react-router-dom";


const MyProfile = () => {

    const userDetail = useSelector((state) => state.usersReducer.userDetail)
    const { name } = useParams()
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getUserDetailAction(email))
    }, [name, dispatch])
    return (

        <div>
            <h1>hola!!</h1>
            
        </div>
    )
};
  
export default MyProfile;