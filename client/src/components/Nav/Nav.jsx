import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../../assets/logo.jpeg";


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

                <Link to="/basket">
                    BASKET
                </Link>

                <Link to="/myprofile">
                    MYPROFILE
                </Link>


            </div>
        </nav>
        
    );
};

export default Nav; 