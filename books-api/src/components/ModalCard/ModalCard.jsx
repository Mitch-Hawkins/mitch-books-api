import { useContext } from "react";
import { ModalContext } from "../../context/ModalContextProvider";

const ModalCard = ({
  title,
  author,
  pages,
  description,
  image = "No Image Provided",
}) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const handleClick = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  return (
    <article>
      <img></img>
      <h4>{title}</h4>
      <p>Author: {author}</p>
      <p>Page Count: {pages}</p>
      <p>Description: {description}</p>
      <button onClick={handleClick}>Close</button>
    </article>
  );
};

export default ModalCard;
