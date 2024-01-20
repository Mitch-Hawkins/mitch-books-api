import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ bookData }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>
        There was an error, please try again later.
      </h3>
      <p className={styles.paragraph}>
        Error Message: <span className={styles.span}>{bookData.message}</span>
      </p>
      <p className={styles.paragraph}>
        Error Code: <span className={styles.span}>{bookData.code}</span>
      </p>
    </div>
  );
};

export default ErrorMessage;
