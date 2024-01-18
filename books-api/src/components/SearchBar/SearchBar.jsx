import { useState } from "react";

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
    <form onSubmit={handleFormSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
