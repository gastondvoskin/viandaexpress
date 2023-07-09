import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ordersSlice = createSlice({
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

export const { getAllOrdersCase } = ordersSlice.actions;
export default ordersSlice.reducer;

export const getAllOrdersAction = () => async (dispatch) => {
    try {
        const allOrders = await axios.get('/order')
            .then(r => r.data[0])
        dispatch(getAllOrdersCase(allOrders))
    } catch (error) {
        console.log(error);
    }
}

