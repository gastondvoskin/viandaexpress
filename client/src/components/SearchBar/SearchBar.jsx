import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../SearchBar/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getNameFood, getFoods } from "../../redux/foodActions";

const magnifyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />;

function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(event) {
    const updatedName = event.target.value;
    setName(updatedName);
    dispatch(getNameFood(updatedName));
    setCurrentPage(1);
  }

  return (
    <div>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Buscar por nombre..."
        onChange={(e) => handleInputChange(e)}
      />
      <button className={styles.magnifyingGlass}>{magnifyingGlass}</button>
    </div>
  );
}

export default SearchBar;


