import { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      <input
        className={styles.textbar}
        type="text"
        onChange={handleInputChange}
      />
      <button className={styles.button}>Search</button>
    </form>
  );
};

export default SearchBar;
