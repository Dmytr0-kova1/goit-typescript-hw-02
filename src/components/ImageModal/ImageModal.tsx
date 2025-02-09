import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onCloseModal, image }) => {
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
          alt={image.alt_description}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
