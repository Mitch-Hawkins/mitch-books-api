import { useState, useEffect } from "react";

const PageSelector = ({
  pageNumber,
  setPageNumber,
  bookData,
  resultsPerPage,
}) => {
  const [incrementDisabled, setIncrementDisabled] = useState(false);
  const [decrementDisabled, setDecrementDisabled] = useState(true);

  const handleDecrement = () => {
    if (pageNumber <= 1) {
      setPageNumber(pageNumber);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleIncrement = () => {
    if (bookData.length < resultsPerPage) {
      setPageNumber(pageNumber);
    } else {
      setPageNumber(pageNumber + 1);
    }
  };

  useEffect(() => {
    if (pageNumber <= 1) {
      setDecrementDisabled(true);
    } else {
      setDecrementDisabled(false);
    }

    if (bookData.length < resultsPerPage) {
      setIncrementDisabled(true);
    } else {
      setIncrementDisabled(false);
    }
  }, [pageNumber]);

  return (
    <div>
      <button disabled={decrementDisabled} onClick={handleDecrement}>
        Previous Page
      </button>
      <p>{pageNumber}</p>
      <button disabled={incrementDisabled} onClick={handleIncrement}>
        Next Page
      </button>
    </div>
  );
};

export default PageSelector;
