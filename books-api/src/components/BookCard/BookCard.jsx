import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContextProvider";

const BookCard = ({ title, author, pages, id, bookData, setModalData }) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const handleClick = () => {
    setIsModalOpen(true);
    console.log(id);
    setModalData(bookData[id]);
  };

  return (
    <article>
      <img></img>
      <h4>{title}</h4>
      <p>Author: {author}</p>
      <p>Passengers: {pages}</p>
      <button onClick={handleClick}>{`${isModalOpen}`}</button>
    </article>
  );
};

export default BookCard;
