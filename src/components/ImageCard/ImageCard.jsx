import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt }) => {
  return (
    <div>
      <img className={s.img} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
