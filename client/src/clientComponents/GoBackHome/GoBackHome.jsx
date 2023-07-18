import styles from "./GoBackHome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
} from "@fortawesome/free-solid-svg-icons";


const handleClick = () => {
  console.log("volver");
};

export default function GoBackHome() {
  return <button className={styles.button} onClick={handleClick}><FontAwesomeIcon icon={faHome} />Ir al inicio</button>;
}
