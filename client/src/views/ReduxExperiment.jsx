// This file is created to show how to access the global state using redux toolkit. 

import { useSelector, useDispatch } from 'react-redux'
import { getAllFoods } from '../redux/foodSlice';

const ReduxExperiment = () => {
    const allFoods = useSelector((state) => state.foods.allFoods);

    const dispatch = useDispatch();

    return (
        <div>
            <h1>
                Redux Experiment Component
            </h1>
            {
                allFoods.map(food => {
                    return (
                        <div>
                            <h1>{food.name}</h1>
                            <p>{food.description}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ReduxExperiment;