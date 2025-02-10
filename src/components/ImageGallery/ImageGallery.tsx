import { Image } from "../../services/api";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface Props {
  images: Image[];
  onClick: (image: Image) => void;
}

const ImageGallery: React.FC<Props> = ({ images, onClick }) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description || "Image"}
            onClick={onClick}
            image={image}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
