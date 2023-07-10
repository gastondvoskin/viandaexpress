import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const adminSlice = createSlice({
    name: "orders",
    initialState: {
        allOrders: [],
        sidebarOption:'dashboard'
    },
    reducers: {
        getAllOrdersCase: (state, action) => {
            state.allOrders = action.payload
        },
        setSidebarOption:(state,action) =>{
            state.sidebarOption = action.payload
        }
    }
})

export const { getAllOrdersCase,setSidebarOption } = adminSlice.actions;
export default adminSlice.reducer;

export const getAllOrdersAction = () => async (dispatch) => {
    console.log('dispachandop');
    try {
        const allOrders = await axios.get('/order')
            .then(r => r.data)
            console.log(allOrders);
        dispatch(getAllOrdersCase(allOrders))
    } catch (error) {
        console.log(error);
    }
}

