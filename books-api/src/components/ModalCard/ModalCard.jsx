import { useContext } from "react";
import { ModalContext } from "../../context/ModalContextProvider";
import styles from "./ModalCard.module.scss";

const ModalCard = ({
  title,
  author = "Not Provided",
  pages = "Not Provided",
  description = "Not Provided",
  image,
}) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const handleClick = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  return (
    <article className={styles.modalcard}>
      <button className={styles.closebutton} onClick={handleClick}>
        X
      </button>
      <img src={image} alt="No Image Available"></img>
      <h4>{title}</h4>
      <p>Author: {author}</p>
      <p>Page Count: {pages}</p>
      <p className={styles.description}>Description: {description}</p>
    </article>
  );
};

export default ModalCard;
