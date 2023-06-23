// reducer (foodsSlice.reducer is by now the only reducer)
import { createSlice } from '@reduxjs/toolkit'    // ---> createSlice is a method that combines createAction with createReducer
import { hardcodedFoodsArray } from "../../hardcodedFoods";

// console.log(createSlice) // function

const initialState = {
  allFoods: [],
  // Do not delete. Uncomment foodDetail and test when the endpoint `http://localhost:3001/food/${id}` is created
  // foodDetail: {},

  // filteredByDiet: [],
  // filteredByCategory: []
}

export const foodsSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    getAllFoods: (state, action) => {   /* we can access getAllFoods through foodsSlice.actions.getAllFoods */
      // console.log(action.type);
      // console.log(action.payload);
      const allFoods = action.payload;
      state.allFoods = allFoods;
    }, 
    
    // Do not delete. Uncomment and test when the endpoint `http://localhost:3001/food/${id}` is created
    getFoodById: (state, action) => {
      const foodById = action.payload;
      state.foodDetail = foodById;
    }
  }
})

// console.log(foodsSlice.actions);
// console.log(foodsSlice.actions.getAllFoods);

export const { getAllFoods/* , getFoodById */ } = foodsSlice.actions

export default foodsSlice.reducer; /* it will be imported in the store */