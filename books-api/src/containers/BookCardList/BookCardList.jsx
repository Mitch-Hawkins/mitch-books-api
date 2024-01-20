import BookCard from "../../components/BookCard/BookCard";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContextProvider";
import styles from "./BookCardList.module.scss";

const BookCardList = ({ bookData, errorStatus }) => {
  const { modalData, setModalData } = useContext(ModalContext);

  useEffect(() => {
    console.log(modalData);
  }, [modalData]);

  const fixThumbnail = (book, i) => {
    if (book.volumeInfo.imageLinks) {
      return book.volumeInfo.imageLinks.thumbnail;
    } else {
      return "";
    }
  };

  const fixAuthors = (book) => {
    if (
      book.volumeInfo.hasOwnProperty("authors") &&
      book.volumeInfo.authors.length >= 2
    ) {
      return book.volumeInfo.authors.join(", ");
    } else {
      return book.volumeInfo.authors;
    }
  };

  return (
    <div className={styles.container}>
      {bookData &&
        !errorStatus &&
        bookData.map((book, i) => {
          const bookImage = fixThumbnail(book, i);
          const bookAuthors = fixAuthors(book);
          return (
            <div key={book.etag}>
              <BookCard
                key={book.id}
                title={book.volumeInfo.title}
                author={bookAuthors}
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
