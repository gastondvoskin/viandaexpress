import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import style from './DashBoard.module.css'

export default function EditForm(setEdited){
    const { id } = useParams();
    const allFoods=useSelector((state) => state.foodsReducer.allFoods)
    const toEdit=allFoods.filter(fo=>fo.id===id)[0]
    console.log(toEdit.name)
    const input=[]
    const [select,setSelect]=useState({
        initial_price: toEdit.initial_price,
        discount: toEdit.discount,
        status: toEdit.status,
    })
    const [editable,setEditable]=useState({
        initial_price: true,
        discount: true,
        status: true,
    })
    const handleCheck=(e)=>{
        const {name,checked}=e.target
        setEditable({
            ...editable,
            [name]: !checked,
        })
        if(!checked){
        setSelect({
            ...select,
            [name]: toEdit[name],
        })
        input=input.filter(inp=>inp!==name)
        }else{
            input.push(name)
        }
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setSelect({
            ...select,
            [name]: value,
        })
    }
    const handleSelect = (e) => {
        const {name,value}=e.target
        setSelect({
            ...select,
            status:value,
        })
      };
      const handleEdit=(e)=>{
        e.preventDefault();
      }
      const handleDelete=(e)=>{
        e.preventDefault();
      }
    return (
        <div>
            <h1>{toEdit.name}</h1>
            <input className={style.diets} type='checkbox' name='initial_price' onChange={handleCheck}/><label><h3 className={style["h3-title"]}>Precio Inicial: </h3></label>
            <input type='number' name='initial_price' value={select.initial_price} disabled={editable.initial_price} onChange={handleChange}/>
            <input className={style.diets} type='checkbox' name='discount' onChange={handleCheck}/><label><h3 className={style["h3-title"]}>Descuento: </h3></label>
            <input type='number' name='discount' value={select.discount} disabled={editable.discount} onChange={handleChange}/>
            <input className={style.diets} type='checkbox' name='status' onChange={handleCheck}/><label><h3 className={style["h3-title"]}>Estado: </h3></label>
            <select type='text' name='status' value={select.status} disabled={editable.status} onChange={handleSelect}>
                <option value={true}>Habilitado</option>
                <option value={false}>Deshabilitado</option>
            </select>
            <button onClick={handleEdit}>Guardar</button>
            <button onClick={handleDelete}>Eliminar</button>
            <Link to='/dashboard'><button>Cancelar</button></Link>
        </div>
    )
}