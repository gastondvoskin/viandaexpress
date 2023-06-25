import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import validation from './validation.jsx'
import style from './DashBoard.module.css'
import { postFood } from "../../redux/foodActions.js";
import axios from "axios";

export default function DashBoard(){
    const dispatch = useDispatch();
    const diets =useSelector(state=>state.foodsReducer.diets)
    const allFoods=useSelector(state=>state.foodsReducer.allFoods)
    const categories=useSelector(state=>state.foodsReducer.categories)
    // console.log(allFoods)
    const [input,setInput]=useState({
        name: "",
        description: "",
        diets: [],
        category: "",
        initial_price: 0,
        discount: 0,
        image: "",
    })
    const [errors,setErrors]=useState({
        name: "",
        description: "",
        diets: "",
        category: "",
        initial_price: "",
        discount: "",
        image: "",
    })
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setInput({
            ...input,
            [name]: value,
        })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setInput({
          ...input,
          image: file,
        });
      };
    const handleSubmit= async  (e)=>{
    // const handleSubmit= async (e)=>{
        e.preventDefault();
        setErrors(validation(input))
        console.log(input)
        if(!input.name||!input.description||!input.category||!input.diets.length||!input.image||input.initial_price<0||input.discount<0||input.discount>100){
            alert(`Llena todos los campos para crear la vianda`);
        }else{
             try {
                 const formData = new FormData();
                 formData.append("name", input.name);
                 formData.append("description", input.description);
                 formData.append("category", input.category);
                 formData.append("diets", input.diets);
                 formData.append("initial_price", input.initial_price);
                 formData.append("discount", input.discount);
                 formData.append("image", input.image);
                 console.log(formData);
                 // dispatch(postFood(input));
                 await axios.post("http://localhost:3001/food", formData, {
                     headers: {
                       "Content-Type": "multipart/form-data",
                     },
                   });
                  alert(`Receta de ${input.name} creada`);
                  setInput({
                    name: "",
                    description: "",
                    diets: [],
                    category: "",
                  initial_price: 0,
                discount: 0,
                  image: "",
                  });
              
             } catch (error) {
                 alert (error.message)
             }        
        }
    }
    const handleCheck = (e) => {
        const { value, checked } = e.target;
        let updatedDiets = [...input.diets];
      
        if (checked) {
          updatedDiets.push(value); // Agregar al array si está seleccionado
        } else {
          updatedDiets = updatedDiets.filter((diet) => diet !== value); // Eliminar del array si está deseleccionado
        }
      
        setInput({
          ...input,
          diets: updatedDiets,
        });
      };
      
    const handleSelect=(e)=>{
        setInput({
            ...input,
            category: e.target.value,
        })
    }
    return(
        <div>
            <Link to='/'><button className={style.ButtonDB}>Home</button></Link>
            <h1>Agregar Vianda</h1>
            <div className={style.DivDB}>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className={style.SectionDB}>
                        <div className={style.SubSectionDB}>
                            <div>
                                <label><h3>Nombre de Vianda:</h3></label>
                                <input type='text' name='name' value={input.name}  onChange={handleChange} />
                                {errors.name?(
                                        <p>{errors.name}</p>
                                    ):null}
                            </div>
                            <div>
                                <label><h3>Descripción:</h3></label>
                                <textarea type='text' name='description' value={input.description}  onChange={handleChange} />
                                {errors.description?(
                                        <p>{errors.description}</p>
                                    ):null}
                            </div>
                            <div>
                                <label><h3>Categoría</h3></label>
                                <select onChange={handleSelect} value={input.category}>
                                    <option value="">--Seleccionar--</option>
                                    {categories.map(ca=>{
                                        return <option value={ca}>{ca}</option>
                                    })}
                                </select>
                                {errors.category?(
                                        <p>{errors.category}</p>
                                    ):null}
                            </div>
                            {diets.map((di) => (
                                <div key={di}>
                                    <label>
                                    <input
                                        type="checkbox"
                                        name="diet"
                                        value={di}
                                        checked={input.diets.includes(di)}
                                        onChange={handleCheck}
                                    />
                                    {di}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className={style.SubSectionDB}>
                            <div className={style.SectionDB}>
                                <div className={style.NumberDB}>
                                    <label><h3>Precio de Vianda:</h3></label>
                                    <input type='number' name='initial_price' value={input.initial_price} onChange={handleChange} className={style.InputNumberDB} />
                                    {errors.initial_price?(
                                            <p>{errors.initial_price}</p>
                                        ):null}
                                </div>
                                <div className={style.NumberDB}>
                                    <label><h3>Descuento de Vianda:</h3></label>
                                    <input type='number' name='discount' value={input.discount} onChange={handleChange} className={style.InputNumberDB} />
                                    {errors.discount?(
                                            <p>{errors.discount}</p>
                                        ):null}
                                </div>
                            </div>
                            <div>
                                <label><h3>Imagen:</h3></label>
                                <input type="file" name="image" onChange={handleImageChange} />
                                {errors.image?(
                                        <p>{errors.image}</p>
                                    ):null}
                            </div>
                            <button type='submit' className={style.ButtonDB}>Crear Vianda</button>
                        </div>
                    </div>
                        
                </form>
            </div>
        </div>
    )
}