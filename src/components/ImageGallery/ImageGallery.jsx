import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ img, onClickImg }) => {
  return (
    <ul className={s.list}>
      {img.map((item) => (
        <li key={item.id}>
          <ImageCard
            src={item.urls.small}
            alt={item.alt_description}
            onClickImg={onClickImg}
            item={item}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
