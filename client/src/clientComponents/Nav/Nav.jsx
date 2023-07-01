import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../../assets/logo/logo-transparent.png";
import LoginButton from "../../LoginComponents/LoginButton/LoginButton.jsx";
import LogoutButton from "../../LoginComponents/LogoutButton/LogoutButton.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  
  const [ displayProfileOptions, setDisplayProfileOptions ] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  console.log('displayProfileOptions: ', displayProfileOptions)
  console.log('isAuthenticated: ', isAuthenticated)
  /* console.log("user: ", user); */

  return (
    <nav className={styles.mainContainer}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Home" />
      </Link>

      <div className={styles.rightContainer}>
        <NavLink to="/">HOME</NavLink>{" "}
        {/* Change content of home, add offers.  */}
        <NavLink to="/">VIANDAS</NavLink>{" "}
        {/* Move content from home to viandas. */}
        <NavLink to="/shoppingcart">
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>

        <Link to="/admin">
          <button className={styles.admin}>Admin</button>
        </Link>
        {/* {isAuthenticated && (
          <Link to="/admin">
            <button className={styles.dashBoard}>Admin</button>
          </Link>
        )} */}


        <div className={styles.userContainer}
          onMouseOver={() => setDisplayProfileOptions(true)}
          onMouseOut={() => setDisplayProfileOptions(false)}
        >
          <FontAwesomeIcon icon={faUser} />
          {displayProfileOptions && isAuthenticated && <LogoutButton />}
          {displayProfileOptions && isAuthenticated && <NavLink to="/myprofile">MI CUENTA</NavLink>}
          {displayProfileOptions && !isAuthenticated && <LoginButton />}
        </div>

      </div>

      

    </nav>
  );
}

export default Nav;
