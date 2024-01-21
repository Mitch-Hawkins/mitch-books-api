import styles from "./BackgroundBook.module.scss";

const BackgroundBook = ({ image }) => {
  return (
    <span>
      <img src={image} />
    </span>
  );
};

export default BackgroundBook;
