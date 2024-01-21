import React from "react";
import styles from "./BackgroundCarousel.module.scss";
import BackgroundBook from "../BackgroundBook/BackgroundBook";

const BackgroundCarousel = ({ gridBackground, rowNumber }) => {
  const fixThumbnail = (book) => {
    if (book.volumeInfo.imageLinks) {
      return book.volumeInfo.imageLinks.thumbnail;
    } else {
      return "";
    }
  };

  let classToAdd;

  switch (rowNumber) {
    case 1:
      classToAdd = styles.container;
      break;
    case 2:
      classToAdd = styles.containerTwo;
      break;
    case 3:
      classToAdd = styles.containerThree;
      break;
  }

  console.log(`Row ${rowNumber} is set to class ${classToAdd}`);

  return (
    <div className={classToAdd}>
      {gridBackground &&
        gridBackground.map((book) => {
          const bookImage = fixThumbnail(book);
          return <BackgroundBook image={bookImage} />;
        })}
      {gridBackground &&
        gridBackground.map((book) => {
          const bookImage = fixThumbnail(book);
          return <BackgroundBook image={bookImage} />;
        })}
    </div>
  );
};

export default BackgroundCarousel;
