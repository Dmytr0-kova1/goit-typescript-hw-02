import { Image } from "../../services/api";
import s from "./ImageCard.module.css";

interface Props {
  src: string;
  alt: string;
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<Props> = ({ src, alt, onClick, image }) => {
  return (
    <div>
      <img
        className={s.img}
        src={src}
        alt={alt}
        onClick={() => onClick(image)}
      />
    </div>
  );
};

export default ImageCard;
