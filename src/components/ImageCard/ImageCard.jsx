import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClickImg, item }) => {
  return (
    <div>
      <img
        className={s.img}
        src={src}
        alt={alt}
        onClick={() => onClickImg(item)}
      />
    </div>
  );
};

export default ImageCard;
