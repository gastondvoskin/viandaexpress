import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import userSlice from "./userSlice";

export const shopingCartSlice = createSlice({
    name: "shopingCart",
    initialState:{
        pendingOrder:{},
        itemsOrder:[],
    },
    reducers: {
        getPendingOrderCase:(state,action)=>{
            state.pendingOrder = action.payload
        },
        setUserOrderCase:(state,action)=>{
            state.pendingOrder = action.payload
        },
        setItems: (state, action) => {
            const newItem = action.payload;
            state.itemsOrder = [...state.itemsOrder, newItem];
        },
        getItems: (state,action)=>{
            state.itemsOrder=action.payload;
        },
        deleteItems: (state, action) => {
            const deleteId = action.payload;
            state.orderItems = state.orderItems.filter((it)=>it.id!==deleteId);
        },
        putItems: (state,action)=>{
            const putId=action.payload.id;
            const putQuantity=action.payload.quantity;
            const putAmount=action.payload.amount;
            state.orderItems=state.orderItems.map(it=>{
                if(it.id===putId){
                it.quantity= putQuantity;
                it.amount=putAmount;
                }
            })
        }
    }
})
export const {getPendingOrderCase,setUserOrderCase,setItems, getItems,putItems,deleteItems} = shopingCartSlice.actions
export default shopingCartSlice.reducer;

export const getPendingOrderAction = (userId) => async (dispatch) => {
    try {
        const pendingOrder = await axios.get(`/order/${userId}`)
            .then(r => r.data[0])
        dispatch(getPendingOrderCase(pendingOrder)) 
    } catch (error) {
        console.log(error)
    }
}
export const setItemsActions = ({Food, FoodId, OrderId, name, image,  final_price, quantity,amount}) =>async (dispatch) => {
    try {
        // amount=quantity*final_price
        const item=await axios.post('/item',{
            FoodId: FoodId,
            OrderId: OrderId,
            final_price: final_price,
            quantity: quantity,
            amount: amount,
        }).then(r => r.data)
        console.log(item)
        dispatch(setItems({Food: Food,...item}));
    } catch (error) {
      console.log(error);
    }
};

export const deleteItemActions = ({id}) =>async (dispatch) => {
  try {
    await axios.delete(`/item/${id}`);
    // console.log("deleteItems", FoodId);
    dispatch(deleteItems(id));
  } catch (error) {
    console.log(error);
  }
};
export const putItemActions=({id,quantity,amount})=>async (dispatch)=>{
  try{
    await axios.put('/item',{id,quantity,amount});
    dispatch(putItems({id,quantity,amount}));
  }catch(error){
    console.log(error);
  }
}