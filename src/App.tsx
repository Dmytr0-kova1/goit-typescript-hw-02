import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchPhotos, { Image } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    const renderPhotos = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { results } = await fetchPhotos(query, page);
        setImages((prev) => [...prev, ...results]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    renderPhotos();
  }, [query, page]);

  const handleSearch = (newPhoto: string) => {
    if (newPhoto === query) return;

    setQuery(newPhoto);
    setImages([]);
    setPage(1);
  };

  const handleClickLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleModelImage = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onClick={handleModelImage} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={handleClickLoadMore} />}
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onCloseModal={handleCloseModal}
      />
    </div>
  );
}

export default App;
