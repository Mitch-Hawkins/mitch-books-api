import { useContext } from "react";
import { ModalContext } from "../../context/ModalContextProvider";
import { useState, useEffect, useRef } from "react";
import ModalCard from "../../components/ModalCard/ModalCard";
import styles from "./BookModal.module.scss";

const BookModal = () => {
  const { modalData, setModalData, isModalOpen, setIsModalOpen } =
    useContext(ModalContext);

  const modalRef = useRef(null);

  useEffect(() => {
    console.log(modalRef.current);
    if (modalData) {
      modalRef.current.showModal();
    }
    if (!isModalOpen) {
      modalRef.current.close();
    }
  }, [modalData, isModalOpen]);

  const fixThumbnail = (book) => {
    if (!modalData) {
      return " ";
    }
    if (book.volumeInfo.imageLinks) {
      console.log(book.volumeInfo.imageLinks.thumbnail);
      return book.volumeInfo.imageLinks.thumbnail;
    } else {
      return " ";
    }
  };

  const bookImage = fixThumbnail(modalData);

  return (
    <>
      <dialog className={styles.modalcontainer} ref={modalRef}>
        {isModalOpen && (
          <ModalCard
            key={modalData.id}
            title={modalData.volumeInfo.title}
            author={modalData.volumeInfo.authors}
            pages={modalData.volumeInfo.pageCount}
            description={modalData.volumeInfo.description}
            image={bookImage}
          />
        )}
      </dialog>
    </>
  );
};

export default BookModal;
