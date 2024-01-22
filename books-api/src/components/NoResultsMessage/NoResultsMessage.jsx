import styles from "./NoResultsMessage.module.scss";

const NoResultsMessage = () => {
  return (
    <div className={styles.container}>
      <p>There were no matching results, please try another search.</p>
    </div>
  );
};

export default NoResultsMessage;
