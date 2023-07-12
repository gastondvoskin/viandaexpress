import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const adminSlice = createSlice({
    name: "orders",
    initialState: {
        allOrders: [],
        bestSellers:[]
    },
    reducers: {
        getAllOrdersCase: (state, action) => {
            state.allOrders = action.payload
        },
        getBestSellersCase:(state, action) => {
            state.bestSellers = action.payload
        }

    }
})

export const { getAllOrdersCase,getBestSellersCase } = adminSlice.actions;
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
export const getBestSellersAction = () => async (dispatch) => {
    try {
        const bestSellers = await axios.get('/order/bestSellers')
            .then(r => r.data)
        dispatch(getBestSellersCase(bestSellers))
    } catch (error) {
        console.log(error);
    }
}

