import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContextProvider";

const BookCard = ({
  title,
  author = "Not Provided",
  pages = "Not Provided",
  description = "No Description Available",
  id,
  image = "",
  bookData,
}) => {
  const { isModalOpen, setIsModalOpen, modalData, setModalData } =
    useContext(ModalContext);

  const handleClick = () => {
    setIsModalOpen(true);
    console.log(id);
    setModalData(bookData[id]);
  };

  return (
    <article>
      <img src={image} alt="No Image Avaialble"></img>
      <h4>{title}</h4>
      <p>Author: {author}</p>
      <button onClick={handleClick}>{`${isModalOpen}`}</button>
    </article>
  );
};

export default BookCard;
