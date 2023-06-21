import React from 'react';
import { Link, useHistory } from "react-router-dom";

export default function DashBoard(){
    return(
        <div>
            <Link to='/home'><button>Home</button></Link>
            <h1>Agregar Vianda</h1>
            <form>
                <label>Nombre de Vianda:</label>
                <input type='text' name='name' />
                <label>Descripción</label>
                <input type='text' name='summary' />
                <label>Dietas:</label>
                <label><input type='checkbox' name='dietadeDB' />Dietas traídas de DB</label>
                <label>Imagen</label>
                <label>podemos implementar cloudinary, sino usamos un input text</label>
                <input type='text' name='image' />
                <button>Crear Vianda</button>
            </form>
        </div>
    )
}