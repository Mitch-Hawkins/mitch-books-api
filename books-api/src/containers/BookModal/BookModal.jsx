import { useContext } from "react";
import { ModalContext } from "../../context/ModalContextProvider";
import { useState, useEffect, useRef } from "react";
import ModalCard from "../../components/ModalCard/ModalCard";

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

  return (
    <>
      <dialog ref={modalRef}>
        {isModalOpen && (
          <ModalCard
            key={modalData.id}
            title={modalData.volumeInfo.title}
            author={modalData.volumeInfo.authors}
            pages={modalData.volumeInfo.pageCount}
            description={modalData.volumeInfo.description}
          />
        )}
      </dialog>
    </>
  );
};

export default BookModal;
