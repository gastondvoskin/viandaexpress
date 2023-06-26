import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EditForm(setEdited){
    const { id } = useParams();
    const allFoods=useSelector((state) => state.foodsReducer.allFoods)
    const toEdit=allFoods.filter(fo=>fo.id===id)
    console.log(id)
    console.log(toEdit)
    return (
        <div>
            <Link to='/dashboard'><button>Cancelar</button></Link>
        </div>
    )
}