// store 
import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from "./foodSlice";
import usersReducer from "./userSlice";
import shopingCartReducer from './shopingCartSlice';
import ordersReducer from './ordersSlice';

const store = configureStore({
  reducer: {
    foodsReducer,
    usersReducer,
    shopingCartReducer,
    ordersReducer    
  },
});

export default store;