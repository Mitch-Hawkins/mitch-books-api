import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookCardList from "./containers/BookCardList/BookCardList";
import ModalContextProvider from "./context/ModalContextProvider";
import BookModal from "./containers/BookModal/BookModal";
import PageSelector from "./components/PageSelector/PageSelector";
import HeadingContainer from "./containers/HeadingContainer/HeadingContainer";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import FooterContainer from "./containers/FooterContainer/FooterContainer";
import GridBackgroundContainer from "./containers/GridBackgroundContainer/GridBackgroundContainer";
import NoResultsMessage from "./components/NoResultsMessage/NoResultsMessage";

function App() {
  const [bookData, setBookData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(20);

  const [errorStatus, setErrorStatus] = useState(false);
  const [areNoResults, setAreNoResults] = useState(null);

  const [loadingIcon] = useState("books-api/src/assets/icons8-open-book.gif");

  const fetchBookData = async () => {
    const fetchedData = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${
        pageNumber * resultsPerPage - resultsPerPage
      }&maxResults=${resultsPerPage}`
    );
    const returnedData = await fetchedData.json();
    console.log(returnedData);
    if (returnedData.hasOwnProperty("error")) {
      console.log(returnedData.hasOwnProperty("error"));
      setErrorStatus(true);
      setAreNoResults(false);
      return returnedData.error;
    } else if (returnedData.totalItems == 0) {
      setAreNoResults(true);
      setErrorStatus(false);
      return returnedData.totalItems;
    } else {
      setErrorStatus(false);
      setAreNoResults(false);
      return returnedData.items;
    }
  };

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    setLoading(true);
    fetchBookData()
      .then((result) => {
        setBookData(result);
      })
      .catch((e) => console.log(e.message))
      .finally(() => {
        setLoading(false);
      });
    console.log(pageNumber * resultsPerPage - resultsPerPage);
  }, [searchTerm, pageNumber]);

  useEffect(() => {
    setPageNumber(1);
  }, [searchTerm]);

  return (
    <>
      <ModalContextProvider>
        {/* Grid Background */}
        <GridBackgroundContainer searchTerm={searchTerm} />
        <HeadingContainer
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        {!errorStatus && !areNoResults && bookData && (
          <PageSelector
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            bookData={bookData}
            resultsPerPage={resultsPerPage}
          />
        )}
        {loading && <LoadingSpinner loadingIcon={loadingIcon} />}
        {/* {console.log(errorStatus)} */}
        {!loading && !errorStatus && !areNoResults && bookData && (
          <BookCardList
            bookData={bookData}
            searchTerm={searchTerm}
            errorStatus={errorStatus}
          />
        )}
        {!loading && errorStatus && !areNoResults && (
          <ErrorMessage bookData={bookData} />
        )}
        {!loading && !errorStatus && areNoResults && <NoResultsMessage />}
        {/* {console.log(
          !errorStatus && bookData && !areNoResults && <PageSelector />
        )}
        {console.log(!errorStatus)}
        {console.log(bookData)}
        {console.log(!areNoResults)}
        {console.log(<PageSelector />)} */}
        {!errorStatus && !areNoResults && bookData && (
          <PageSelector
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            bookData={bookData}
            resultsPerPage={resultsPerPage}
          />
        )}
        <FooterContainer />
        <BookModal />
      </ModalContextProvider>
    </>
  );
}

export default App;
