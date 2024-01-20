import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./HeadingContainer.module.scss";

const HeadingContainer = ({ setSearchTerm }) => {
  return (
    <div className={styles.container}>
      <Header />
      <SearchBar setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default HeadingContainer;
