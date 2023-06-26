 // reducer (foodsSlice.reducer is by now the only reducer)
import { createSlice } from "@reduxjs/toolkit";
import { hardcodedFoodsArray } from "../../hardcodedFoods";

const initialState = {
  allFoods: [],
  foodDetail: [],
  filteredFoods:[],
  activeFilteredFoods:false,
  orderBy:'',
  currentPage:1,
  diets: [
    "Sin TACC",
    "Vegetariano",
    "Vegano",
    "Sin Lactosa",
  ] /* TONO: why is there a diets property in redux? */,
  categories: [
    "Pastas",
    "Ensaladas",
    "Carnes",
  ] /* TONO: why is there a categories property in redux? */,
  filteredByName: [],
  filteredByCategory: [],
  filteredByOrder: [],
  // filteredByDiet: [],
};

export const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    getAllFoods: (state, action) => {
      /* we can access getAllFoods through foodsSlice.actions.getAllFoods */
      // console.log(action.type);
      // console.log(action.payload);
      const allFoods = action.payload;
      state.allFoods = allFoods;
      state.filteredByCategory = allFoods;
      state.filteredByOrder = allFoods;
    },

    getFoodsByName: (state, action) => {
      const foodByName = action.payload;
      state.filteredByName = foodByName;
      if (foodByName !== "") {
        state.allFoods = state.filteredByName;
      } else {
        state.allFoods;
      }
    },
    orderFoods:(state,action) =>{
      const orderedFoods = action.payload;
      state.filteredFoods = orderedFoods
    },

    activeFilteredFood:(state,action) =>{
      const bolean = action.payload;
      state.activeFilteredFoods = bolean
    },
    setOrder:(state,action) =>{
      const order = action.payload;
      state.orderBy = order
    },
    setCurrentPage:(state,action) => {
      const page = action.payload
      state.currentPage = page
    },
    filteredFoodByCategory: (state, action) => {
      const selectedCategory = action.payload; 
      if (selectedCategory === "Todas") {
        // Resetear filtros. 
        // TONO comment: No se puede resetar porque se está usando allFoods en vez de currentFoods. Hay que reimplementarlo. 
      }
      const foodsByCategory = state.filteredByCategory;
      const foodFiltered = foodsByCategory.filter(
        (el) => el.category === selectedCategory
      );
      state.allFoods = foodFiltered;
    },

    filteredFoodByOrder: (state, action) => {
      const order = action.payload;
      const orderedFoods = state.filteredByOrder;
      switch (order) {
        case "cheap":
          state.allFoods.sort(function (a, b) {
            if (a.final_price > b.final_price) {
              return 1;
            }
            if (b.final_price > a.final_price) {
              return -1;
            }
            return 0;
          });
          state.allFoods;

          break;

        case "expensive":
          state.allFoods.sort(function (a, b) {
            if (a.final_price > b.final_price) {
              return -1;
            }
            if (b.final_price > a.final_price) {
              return 1;
            }
            return 0;
          });
          state.allFoods;

          break;

        case "atoz":
          state.allFoods.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
          state.allFoods;
          break;

        case "ztoa":
          state.allFoods.sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          });
          state.allFoods;
          break;

        default:
          state.allFoods;
      }
    },
    postFoods: (state) => {
      state.allFoods;
    },

    // WIP
  },
});

export const {
  getAllFoods,
  getFoodsByName,
  filteredFoodByCategory,
  filteredFoodByOrder,
  activeFilteredFood,
  orderFoods,
  setOrder,
  setCurrentPage
} = foodsSlice.actions;

export default foodsSlice.reducer; /* it will be imported in the store */

/**
 * Logica del filtrado por Popularidad
      case "asc": 
          state.allFoods.sort(function(a, b) {
            if(a.total_score > b.total_score){
                return -1
            }
            if(b.total_score > a.total_score){
                return 1
            }
            return 0
          })
          state.allFoods
          
          break;

        case "desc":
          state.allFoods.sort(function(a, b) {
            if(a.total_score > b.total_score){
                return 1
            }
            if(b.total_score > a.total_score){
                return -1
            }
            return 0
          })
          state.allFoods
          
          break;
 */
