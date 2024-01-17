import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookCardList from "./containers/BookCardList/BookCardList";

function App() {
  const [bookData, setBookData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("mockingbird");
  const [loading, setLoading] = useState(false);

  const fetchBookData = async () => {
    const fetchedData = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=2`
    );
    const returnedData = await fetchedData.json();
    return returnedData.items[0].results;
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
      <Header />
      <SearchBar setSearchTerm={setSearchTerm} />
      {loading && <p>Loading...</p>}
      {!loading && <BookCardList bookData={bookData} searchTerm={searchTerm} />}
    </>
  );
}

export default App;
