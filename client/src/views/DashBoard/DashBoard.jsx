import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import validation from './validation.jsx'
import style from './DashBoard.module.css'

export default function DashBoard(){
    const dispatch = useDispatch();
    const diets=useSelector(state=>state.foodsReducer.diets)
    console.log(diets)
    const [input,setInput]=useState({
        name: "",
        summary: "",
        diets: [],
        category: "",
        price: 0,
        discount: 0,
        image: "",
    })
    const [errors,setErrors]=useState({
        name: "",
        summary: "",
        diets: "",
        category: "",
        price: "",
        discount: "",
        image: "",
    })
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setInput({
            ...input,
            [name]: value,
        })
        setErrors(validation({
            ...input,
            [name]: value,
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!input.name||!input.summary||!input.diets.length||!input.image){
            alert(`Llena todos los campos para crear la vianda`);
        }else{
            console.log(input);
            // dispatch(postRecipes(input));
            alert(`Receta de ${input.name} creada`);
            setInput({
                name: "",
                summary: "",
                diets: [],
                category: "",
                    price: 0,
                discount: 0,
                image: "",
            });
        }
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
                                <textarea type='text' name='summary' value={input.summary}  onChange={handleChange} />
                                {errors.summary?(
                                        <p>{errors.summary}</p>
                                    ):null}
                            </div>
                            <div>
                                <label><h3>Dietas:</h3></label>
                                <label><input type='checkbox' name='dietadeDB'  />Dietas traídas de DB</label>
                            </div>
                        </div>
                        <div className={style.SubSectionDB}>
                            <div className={style.SectionDB}>
                                <div className={style.NumberDB}>
                                    <label><h3>Precio de Vianda:</h3></label>
                                    <input type='number' name='price' value={input.price} onChange={handleChange} className={style.InputNumberDB} />
                                </div>
                                <div className={style.NumberDB}>
                                    <label><h3>Descuento de Vianda:</h3></label>
                                    <input type='number' name='discount' value={input.discount} onChange={handleChange} className={style.InputNumberDB} />
                                </div>
                            </div>
                            <div>
                                <label><h3>Imagen:</h3></label>
                                <label>podemos implementar cloudinary, sino usamos un input text</label>
                                <input type='text' name='image' value={input.image}  onChange={handleChange} />
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