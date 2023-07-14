import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const adminSlice = createSlice({
    name: "orders",
    initialState: {
        allOrders: [],
        bestSellers:[],
        orderDetail: null,
        sidebarOption:'dashboard',
        quantityOfBestSellers:3,
    },
    reducers: {
        getAllOrdersCase: (state, action) => {
            state.allOrders = action.payload
        },

        getBestSellersCase:(state, action) => {
            state.bestSellers = action.payload
        },
        setSidebarOption:(state,action) =>{
            state.sidebarOption = action.payload
        },
        getOrderDetailCase: (state,action) =>{
            state.orderDetail = action.payload
        },
        cleanOrderDetailCase: (state) =>{
            state.orderDetail = null
        },
        setQuantityCase:(state,action) =>{
            state.quantityOfBestSellers = action.payload
        }

    }
})

export const { getAllOrdersCase,setSidebarOption, getOrderDetailCase, cleanOrderDetailCase, getBestSellersCase,setQuantityCase } = adminSlice.actions;

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
export const getBestSellersAction = (quantity) => async (dispatch) => {
    try {
        const bestSellers = await axios.get(`/order/bestSellers?quantity=${quantity}`)
            .then(r => r.data)
        dispatch(getBestSellersCase(bestSellers))
    } catch (error) {
        console.log(error);
    }
}

export const getOrderDetailAction = (id) => async (dispatch) => {
    try {
        const detail = await axios.get(`/order/detail/${id}`)
            .then(r => r.data)
        dispatch(getOrderDetailCase(detail))
    } catch (error) {
        console.log(error);
    }
}


export const cleanOrderDetailAction = () => (dispatch) => {
    dispatch(cleanOrderDetailCase())
}

