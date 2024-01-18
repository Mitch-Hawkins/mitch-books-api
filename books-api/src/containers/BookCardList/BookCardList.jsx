import BookCard from "../../components/BookCard/BookCard";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContextProvider";

const BookCardList = ({ bookData }) => {
  const { modalData, setModalData } = useContext(ModalContext);

  useEffect(() => {
    console.log(modalData);
  }, [modalData]);

  return (
    <div>
      {bookData &&
        bookData.map((book, i) => {
          return (
            <div key={book.etag}>
              <BookCard
                key={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                pages={book.volumeInfo.pageCount}
                description={book.volumeInfo.description}
                id={i}
                bookData={bookData}
                setModalData={setModalData}
              />
            </div>
          );
        })}
    </div>
  );
};

export default BookCardList;
//
