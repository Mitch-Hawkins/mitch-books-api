import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookCardList from "./containers/BookCardList/BookCardList";
import ModalContextProvider from "./context/ModalContextProvider";

function App() {
  const [bookData, setBookData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBookData = async () => {
    // const fetchedData = await fetch(
    //   `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=2`
    // );
    const fetchedData = await fetch(
      `https://swapi.dev/api/starships/?search=${searchTerm}`
    );
    const returnedData = await fetchedData.json();
    console.log(returnedData.results);
    return returnedData.results;
  };

  useEffect(() => {
    setLoading(true);
    fetchBookData()
      .then((result) => {
        setBookData(result);
      })
      .catch((e) => console.log(e.message))
      .finally(() => {
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <>
      {/* Grid Background */}
      <ModalContextProvider>
        <Header />
        <SearchBar setSearchTerm={setSearchTerm} />
        {loading && <p>Loading...</p>}
        {!loading && (
          <BookCardList bookData={bookData} searchTerm={searchTerm} />
        )}
      </ModalContextProvider>
    </>
  );
}

export default App;
