import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./HeadingContainer.module.scss";
import { useEffect, useState } from "react";

const HeadingContainer = ({ setSearchTerm, searchTerm }) => {
  const [classToAdd, setClassToAdd] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      setClassToAdd(styles.container);
    } else {
      setClassToAdd(styles.containerFull);
    }
  }, [searchTerm]);

  return (
    <div className={classToAdd}>
      <Header />
      <SearchBar setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default HeadingContainer;
