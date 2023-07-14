import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import userSlice from "./userSlice";

export const shopingCartSlice = createSlice({
  name: "shopingCart",
  initialState: {
    pendingOrder: {},
  },
  reducers: {
    getPendingOrderCase: (state, action) => {
      state.pendingOrder = action.payload;
    },
    setUserOrderCase: (state, action) => {
      state.pendingOrder = action.payload;
    },
  },
});
export const { getPendingOrderCase, setUserOrderCase } =
  shopingCartSlice.actions;
export default shopingCartSlice.reducer;

export const getPendingOrderAction = (userEmail) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/order/${userEmail}`);
    const pendingOrder = data[0];
    dispatch(getPendingOrderCase(pendingOrder));
  } catch (error) {
    console.log(error);
  }
};
