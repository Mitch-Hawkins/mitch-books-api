import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
