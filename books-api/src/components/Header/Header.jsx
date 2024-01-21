import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <h1 className={styles.header} onClick={() => location.reload()}>
        Book Me Up!
      </h1>
    </div>
  );
};

export default Header;
