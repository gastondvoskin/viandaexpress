// reducer 
import { createSlice } from '@reduxjs/toolkit'
import { hardcodedFoodsArray } from "../../hardcodedFoods";

const initialState = {
  allFoods: hardcodedFoodsArray,            /* change in the future */
  foodDetail: [],
}

export const foodsSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    /* NIY */
    /* getAllFoods: (state, action) => {
        state.allFoods = action.payload;
    }, 
    getFoodById: (state, action) => {
        state.foodDetail = action.payload;
    } */
  }
})

export const { getAllFoods, getFoodById } = foodsSlice.actions

export default foodsSlice.reducer