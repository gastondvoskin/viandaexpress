import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../../assets/logo.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Nav() {

    return (
        <nav className={styles.mainContainer}> 
            <Link to="/home">
                <img 
                    className={styles.logo}
                    src={logo}
                    alt="Home"
                />
            </Link>
            

            <div className={styles.rightContainer}>
                <SearchBar />

                <NavLink to="/basket">
                    <FontAwesomeIcon icon={faCartShopping} />
                </NavLink>

                <NavLink to="/myprofile">
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>

            </div>
        </nav>
        
    );
};

export default Nav; 