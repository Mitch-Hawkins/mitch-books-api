import styles from "./LoadingSpinner.module.scss";
import icon from "../../assets/icons8-open-book.gif";

const LoadingSpinner = ({ loadingIcon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerOther}>
        <p>
          Loading...
          <img src={icon} />
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
