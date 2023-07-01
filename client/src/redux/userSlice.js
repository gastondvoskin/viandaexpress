import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: "users",
    initialState:{
        allUsers: [],
        userDetail: []
    },
    reducers: {
        getAllUsers: (state, action) => {
            state.allUsers = action.payload
        },
        getUserByName: (state, action) => {
            state.userDetail = action.payload
        },
    }
})

export const { getAllUsers, getUserByName  } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => async (dispatch) => {
    try {
        const allUsers =  await axios.get("http://localhost:3001/user")
        const usersData = allUsers.data
        dispatch(getAllUsers(usersData))
    }catch(error){
        console.log(error)
    }
}

export const fetchUserDetail = (name) => async (dispatch) => {
    try {
        const userById = await axios.get("http://localhost:3001/user?name=" + name)
        const userData = userById.data
        dispatch(getUserByName(userData))
    } catch (error) {
        console.log(error)
    }
}
