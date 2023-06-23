import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const magnifyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />

function SearchBar(){
    return(
        <div>
            <input
                placeholder="NIY: Buscar por nombre"
            />
            <button>
                {magnifyingGlass} 
            </button>
        </div>
    )
}

export default SearchBar;