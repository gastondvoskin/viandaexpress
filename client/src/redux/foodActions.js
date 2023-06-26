// actions (these are the actions that will be imported in React components)

import axios from "axios";
import { getAllFoods, getFoodsByName, filteredFoodByCategory, filteredFoodByOrder,/* , getFoodById */ } from "./foodSlice.js";

export const getFoods = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/food"); 
        const allFoods = response.data;
        dispatch(getAllFoods(allFoods));
    } catch (error) {
        console.log(error);
    }
};

export const getFoodByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/food?name=" + name); 
        const foodsByName = response.data;
        dispatch(getFoodsByName(foodsByName));
    } catch (error) {
        console.log(error);
    }
};

export const filterFoodByCategory = (payload) => async (dispatch) => {
    try {
        dispatch(filteredFoodByCategory(payload));
    } catch (error) {
        console.log(error);
    }
};

export const filterFoodByOrder = (payload) => async (dispatch) => {
    try {
        dispatch(filteredFoodByOrder(payload));
    } catch (error) {
        console.log(error);
    }
};

export const postFood=(input)=>async (dispatch)=> {
    try {
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("category", input.category);
        formData.append("diet", input.diets);
        formData.append("initial_price", input.initial_price);
        formData.append("discount", input.discount);
        formData.append("image", input.image);
        console.log(formData);
        await axios.post("http://localhost:3001/food", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        });
        dispatch(postFoods());
        } catch (error) {
            alert (error.message)
        }
}

// Do not delete. Uncomment and test when the endpoint `http://localhost:3001/food/${id}` is created
// export const getFood = (id) => async (dispatch) => {
//     try {
//         const response = await axios.get(`http://localhost:3001/food/${id}`); 
//         const foodById = response.data;
//         dispatch(getFoodById(foodById));
//     } catch (error) {
//         console.log(error);
//     }
// };
