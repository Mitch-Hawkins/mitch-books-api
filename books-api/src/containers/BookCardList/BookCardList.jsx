import BookCard from "../../components/BookCard/BookCard";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContextProvider";
import styles from "./BookCardList.module.scss";

const BookCardList = ({ bookData }) => {
  const { modalData, setModalData } = useContext(ModalContext);

  useEffect(() => {
    console.log(modalData);
  }, [modalData]);

  const fixThumbnail = (book, i) => {
    // console.log(book.volumeInfo.imageLinks, i);
    if (book.volumeInfo.imageLinks) {
      return book.volumeInfo.imageLinks.thumbnail;
    } else {
      return "";
    }
  };

  return (
    <div className={styles.container}>
      {bookData &&
        bookData.map((book, i) => {
          const bookImage = fixThumbnail(book, i);
          return (
            <div key={book.etag}>
              <BookCard
                key={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                pages={book.volumeInfo.pageCount}
                description={book.volumeInfo.description}
                image={bookImage}
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
