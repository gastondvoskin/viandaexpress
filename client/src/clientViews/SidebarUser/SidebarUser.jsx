import React, { Children } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import styles from "./SidebarUser.module.css"
import { Link } from "react-router-dom";
const SidebarUser = () => {
    return (
        <div className={styles.bodys}>
        <div className={styles.container}>
            <div>
                <h2>Menú</h2>
            </div>
            <ul className={styles.sidebar}>
                <li className={styles.row}><Link to="/myprofileuser" className={styles.links}><i><FontAwesomeIcon icon={faListOl} /></i> Mi Perfil</Link></li>
                <li className={styles.row}><Link to="/userorder" className={styles.links}><i><FontAwesomeIcon icon={faListOl} /></i> Mi Orden</Link></li>
            </ul>
        </div>
        </div>
    )
}

export default SidebarUser