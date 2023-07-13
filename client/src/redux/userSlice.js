import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: "users",
    initialState:{
        allUsers: [],
        userDetail: {},
        userOrder: [],
    },
    reducers: {
        getAllUsersCase: (state, action) => {
            state.allUsers = action.payload
        },
        getUserByNameCase: (state, action) => {
            state.userDetail = action.payload
        },
        getUserOrderCase: (state, action) => {
            state.userOrder = action.payload
        }
    }
})

export const { getAllUsersCase, getUserByNameCase, getUserOrderCase } = userSlice.actions;

export default userSlice.reducer;

export const getAllUsersAction = () => async (dispatch) => {
    try {
        const allUsers =  await axios.get("/user")
        const usersData = allUsers.data
        dispatch(getAllUsersCase(usersData))
    }catch(error){
        console.log(error)
    }
}

export const getUserDetailAction = (email) => async (dispatch) => {
    try {
        const userById = await axios.get("/user?email=" + email)
        const userData = userById.data
        dispatch(getUserByNameCase(userData))
    } catch (error) {
        console.log(error)
    }
}

export const getUserOrderAction = () => async (dispatch) => {
    try {
        const userOrder = await axios.get('/order')
        .then(res => res.data)
        dispatch(getUserOrderCase(userOrder))
    } catch (error) {
        console.log(error)
    }
} 