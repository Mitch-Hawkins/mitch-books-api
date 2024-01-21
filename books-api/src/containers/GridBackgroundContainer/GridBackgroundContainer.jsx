import { useEffect, useState } from "react";
import BackgroundCarousel from "../../components/BackgroundCarousel/BackgroundCarousel";
import styles from "./GridBackgroundContainer.module.scss";

const GridBackgroundContainer = ({ searchTerm }) => {
  const [gridBackground, setGridBackground] = useState(false);
  const [backgroundError, setBackgroundError] = useState(false);

  const fetchBackgroundData = async () => {
    const fetchedData = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=penguin-classics
      &maxResults=39`
    );
    const returnedData = await fetchedData.json();
    console.log(returnedData);
    if (returnedData.hasOwnProperty("error")) {
      console.log(returnedData.hasOwnProperty("error"));
      setBackgroundError(true);
      return returnedData.error;
    } else {
      setBackgroundError(false);
      return returnedData.items;
    }
  };

  useEffect(() => {
    if (!searchTerm && !gridBackground) {
      fetchBackgroundData().then((res) => setGridBackground(res));
    }
    if (searchTerm) {
      setGridBackground(false);
    }
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      {!backgroundError && gridBackground && (
        <BackgroundCarousel gridBackground={gridBackground} rowNumber={1} />
      )}
      {!backgroundError && gridBackground && (
        <BackgroundCarousel gridBackground={gridBackground} rowNumber={2} />
      )}
      {!backgroundError && gridBackground && (
        <BackgroundCarousel gridBackground={gridBackground} rowNumber={3} />
      )}
    </div>
  );
};

export default GridBackgroundContainer;
