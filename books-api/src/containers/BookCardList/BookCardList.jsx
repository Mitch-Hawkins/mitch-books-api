import BookCard from "../../components/BookCard/BookCard";

const BookCardList = ({ bookData }) => {
  return (
    <div>
      {bookData &&
        bookData.map((book) => {
          return (
            <BookCard
              key={book.industryIdentifiers[0].identifier}
              title={book.title}
            />
          );
        })}
    </div>
  );
};

export default BookCardList;
