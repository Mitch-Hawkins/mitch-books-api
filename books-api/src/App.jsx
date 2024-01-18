import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookCardList from "./containers/BookCardList/BookCardList";
import ModalContextProvider from "./context/ModalContextProvider";
import BookModal from "./containers/BookModal/BookModal";

function App() {
  const [bookData, setBookData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBookData = async () => {
    const fetchedData = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    const returnedData = await fetchedData.json();
    console.log(returnedData.items);
    return returnedData.items;
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
        <BookModal />
      </ModalContextProvider>
    </>
  );
}

export default App;
