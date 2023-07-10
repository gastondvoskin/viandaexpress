import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const adminSlice = createSlice({
    name: "orders",
    initialState: {
        allOrders: []
    },
    reducers: {
        getAllOrdersCase: (state, action) => {
            state.allOrders = action.payload
        }
    }
})

export const { getAllOrdersCase } = adminSlice.actions;
export default adminSlice.reducer;

export const getAllOrdersAction = () => async (dispatch) => {
    try {
        const allOrders = await axios.get('/order')
            .then(r => r.data)
        dispatch(getAllOrdersCase(allOrders))
    } catch (error) {
        console.log(error);
    }
}

