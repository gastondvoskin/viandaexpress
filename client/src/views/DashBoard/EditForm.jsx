import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EditForm(setEdited){
    const { id } = useParams();
    const allFoods=useSelector((state) => state.foodsReducer.allFoods)
    const toEdit=allFoods.filter(fo=>fo.id===id)[0]
    console.log(toEdit.name)
    const [input,setInput]=useState([])
    const [editable,setEditable]=useState({
        initial_price: true,
    })
    return (
        <div>
            <h1>{toEdit.name}</h1>
            <input type='checkbox' name='initial_price' /><label>Precio Inicial: </label>
            <input type='number' value={toEdit.initial_price} disabled={editable.initial_price}/>
            <Link to='/dashboard'><button>Cancelar</button></Link>
        </div>
    )
}