import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeFilteredFoodsAction, filterByCategoryAction, setCurrentPageAction, setOrderAction } from '../../redux/foodActions';

const CategoryButtons = () => {
    const allFoods  = useSelector((state) => state.foodsReducer.allFoods);
    const dispatch = useDispatch()

    const handleClick = (e) =>{
        const value = e.target.value
        const filteredFoods = handlerFilterCategory(value)
        dispatch(filterByCategoryAction(filteredFoods))
        dispatch(setOrderAction(''))
        dispatch(activeFilteredFoodsAction(true))
        dispatch(setCurrentPageAction(1))
    }
    const handlerFilterCategory = (category) => {
        let filteredCategoryFoods;
        switch (category) {
            case 'Pastas':
                filteredCategoryFoods = allFoods.filter(e => e.category === 'Pastas')
                break;
            case 'Carnes':
                filteredCategoryFoods = allFoods.filter(e => e.category === 'Carnes')
                break;
            case 'Ensaladas':
                filteredCategoryFoods = allFoods.filter(e => e.category === 'Ensaladas')
                break;
            default:
                break;
        }
        return filteredCategoryFoods;
    }


  return (
    <div>
        <button
            // className={style.pastas}
            onClick={(e) => handleClick(e)}
            value="Pastas"
        >
            Pastas
        </button>

        <button
            // className={style.meat}
            onClick={(e) => handleClick(e)}
            value="Carnes"
        >
            Carnes
        </button>

        <button
            // className={style.salads}
            onClick={(e) => handleClick(e)}
            value="Ensaladas"
        >
            Ensaladas
        </button>
  </div>
  )
}

export default CategoryButtons