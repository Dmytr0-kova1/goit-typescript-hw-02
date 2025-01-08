import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ img, onClickImg }) => {
  return (
    <ul className={s.list}>
      {img.map((item) => (
        <list key={item.id} onClick={() => onClickImg(item)}>
          <ImageCard src={item.urls.small} alt={item.alt_description} />
        </list>
      ))}
    </ul>
  );
};

export default ImageGallery;
