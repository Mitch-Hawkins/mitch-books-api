import BookCard from "../../components/BookCard/BookCard";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContextProvider";

const BookCardList = ({ bookData }) => {
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    console.log(modalData);
  }, [modalData]);

  return (
    <div>
      {bookData &&
        bookData.map((book, i) => {
          return (
            <div key={book.length}>
              <BookCard
                key={book.name}
                title={book.name}
                author={book.manufacturer}
                pages={book.passengers}
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
