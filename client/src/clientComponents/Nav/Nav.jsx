import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../../assets/logo/LogoViandaExpress.jpeg";
import LoginButton from "../../LoginComponents/LoginButton/LoginButton.jsx";
import LogoutButton from "../../LoginComponents/LogoutButton/LogoutButton.jsx";
import { useAuth0 } from "@auth0/auth0-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const { user, isAuthenticated } = useAuth0();

  console.log('isAuthenticated: ', isAuthenticated);
  console.log('user: ', user);

  return (
    <nav className={styles.mainContainer}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Home" />
      </Link>

      <div className={styles.rightContainer}>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}

        <NavLink to="/shoppingcart">
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>

        {isAuthenticated &&
          <NavLink to={`/myprofile/${user.email}`}> 
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        }


          <Link to="/admin">
            <button className={styles.dashBoard}>Admin</button>
          </Link>


        {/* {isAuthenticated && (
          <Link to="/admin">
            <button className={styles.dashBoard}>Admin</button>
          </Link>
        )} */}
      </div>
    </nav>
  );
}

export default Nav;
