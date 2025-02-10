import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { Image } from "../../services/api";

interface Props {
  isOpen: boolean;
  onCloseModal: () => void;
  image: Image | null;
}

const ImageModal: React.FC<Props> = ({ isOpen, onCloseModal, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      overlayClassName={s.overlay}
      className={s.modal}
    >
      <div>
        <img
          className={s.img}
          src={image.urls.small}
          alt={image.alt_description || "Image"}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
