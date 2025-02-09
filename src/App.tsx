import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchPhotos from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query) return;

    const renderPhotos = async () => {
      try {
        setIsLoading(true);

        const { results } = await fetchPhotos(query, page);
        setImages((prev) => [...prev, ...results]);
      } catch (_) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    renderPhotos();
  }, [query, page]);

  const getQueryInput = (newPhoto) => {
    if (newPhoto === query) return;

    setQuery(newPhoto);
    setImages([]);
    setPage(1);
  };

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  const handleModelImage = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={getQueryInput} />
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery img={images} onClickImg={handleModelImage} />
      )}
      {isLoading && <Loader />}
      {page && <LoadMoreBtn click={handleClick} />}
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onCloseModal={handleCloseModal}
      />
    </>
  );
}

export default App;
