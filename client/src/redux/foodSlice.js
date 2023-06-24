// reducer (foodsSlice.reducer is by now the only reducer)
import { createSlice } from '@reduxjs/toolkit';
import { hardcodedFoodsArray } from "../../hardcodedFoods";

const initialState = {
  allFoods: [],
  foodDetail: [],
  diets: ['no_tacc','vegetarian','vegan','without_lactose'],
  categories:['pasta','ensalada','carne'],
  filteredByName: [],
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
    getAllFoodsByName: (state, action) => {
      const foodName = action.payload
      state.filteredByName = foodName
      if(foodName !== ""){
        state.allFoods = state.filteredByName
      }else{
        state.allFoods
      }
    },
    postFoods: (state)=>{
      state.allFoods
    }
    // WIP
  }
})



export const { getAllFoods, getAllFoodsByName, postFoods } = foodsSlice.actions

export default foodsSlice.reducer; /* it will be imported in the store */